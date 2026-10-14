import { useMemo, useState } from 'react';
import { CUTOFFS, CAMPUS_NAMES, ALL_PROGRAMS } from '../data/admissionData.js';
import {
  calculateDetailedCbtScore,
  calculateNetCbtScore,
  getPhaseCutoff,
  getProbability,
  getScoreToRankEstimate
} from '../utils/calculations.js';

type ToolId = 'predictor' | 'calculator' | 'estimator';
type Scope = 'campus' | 'compare';
type FeeType = 'Regular' | 'FullFee';
type Quota = 'Open' | 'Janajati' | 'Female_FmQ' | 'Female_RsQ';
type CutoffTable = Record<string, Record<string, Record<string, Record<string, number>>>>;

type Props = { initialTool?: ToolId };

type DetailedInput = { correct1: number; wrong1: number; correct2: number; wrong2: number };
type DetailedResult = { score1: number; score2: number; totalNet: number; totalPenalty: number; totalAttempted: number; isQualified: boolean; percentage: number };
type Estimate = { range: string; msg: string; isQualified: boolean };
type Probability = { status: string; message: string; color?: string };
type PredictorResult = { campus: string; status: string; message: string; color?: string; cutoff?: number };
const cutoffTable = CUTOFFS as CutoffTable;
const campuses = Object.keys(cutoffTable);
const campusLabels = CAMPUS_NAMES as Record<string, string>;
const feeLabels: Record<FeeType, string> = { Regular: 'Regular', FullFee: 'Full fee' };
const quotaLabels: Record<Quota, string> = {
  Open: 'Open',
  Janajati: 'Janajati',
  Female_FmQ: 'Female, FMQ',
  Female_RsQ: 'Female, RSQ'
};
const detailedScore = calculateDetailedCbtScore as unknown as (input: DetailedInput) => DetailedResult;
const scoreEstimate = getScoreToRankEstimate as unknown as (score: number) => Estimate;
const probability = getProbability as unknown as (rank: number, cutoff: number, phase: number) => Probability;

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return <label className="workspace-field"><span>{label}</span>{children}{hint && <small>{hint}</small>}</label>;
}

function Predictor() {
  const [scope, setScope] = useState<Scope>('campus');
  const [rank, setRank] = useState('');
  const [campus, setCampus] = useState(campuses[0] ?? 'Pulchowk');
  const [program, setProgram] = useState('Civil Engineering');
  const [fee, setFee] = useState<FeeType>('Regular');
  const [quota, setQuota] = useState<Quota>('Open');
  const [phase, setPhase] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const programs = useMemo(() => Object.keys(cutoffTable[campus] ?? {}), [campus]);
  const availablePrograms = scope === 'campus' ? programs : ALL_PROGRAMS;
  const selectedProgram = availablePrograms.includes(program) ? program : (availablePrograms[0] ?? 'Civil Engineering');
  const numericRank = Number.parseInt(rank, 10);

  const results: PredictorResult[] = submitted && Number.isFinite(numericRank) && numericRank > 0
    ? (scope === 'campus'
      ? [campus]
      : campuses).map((campusKey) => {
        const feeData = cutoffTable[campusKey]?.[selectedProgram]?.[fee];
        if (!feeData) return { campus: campusKey, status: 'NOT OFFERED', message: 'This program and fee category are not listed for this campus.' };
          const cutoff = getPhaseCutoff(feeData[quota] ?? feeData.Open, fee, phase);
          return { campus: campusKey, ...probability(numericRank, cutoff, phase), cutoff };
      })
    : [];

  return <section className="workspace-panel" aria-labelledby="predictor-title">
    <div className="workspace-heading"><div><p className="workspace-kicker">Historical reference</p><h3 id="predictor-title">Rank probability predictor</h3></div><span className="workspace-chip">No guarantees</span></div>
    <p className="workspace-copy">Compare your merit rank with historical closing benchmarks. Demand, seats, quotas, and current notices can change the outcome.</p>
    <div className="workspace-switcher" role="group" aria-label="Prediction scope">
      <button className={scope === 'campus' ? 'is-active' : ''} type="button" onClick={() => setScope('campus')}>One campus</button>
      <button className={scope === 'compare' ? 'is-active' : ''} type="button" onClick={() => setScope('compare')}>Compare campuses</button>
    </div>
    <form className="workspace-grid" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
      <Field label="Merit rank"><input required min="1" max="15000" inputMode="numeric" type="number" value={rank} onChange={(event) => setRank(event.target.value)} placeholder="e.g. 240" /></Field>
      {scope === 'campus' && <Field label="Campus"><select value={campus} onChange={(event) => { setCampus(event.target.value); setSubmitted(false); }}>{campuses.map((key) => <option key={key} value={key}>{campusLabels[key]}</option>)}</select></Field>}
      <Field label="Program"><select value={selectedProgram} onChange={(event) => setProgram(event.target.value)}>{availablePrograms.map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="Fee category"><select value={fee} onChange={(event) => setFee(event.target.value as FeeType)}>{Object.entries(feeLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></Field>
      <Field label="Quota"><select value={quota} onChange={(event) => setQuota(event.target.value as Quota)}>{Object.entries(quotaLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></Field>
      <Field label="Merit-list phase"><select value={phase} onChange={(event) => setPhase(Number(event.target.value))}><option value="1">Phase 1 benchmark</option><option value="2">Later-list estimate</option></select></Field>
      <button className="workspace-primary" type="submit">Check historical outlook</button>
    </form>
    {submitted && results.length > 0 && <div className="workspace-results" aria-live="polite">{results.map((result) => <article className={`result-card result-${result.color ?? 'slate'}`} key={result.campus}><div><strong>{campusLabels[result.campus] ?? result.campus}</strong><span>{result.cutoff ? `Historical closing rank: ${result.cutoff}` : 'Reference unavailable'}</span></div><b>{result.status}</b><p>{result.message}</p></article>)}</div>}
    <p className="workspace-disclaimer">Historical cutoffs are statistical references, not official allocation decisions. Verify current information at the <a href="https://entrance.ioe.edu.np/">IOE entrance portal</a>.</p>
  </section>;
}

function Calculator() {
  const [correct, setCorrect] = useState('');
  const [wrong, setWrong] = useState('');
  const [result, setResult] = useState<DetailedResult | null>(null);
  const [mode, setMode] = useState<'quick' | 'detailed'>('quick');
  const [detail, setDetail] = useState({ correct1: '', wrong1: '', correct2: '', wrong2: '' });
  const quickResult = result;

  return <section className="workspace-panel" aria-labelledby="calculator-title">
    <div className="workspace-heading"><div><p className="workspace-kicker">140-mark CBT</p><h3 id="calculator-title">Negative-marking calculator</h3></div><span className="workspace-chip">40% pass reference</span></div>
    <p className="workspace-copy">Calculate a net score with the existing IOE question-weighted penalty rules: -0.1 for a wrong one-mark answer and -0.2 for a wrong two-mark answer.</p>
    <div className="workspace-switcher" role="group" aria-label="Calculator mode"><button className={mode === 'quick' ? 'is-active' : ''} type="button" onClick={() => setMode('quick')}>Quick marks</button><button className={mode === 'detailed' ? 'is-active' : ''} type="button" onClick={() => setMode('detailed')}>Question breakdown</button></div>
    {mode === 'quick' ? <form className="workspace-grid" onSubmit={(event) => { event.preventDefault(); const net = calculateNetCbtScore(Number(correct), Number(wrong)); setResult({ score1: net, score2: 0, totalNet: net, totalPenalty: Number((Number(wrong) * 0.1).toFixed(2)), totalAttempted: 0, isQualified: net >= 56, percentage: Number(((net / 140) * 100).toFixed(1)) }); }}><Field label="Positive marks"><input required min="0" max="140" step="any" type="number" value={correct} onChange={(event) => setCorrect(event.target.value)} placeholder="e.g. 102" /></Field><Field label="Incorrect question marks"><input required min="0" max="140" step="any" type="number" value={wrong} onChange={(event) => setWrong(event.target.value)} placeholder="e.g. 24" /></Field><button className="workspace-primary" type="submit">Calculate net score</button></form> : <form className="workspace-grid" onSubmit={(event) => { event.preventDefault(); setResult(detailedScore({ correct1: Number(detail.correct1), wrong1: Number(detail.wrong1), correct2: Number(detail.correct2), wrong2: Number(detail.wrong2) })); }}><Field label="Correct 1-mark answers"><input min="0" type="number" value={detail.correct1} onChange={(event) => setDetail({ ...detail, correct1: event.target.value })} /></Field><Field label="Wrong 1-mark answers"><input min="0" type="number" value={detail.wrong1} onChange={(event) => setDetail({ ...detail, wrong1: event.target.value })} /></Field><Field label="Correct 2-mark answers"><input min="0" type="number" value={detail.correct2} onChange={(event) => setDetail({ ...detail, correct2: event.target.value })} /></Field><Field label="Wrong 2-mark answers"><input min="0" type="number" value={detail.wrong2} onChange={(event) => setDetail({ ...detail, wrong2: event.target.value })} /></Field><button className="workspace-primary" type="submit">Calculate breakdown</button></form>}
    {quickResult && <div className={`score-result ${quickResult.isQualified ? 'score-pass' : 'score-fail'}`} aria-live="polite"><span>Estimated net score</span><strong>{quickResult.totalNet} / 140</strong><p>{quickResult.isQualified ? 'Above the 56-mark pass reference.' : 'Below the 56-mark pass reference.'} Penalty applied: {quickResult.totalPenalty}.</p></div>}
  </section>;
}

function Estimator() {
  const [score, setScore] = useState('');
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  return <section className="workspace-panel" aria-labelledby="estimator-title"><div className="workspace-heading"><div><p className="workspace-kicker">Historical curve</p><h3 id="estimator-title">Score-to-rank estimator</h3></div><span className="workspace-chip">Estimate only</span></div><p className="workspace-copy">Enter a raw CBT score to see the existing historical rank bracket. It is not an official result or a promise of admission.</p><form className="workspace-inline-form" onSubmit={(event) => { event.preventDefault(); setEstimate(scoreEstimate(Number(score))); }}><Field label="Raw score"><input required min="1" max="140" step="any" type="number" value={score} onChange={(event) => setScore(event.target.value)} placeholder="1 to 140" /></Field><button className="workspace-primary" type="submit">Estimate bracket</button></form>{estimate && <div className={`score-result score-${estimate.isQualified ? 'pass' : 'fail'}`} aria-live="polite"><span>Historical bracket</span><strong>{estimate.range}</strong><p>{estimate.msg}</p></div>}</section>;
}

export default function AdmissionWorkspace({ initialTool = 'predictor' }: Props) {
  const [tool, setTool] = useState<ToolId>(initialTool);
  return <div className="admission-workspace"><div className="workspace-tabs" role="tablist" aria-label="Interactive admission tools"><button className={tool === 'predictor' ? 'is-active' : ''} role="tab" aria-selected={tool === 'predictor'} type="button" onClick={() => setTool('predictor')}>Predictor</button><button className={tool === 'calculator' ? 'is-active' : ''} role="tab" aria-selected={tool === 'calculator'} type="button" onClick={() => setTool('calculator')}>CBT calculator</button><button className={tool === 'estimator' ? 'is-active' : ''} role="tab" aria-selected={tool === 'estimator'} type="button" onClick={() => setTool('estimator')}>Score estimator</button></div>{tool === 'predictor' && <Predictor />}{tool === 'calculator' && <Calculator />}{tool === 'estimator' && <Estimator />}</div>;
}
