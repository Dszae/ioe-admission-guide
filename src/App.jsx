import React, { useState, useEffect } from 'react';

const CUTOFFS = {
  Pulchowk: {
    "Civil Engineering": { Regular: { Open: 318, Janajati: 412, Female_FmQ: 491, Female_RsQ: 450 }, FullFee: { Open: 787, Janajati: 1150, Female_FmQ: 874, Female_RsQ: 890 } },
    "Computer Engineering": { Regular: { Open: 27, Janajati: 45, Female_FmQ: 40, Female_RsQ: 38 }, FullFee: { Open: 193, Janajati: 280, Female_FmQ: 389, Female_RsQ: 360 } },
    "Electronics, Communication and Information Engineering": { Regular: { Open: 84, Janajati: 150, Female_FmQ: 468, Female_RsQ: 420 }, FullFee: { Open: 330, Janajati: 450, Female_FmQ: 824, Female_RsQ: 800 } },
    "Electrical Engineering": { Regular: { Open: 370, Janajati: 480, Female_FmQ: 843, Female_RsQ: 800 }, FullFee: { Open: 1009, Janajati: 1500, Female_FmQ: 1638, Female_RsQ: 1600 } },
    "Mechanical Engineering": { Regular: { Open: 334, Janajati: 490, Female_FmQ: 886, Female_RsQ: 850 }, FullFee: { Open: 943, Janajati: 1400, Female_FmQ: 1921, Female_RsQ: 1850 } },
    "Architecture": { Regular: { Open: 1270, Janajati: 1350, Female_FmQ: 1285, Female_RsQ: 1250 }, FullFee: { Open: 2114, Janajati: 2600, Female_FmQ: 2498, Female_RsQ: 2450 } },
    "Aerospace Engineering": { Regular: { Open: 210, Janajati: 290, Female_FmQ: 550, Female_RsQ: 520 }, FullFee: { Open: 640, Janajati: 750, Female_FmQ: 1120, Female_RsQ: 1050 } },
    "Chemical Engineering": { Regular: { Open: 520, Janajati: 650, Female_FmQ: 1100, Female_RsQ: 1000 }, FullFee: { Open: 1850, Janajati: 2000, Female_FmQ: 2500, Female_RsQ: 2400 } }
  },
  Thapathali: {
    "Civil Engineering": { Regular: { Open: 387, Janajati: 680, Female_FmQ: 828, Female_RsQ: 810 }, FullFee: { Open: 1200, Janajati: 2100, Female_FmQ: 2248, Female_RsQ: 2200 } },
    "Computer Engineering": { Regular: { Open: 75, Janajati: 180, Female_FmQ: 510, Female_RsQ: 490 }, FullFee: { Open: 273, Janajati: 600, Female_FmQ: 814, Female_RsQ: 790 } },
    "Electronics, Communication and Information Engineering": { Regular: { Open: 224, Janajati: 450, Female_FmQ: 936, Female_RsQ: 900 }, FullFee: { Open: 718, Janajati: 1100, Female_FmQ: 1087, Female_RsQ: 1050 } },
    "Mechanical Engineering": { Regular: { Open: 463, Janajati: 750, Female_FmQ: 916, Female_RsQ: 900 }, FullFee: { Open: 1860, Janajati: 2600, Female_FmQ: 2424, Female_RsQ: 2400 } },
    "Architecture": { Regular: { Open: 1018, Janajati: 1900, Female_FmQ: 1796, Female_RsQ: 1750 }, FullFee: { Open: 2581, Janajati: 4000, Female_FmQ: 3826, Female_RsQ: 3800 } },
    "Automobile Engineering": { Regular: { Open: 950, Janajati: 1100, Female_FmQ: 1600, Female_RsQ: 1550 }, FullFee: { Open: 3100, Janajati: 3400, Female_FmQ: 3800, Female_RsQ: 3750 } },
    "Industrial Engineering": { Regular: { Open: 880, Janajati: 1050, Female_FmQ: 1550, Female_RsQ: 1500 }, FullFee: { Open: 2900, Janajati: 3200, Female_FmQ: 3600, Female_RsQ: 3500 } }
  },
  WRC: {
    "Civil Engineering": { Regular: { Open: 693, Janajati: 1100, Female_FmQ: 1140, Female_RsQ: 1120 }, FullFee: { Open: 2448, Janajati: 5400, Female_FmQ: 5127, Female_RsQ: 5100 } },
    "Computer Engineering": { Regular: { Open: 164, Janajati: 380, Female_FmQ: 282, Female_RsQ: 270 }, FullFee: { Open: 647, Janajati: 1200, Female_FmQ: 1223, Female_RsQ: 1200 } },
    "Electronics, Communication and Information Engineering": { Regular: { Open: 408, Janajati: 680, Female_FmQ: 581, Female_RsQ: 550 }, FullFee: { Open: 1703, Janajati: 2500, Female_FmQ: 2340, Female_RsQ: 2300 } },
    "Electrical Engineering": { Regular: { Open: 697, Janajati: 900, Female_FmQ: 1743, Female_RsQ: 1700 }, FullFee: { Open: 2988, Janajati: 4300, Female_FmQ: 4129, Female_RsQ: 4100 } },
    "Mechanical Engineering": { Regular: { Open: 916, Janajati: 1300, Female_FmQ: 1187, Female_RsQ: 1150 }, FullFee: { Open: 3378, Janajati: 4700, Female_FmQ: 4561, Female_RsQ: 4500 } },
    "Geomatics Engineering": { Regular: { Open: 850, Janajati: 950, Female_FmQ: 1050, Female_RsQ: 1000 }, FullFee: { Open: 3200, Janajati: 3500, Female_FmQ: 3800, Female_RsQ: 3700 } }
  },
  ERC: {
    "Civil Engineering": { Regular: { Open: 1017, Janajati: 1850, Female_FmQ: 1463, Female_RsQ: 1500 }, FullFee: { Open: 3821, Janajati: 6800, Female_FmQ: 6560, Female_RsQ: 6500 } },
    "Computer Engineering": { Regular: { Open: 384, Janajati: 750, Female_FmQ: 619, Female_RsQ: 600 }, FullFee: { Open: 1598, Janajati: 2900, Female_FmQ: 2644, Female_RsQ: 2600 } },
    "Electronics, Communication and Information Engineering": { Regular: { Open: 942, Janajati: 1900, Female_FmQ: 1768, Female_RsQ: 1750 }, FullFee: { Open: 3184, Janajati: 6600, Female_FmQ: 6417, Female_RsQ: 6400 } },
    "Electrical Engineering": { Regular: { Open: 1258, Janajati: 1700, Female_FmQ: 1583, Female_RsQ: 1550 }, FullFee: { Open: 4595, Janajati: 6700, Female_FmQ: 6447, Female_RsQ: 6400 } },
    "Mechanical Engineering": { Regular: { Open: 1592, Janajati: 2000, Female_FmQ: 1921, Female_RsQ: 1900 }, FullFee: { Open: 4953, Janajati: 6900, Female_FmQ: 6616, Female_RsQ: 6600 } },
    "Architecture": { Regular: { Open: 3321, Janajati: 2300, Female_FmQ: 2100, Female_RsQ: 2050 }, FullFee: { Open: 6563, Janajati: 4800, Female_FmQ: 4500, Female_RsQ: 4400 } },
    "Agricultural Engineering": { Regular: { Open: 1450, Janajati: 1600, Female_FmQ: 1750, Female_RsQ: 1700 }, FullFee: { Open: 4200, Janajati: 4500, Female_FmQ: 4800, Female_RsQ: 4700 } }
  },
  ChEC: {
    "Computer Engineering": { Regular: { Open: 450, Janajati: 550, Female_FmQ: 400, Female_RsQ: 380 }, FullFee: { Open: 1800, Janajati: 2000, Female_FmQ: 1950, Female_RsQ: 1900 } },
    "Architecture": { Regular: { Open: 1800, Janajati: 1950, Female_FmQ: 1800, Female_RsQ: 1750 }, FullFee: { Open: 3500, Janajati: 3800, Female_FmQ: 3600, Female_RsQ: 3500 } }
  }
};

const CAMPUS_NAMES = {
  Pulchowk: 'Pulchowk Campus',
  Thapathali: 'Thapathali Campus',
  WRC: 'Pashchimanchal Campus (WRC)',
  ERC: 'Purwanchal Campus (ERC)',
  ChEC: 'Chitwan Eng. Campus (ChEC)'
};

const ALL_PROGRAMS = [
  "Civil Engineering", "Computer Engineering", "Electrical Engineering", 
  "Electronics, Communication and Information Engineering", "Mechanical Engineering", 
  "Architecture", "Aerospace Engineering", "Chemical Engineering", 
  "Automobile Engineering", "Industrial Engineering", "Geomatics Engineering", 
  "Agricultural Engineering"
];

const AFFILIATED_COLLEGES = [
  { name: "Kathmandu Engineering College (KEC)", location: "Kalimati", programs: "Civil, Computer, Electrical, Electronics, Architecture", fee: "≈ 14-16 Lakhs", cutoff: "Rank ~4000+" },
  { name: "Kantipur Engineering College (KEC)", location: "Dhapakhel", programs: "Civil, Computer, Electronics", fee: "≈ 13-15 Lakhs", cutoff: "Rank ~4500+" },
  { name: "Advanced College of Engineering", location: "Kupondole", programs: "Civil, Computer, Electrical, Electronics", fee: "≈ 14-15 Lakhs", cutoff: "Rank ~4000+" },
  { name: "Himalaya College of Engineering", location: "Chyasal", programs: "Civil, Computer, Architecture", fee: "≈ 12-14 Lakhs", cutoff: "Rank ~5000+" },
  { name: "Kathford International College", location: "Balkumari", programs: "Civil, Computer, Electronics", fee: "≈ 12-14 Lakhs", cutoff: "Rank ~5500+" },
  { name: "National College of Engineering", location: "Talchikhel", programs: "Civil, Computer, Electrical, Electronics", fee: "≈ 12-14 Lakhs", cutoff: "Rank ~6000+" }
];

const FACULTY_DATA = {
  "Computer Engineering": { tags: ["Software", "High Math", "IT Sector"], overlap: { "Electronics, Communication and Information Engineering": "70%", "Electrical Engineering": "40%" } },
  "Electronics, Communication and Information Engineering": { tags: ["Hardware+Software", "Telecom", "IT Sector"], overlap: { "Computer Engineering": "70%", "Electrical Engineering": "60%" } },
  "Electrical Engineering": { tags: ["Power Systems", "Heavy Math", "NEA/Gov"], overlap: { "Electronics, Communication and Information Engineering": "60%", "Mechanical Engineering": "30%" } },
  "Civil Engineering": { tags: ["Infrastructure", "Design", "Gov/Construction"], overlap: { "Architecture": "20%", "Agricultural Engineering": "30%" } },
  "Mechanical Engineering": { tags: ["Machines", "Automotive", "Manufacturing"], overlap: { "Automobile Engineering": "80%", "Aerospace Engineering": "60%", "Industrial Engineering": "70%" } },
  "Architecture": { tags: ["Design", "Drawing", "Consultancy"], overlap: { "Civil Engineering": "20%" } }
};

const FINANCIALS = {
  Regular: { tuition: "≈ 53,000", living: "≈ 4,80,000", total: "≈ 5,33,000" },
  FullFee: { tuition: "≈ 3,18,000 - 4,90,000", living: "≈ 4,80,000", total: "≈ 7,98,000 - 9,70,000" },
  Affiliated: { tuition: "≈ 10,00,000 - 16,00,000", living: "≈ 4,80,000", total: "≈ 14,80,000+" }
};

const TABS = [
  { 
    id: 'predictor', 
    label: 'Rank Predictor', 
    icon: <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> 
  },
  { 
    id: 'guide', 
    label: 'Admission Guide', 
    icon: <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg> 
  },
  { 
    id: 'priority', 
    label: 'Priority Form', 
    icon: <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg> 
  },
  { 
    id: 'calculator', 
    label: 'CBT Score Calc', 
    icon: <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> 
  },
  { 
    id: 'estimator', 
    label: 'Score Estimator', 
    icon: <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> 
  },
  { 
    id: 'compare', 
    label: 'Faculty Compare', 
    icon: <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg> 
  },
  { 
    id: 'affiliated', 
    label: 'Affiliated Colz', 
    icon: <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg> 
  },
  { 
    id: 'financials', 
    label: 'Financials', 
    icon: <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 
  }
];

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('predictor');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [mode, setMode] = useState('campus');
  const [phase, setPhase] = useState(1);
  const [form, setForm] = useState({ rank: '', college: 'Pulchowk', program: 'Civil Engineering', feeType: 'Regular', quota: 'Open' });
  const [singleResult, setSingleResult] = useState(null);
  const [multiResult, setMultiResult] = useState(null);

  const [score, setScore] = useState('');
  const [estimateRes, setEstimateRes] = useState(null);

  const [calcForm, setCalcForm] = useState({ correct: '', wrong: '' });
  const [calcRes, setCalcRes] = useState(null);

  const [priorityRank, setPriorityRank] = useState('');
  const [priorityLists, setPriorityLists] = useState(null);

  const [compA, setCompA] = useState('Computer Engineering');
  const [compB, setCompB] = useState('Electronics, Communication and Information Engineering');

  const availablePrograms = mode === 'campus' ? Object.keys(CUTOFFS[form.college]) : ALL_PROGRAMS;

  useEffect(() => {
    if (mode === 'campus' && !availablePrograms.includes(form.program)) {
      setForm(prev => ({ ...prev, program: availablePrograms[0] }));
    }
  }, [form.college, availablePrograms, form.program, mode]);

  const getProbability = (rank, cutoff) => {
    if (rank <= cutoff * 0.8) return { status: 'HIGH', message: 'Safe Zone.', color: 'emerald' };
    if (rank <= cutoff) return { status: 'MODERATE', message: 'Borderline.', color: 'amber' };
    if (rank <= cutoff + (phase === 2 ? 100 : 200)) return { status: 'LOW', message: 'Tough Odds.', color: 'orange' };
    return { status: 'UNLIKELY', message: 'Statistically Unlikely.', color: 'red' };
  };

  const getPhaseCutoff = (baseCutoff, feeType) => {
    if (phase === 1) return baseCutoff;
    const multiplier = feeType === 'FullFee' ? 1.45 : 1.15;
    return Math.floor(baseCutoff * multiplier);
  };

  const handlePredict = (e) => {
    e.preventDefault();
    const rank = parseInt(form.rank);
    if (!rank || rank < 1) return;

    if (mode === 'campus') {
      const feeData = CUTOFFS[form.college][form.program]?.[form.feeType];
      if (!feeData) return setSingleResult({ status: 'UNAVAILABLE', message: `Data unavailable.` });
      const baseCutoff = feeData[form.quota] || feeData['Open'];
      const finalCutoff = getPhaseCutoff(baseCutoff, form.feeType);
      setSingleResult({ ...getProbability(rank, finalCutoff), cutoff: finalCutoff, input: rank });
    } else {
      const resultsAcrossCampuses = Object.keys(CUTOFFS).map(campusName => {
        const programData = CUTOFFS[campusName][form.program];
        if (!programData || !programData[form.feeType]) return { campus: campusName, status: 'NOT OFFERED' };
        const baseCutoff = programData[form.feeType][form.quota] || programData[form.feeType]['Open'];
        const finalCutoff = getPhaseCutoff(baseCutoff, form.feeType);
        return { campus: campusName, ...getProbability(rank, finalCutoff), cutoff: finalCutoff };
      });
      setMultiResult(resultsAcrossCampuses);
    }
  };

  const handleEstimate = (e) => {
    e.preventDefault();
    const s = parseFloat(score);
    if (!s || s < 40 || s > 140) {
      setEstimateRes({ range: "N/A", msg: "Score must be between 40 and 140.", color: "red" });
      return;
    }
    if (s >= 125) setEstimateRes({ range: "1 - 50", msg: "Exceptional. Topper Zone.", color: "emerald" });
    else if (s >= 110) setEstimateRes({ range: "50 - 250", msg: "Outstanding. Safe for Pulchowk Regular.", color: "emerald" });
    else if (s >= 95) setEstimateRes({ range: "250 - 700", msg: "Great. High chance for Regular across campuses.", color: "amber" });
    else if (s >= 80) setEstimateRes({ range: "700 - 1500", msg: "Good. Safe for Full Fee / WRC / ERC Regular.", color: "amber" });
    else if (s >= 65) setEstimateRes({ range: "1500 - 3000", msg: "Average. Full Fee highly likely.", color: "orange" });
    else setEstimateRes({ range: "3000 - 6000+", msg: "Borderline Pass. Affiliated colleges likely.", color: "orange" });
  };

  const handleCalc = (e) => {
    e.preventDefault();
    const c = parseFloat(calcForm.correct) || 0;
    const w = parseFloat(calcForm.wrong) || 0;
    const net = c - (w * 0.1);
    setCalcRes(net.toFixed(2));
  };

  const generatePriority = (e) => {
    e.preventDefault();
    const r = parseInt(priorityRank);
    if (!r || r < 1) return;
    
    let allOptions = [];
    Object.keys(CUTOFFS).forEach(campus => {
      Object.keys(CUTOFFS[campus]).forEach(prog => {
        ['Regular', 'FullFee'].forEach(fee => {
          if (CUTOFFS[campus][prog][fee] && CUTOFFS[campus][prog][fee]['Open']) {
            allOptions.push({
              campus, prog, fee,
              cutoff: getPhaseCutoff(CUTOFFS[campus][prog][fee]['Open'], fee)
            });
          }
        });
      });
    });

    allOptions.sort((a, b) => a.cutoff - b.cutoff);

    const ambitious = allOptions.filter(o => o.cutoff >= r * 0.6 && o.cutoff < r).slice(0, 4);
    const match = allOptions.filter(o => o.cutoff >= r && o.cutoff <= r * 1.5).slice(0, 4);
    const safety = allOptions.filter(o => o.cutoff > r * 1.5 && o.cutoff <= r * 3).slice(0, 4);

    setPriorityLists({ ambitious, match, safety });
  };

  const theme = {
    bg: isDark ? 'bg-[#0a0a0c]' : 'bg-slate-50',
    text: isDark ? 'text-slate-200' : 'text-slate-800',
    mutedText: isDark ? 'text-slate-400' : 'text-slate-500',
    cardBg: isDark ? 'bg-[#121216]/90 border-slate-800' : 'bg-white/90 border-slate-200 shadow-2xl',
    inputBg: isDark ? 'bg-[#1a1a24] border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900',
    gridLines: isDark 
      ? 'linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px)' 
      : 'linear-gradient(to right, rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.1) 1px, transparent 1px)',
    logoOpacity: isDark ? 'opacity-[0.03]' : 'opacity-10',
    toggleActive: isDark ? 'bg-cyan-600 text-white border-cyan-500 shadow-md' : 'bg-white text-cyan-700 border-slate-200 shadow-md',
    toggleInactive: isDark ? 'bg-slate-900/50 border-slate-700/50 text-slate-400 hover:text-slate-300' : 'bg-slate-200/50 border-slate-300 text-slate-600 hover:text-slate-900',
    navActive: isDark ? 'bg-cyan-600 text-white shadow-md border-cyan-500' : 'bg-cyan-50 text-cyan-700 shadow-sm border-cyan-200',
    navInactive: isDark ? 'border-transparent text-slate-400 hover:bg-white/5 hover:text-white' : 'border-transparent text-slate-600 hover:bg-black/5 hover:text-slate-900'
  };

  const InfoDisclaimer = ({ title, text }) => (
    <div className={`mt-8 sm:mt-10 p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row gap-3 text-left transition-colors print:hidden ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-800'}`}>
      <svg className="w-6 h-6 flex-shrink-0 mt-0.5 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          <svg className="w-4 h-4 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {title}
        </h4>
        <p className="text-xs leading-relaxed opacity-90">{text}</p>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen relative font-mono p-4 sm:p-8 flex flex-col items-center justify-center transition-colors duration-500 overflow-x-hidden ${theme.bg} ${theme.text} selection:bg-cyan-500/30 print:bg-white print:text-black print:p-0`}>
      <div className="absolute inset-0 z-0 pointer-events-none print:hidden" style={{ backgroundImage: theme.gridLines, backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden print:hidden">
        <img src="/ioe%20logo.jpg" alt="" className={`w-[140%] sm:w-[80%] max-w-3xl object-contain transition-opacity duration-500 ${theme.logoOpacity}`} />
      </div>

      <button onClick={() => setIsDark(!isDark)} className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all shadow-lg print:hidden ${isDark ? 'bg-slate-800/50 border-slate-700 text-yellow-400' : 'bg-white/80 border-slate-300 text-slate-800'}`}>
        {isDark ? '☀️' : '🌙'}
      </button>

      <div className="w-full max-w-6xl mb-6 sm:mb-8 relative z-10 text-center sm:text-left print:hidden mt-8 sm:mt-0">
        <h1 className="text-3xl sm:text-6xl font-black tracking-tighter leading-none mb-2">IOE ADMISSION HUB</h1>
        <p className={`text-xs sm:text-sm uppercase tracking-widest font-bold ${theme.mutedText}`}>Tribhuvan University Comprehensive Toolkit</p>
      </div>

      <div className={`w-full max-w-6xl border rounded-[2rem] sm:rounded-[2.5rem] backdrop-blur-xl relative z-10 transition-colors duration-500 flex flex-col md:flex-row overflow-hidden print:border-none print:shadow-none print:bg-transparent print:p-0 print:block ${theme.cardBg}`}>
        
        <div className="md:hidden flex justify-between items-center p-5 border-b border-inherit print:hidden">
          <span className="font-black text-sm uppercase tracking-widest text-cyan-500">
            {TABS.find(t => t.id === activeTab)?.label}
          </span>
          <div className="flex items-center gap-2">
            <button onClick={() => window.print()} title="Print or Save PDF" className="p-2 bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-lg active:scale-95 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-black/5 dark:bg-white/5 rounded-lg active:scale-95 transition-transform">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>
        </div>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col w-full md:w-80 border-b md:border-b-0 md:border-r border-inherit bg-black/5 dark:bg-white/5 print:hidden flex-shrink-0`}>
          <div className="p-4 sm:p-6 flex flex-col gap-2">
            {TABS.map(tab => (
              <button 
                key={tab.id} 
                onClick={() => { setActiveTab(tab.id); setIsMenuOpen(false); }} 
                className={`flex items-center gap-4 px-4 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border ${activeTab === tab.id ? theme.navActive : theme.navInactive}`}
              >
                {tab.icon}
                <span className="text-left leading-tight">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <main className="flex-1 p-5 sm:p-10 min-w-0">
          
          <button onClick={() => window.print()} title="Print or Save PDF" className="absolute top-6 right-6 p-2 rounded-lg bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors print:hidden hidden md:block">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          </button>

          {activeTab === 'predictor' && (
            <div className="animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-xl sm:text-2xl font-black mb-6 hidden md:block print:text-black">Rank Predictor</h3>
              <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4 print:hidden">
                <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
                  <button onClick={() => { setMode('campus'); setSingleResult(null); setMultiResult(null); }} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${mode === 'campus' ? theme.toggleActive : theme.toggleInactive}`}>By Campus</button>
                  <button onClick={() => { setMode('cross'); setSingleResult(null); setMultiResult(null); }} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${mode === 'cross' ? theme.toggleActive : theme.toggleInactive}`}>Across All</button>
                </div>
                <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
                  <button onClick={() => setPhase(1)} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${phase === 1 ? theme.toggleActive : theme.toggleInactive}`}>Phase 1 List</button>
                  <button onClick={() => setPhase(2)} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${phase === 2 ? theme.toggleActive : theme.toggleInactive}`}>Final List</button>
                </div>
              </div>

              <form onSubmit={handlePredict} className="grid sm:grid-cols-2 gap-5 sm:gap-6 print:hidden">
                <div className="sm:col-span-2">
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.mutedText}`}>Your IOE Entrance Rank</label>
                  <input type="number" placeholder="e.g. 145" className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-base sm:text-lg ${theme.inputBg}`} value={form.rank} onChange={(e) => setForm({...form, rank: e.target.value})} required min="1" />
                </div>
                {mode === 'campus' && (
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.mutedText}`}>Target Campus</label>
                    <select className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-sm uppercase tracking-wider cursor-pointer ${theme.inputBg}`} value={form.college} onChange={(e) => setForm({...form, college: e.target.value})}>
                      <option value="Pulchowk">Pulchowk Campus</option>
                      <option value="Thapathali">Thapathali Campus</option>
                      <option value="WRC">Pashchimanchal (WRC, Pokhara)</option>
                      <option value="ERC">Purwanchal (ERC, Dharan)</option>
                      <option value="ChEC">Chitwan (ChEC)</option>
                    </select>
                  </div>
                )}
                <div className={mode === 'cross' ? 'sm:col-span-2' : ''}>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.mutedText}`}>Engineering Program</label>
                  <select className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-sm tracking-wider cursor-pointer ${theme.inputBg}`} value={form.program} onChange={(e) => setForm({...form, program: e.target.value})}>
                    {availablePrograms.map(prog => <option key={prog} value={prog}>{prog}</option>)}
                  </select>
                </div>
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.mutedText}`}>Fee Structure</label>
                  <select className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-sm uppercase tracking-wider cursor-pointer ${theme.inputBg}`} value={form.feeType} onChange={(e) => setForm({...form, feeType: e.target.value})}>
                    <option value="Regular">Regular (Scholarship)</option>
                    <option value="FullFee">Full Fee (Paying)</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.mutedText}`}>Admission Quota</label>
                  <select className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-sm uppercase tracking-wider cursor-pointer ${theme.inputBg}`} value={form.quota} onChange={(e) => setForm({...form, quota: e.target.value})}>
                    <option value="Open">Open Category</option>
                    <option value="Janajati">Adivashi / Janajati</option>
                    <option value="Female_FmQ">Female Merit Quota (FmQ)</option>
                    <option value="Female_RsQ">Female Reserved Quota (RsQ)</option>
                  </select>
                </div>
                <div className="sm:col-span-2 mt-2 sm:mt-4">
                  <button type="submit" className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] active:scale-[0.98]">Analyze Probability Engine</button>
                </div>
              </form>

              <div className="hidden print:block mb-8">
                <h2 className="text-3xl font-black border-b pb-2 mb-4">IOE Prediction Report</h2>
                <p className="font-bold">Input Rank: {form.rank}</p>
                <p>Program: {form.program} ({form.feeType} - {form.quota})</p>
                <p>Phase Analysis: {phase === 1 ? 'First List' : 'Final Estimated List'}</p>
              </div>

              {mode === 'campus' && singleResult && (
                <div className="mt-8 pt-8 border-t border-slate-700/30 animate-[fadeIn_0.4s_ease-out] print:border-none print:pt-0">
                  {singleResult.status === 'UNAVAILABLE' ? (
                    <div className={`p-6 rounded-2xl text-center border print:border-black ${isDark ? 'bg-slate-900 border-slate-700 text-slate-400' : 'bg-slate-100 border-slate-300 text-slate-600'}`}>
                      <p className="font-bold">{singleResult.message}</p>
                    </div>
                  ) : (
                    <div className={`p-6 sm:p-8 border-2 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 backdrop-blur-md transition-all print:border-black print:bg-transparent print:shadow-none ${singleResult.color === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.15)]' : singleResult.color === 'amber' ? 'bg-amber-500/10 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.15)]' : singleResult.color === 'orange' ? 'bg-orange-500/10 border-orange-500/40 shadow-[0_0_40px_rgba(249,115,22,0.15)]' : 'bg-red-500/10 border-red-500/40 shadow-[0_0_40px_rgba(239,68,68,0.15)]'}`}>
                      <div className="text-center sm:text-left">
                        <h3 className={`text-3xl sm:text-5xl font-black mb-2 tracking-tight print:text-black ${singleResult.color === 'emerald' ? 'text-emerald-500' : singleResult.color === 'amber' ? 'text-amber-500' : singleResult.color === 'orange' ? 'text-orange-500' : 'text-red-500'}`}>{singleResult.status}</h3>
                        <p className={`text-sm sm:text-base font-bold print:text-black ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{singleResult.message}</p>
                      </div>
                      <div className="text-center sm:text-right flex-shrink-0">
                        <p className={`text-xs font-bold uppercase tracking-widest mb-1 print:text-black ${theme.mutedText}`}>Target Cutoff</p>
                        <p className={`text-4xl sm:text-6xl font-black print:text-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{singleResult.cutoff}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {mode === 'cross' && multiResult && (
                <div className="mt-8 pt-8 border-t border-slate-700/30 animate-[fadeIn_0.4s_ease-out] print:border-none print:pt-0">
                  <h3 className="text-lg sm:text-xl font-black mb-6 flex items-center gap-3 print:text-black"><span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse print:hidden"></span>{form.program} Analysis</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {multiResult.map((res, idx) => {
                      if (res.status === 'NOT OFFERED') return (
                        <div key={idx} className={`p-4 rounded-xl border flex justify-between items-center print:border-gray-400 ${isDark ? 'bg-[#1a1a24] border-slate-700' : 'bg-slate-100 border-slate-300'}`}>
                          <span className="font-bold print:text-black text-sm">{CAMPUS_NAMES[res.campus]}</span><span className={`text-xs uppercase font-bold px-2 py-1 rounded-md print:bg-transparent print:text-black ${isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-200 text-slate-500'}`}>Not Offered</span>
                        </div>
                      );
                      const cardTheme = res.color === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/30' : res.color === 'amber' ? 'bg-amber-500/10 border-amber-500/30' : res.color === 'orange' ? 'bg-orange-500/10 border-orange-500/30' : 'bg-red-500/10 border-red-500/30';
                      const textTheme = res.color === 'emerald' ? 'text-emerald-500' : res.color === 'amber' ? 'text-amber-500' : res.color === 'orange' ? 'text-orange-500' : 'text-red-500';
                      return (
                        <div key={idx} className={`p-4 sm:p-5 rounded-xl border backdrop-blur-md flex flex-col justify-between transition-all cursor-default print:border-black print:bg-transparent ${cardTheme}`}>
                          <div className="flex justify-between items-start mb-4 gap-2">
                            <h4 className="font-black text-sm sm:text-base print:text-black leading-tight">{CAMPUS_NAMES[res.campus]}</h4>
                            <span className={`text-[10px] sm:text-xs uppercase font-black px-2 py-1 rounded-md bg-opacity-20 whitespace-nowrap print:bg-transparent print:text-black ${textTheme} ${isDark ? 'bg-black' : 'bg-white'}`}>{res.status}</span>
                          </div>
                          <div className="flex justify-between items-end">
                            <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest print:text-black ${theme.mutedText}`}>Cutoff: <span className={`text-base sm:text-lg ml-1 print:text-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{res.cutoff}</span></p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              <InfoDisclaimer 
                title="Predictor Disclaimer" 
                text="Predictions are based on historical admission lists. Actual closing ranks fluctuate and can drop significantly lower (meaning higher ranks are accepted) in subsequent phases depending on student enrollment and dropout rates." 
              />
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-xl sm:text-2xl font-black mb-2 print:text-black">IOE Admission Guide & Procedure</h3>
              <p className={`text-sm mb-8 print:text-black ${theme.mutedText}`}>
                The official step-by-step roadmap for Tribhuvan University Institute of Engineering (IOE) B.E./B.Arch admissions.
              </p>

              <div className="space-y-6">
                <div className={`p-5 sm:p-6 rounded-2xl border print:border-black print:text-black ${isDark ? 'bg-[#1a1a24] border-slate-700' : 'bg-slate-50 border-slate-300'}`}>
                  <h4 className="font-black text-lg text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
                    <span className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded text-sm">01</span>
                    Phase-Wise Counseling & Merit Lists
                  </h4>
                  <p className="text-sm leading-relaxed mb-4">
                    IOE publishes admissions in multiple phases (typically 1st, 2nd, 3rd, and up to 5th or 6th lists) based strictly on your entrance merit rank and the Priority Form you submit online.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-500 font-black mt-0.5">➔</span>
                      <div><strong>Initial Lists:</strong> Top rankers secure Regular (scholarship) seats. As they vacate seats (e.g., for medical CEE or studying abroad), these seats are passed down to lower ranks in subsequent lists.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-500 font-black mt-0.5">➔</span>
                      <div><strong>Auto-Upgrade System:</strong> If you are admitted to a lower priority choice (e.g., Priority #4), and a seat opens up in your Priority #2 in the next list, you are automatically shifted up. You cannot go down your priority list.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-500 font-black mt-0.5">➔</span>
                      <div><strong>Spot Admission:</strong> Conducted physically at respective campuses at the very end of the cycle for any remaining vacant (mostly Full Fee) seats.</div>
                    </li>
                  </ul>
                </div>

                <div className={`p-5 sm:p-6 rounded-2xl border print:border-black print:text-black ${isDark ? 'bg-[#1a1a24] border-slate-700' : 'bg-slate-50 border-slate-300'}`}>
                  <h4 className="font-black text-lg text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
                    <span className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded text-sm">02</span>
                    Mandatory Document Checklist
                  </h4>
                  <p className="text-sm leading-relaxed mb-4">Ensure you have the original and photocopies of the following documents before your admission deadline:</p>
                  <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>IOE Entrance Admit Card</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Citizenship Certificate / NID</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>SLC/SEE Marksheet & Character Cert.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>10+2 Transcript & Character Cert.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Recent Passport Size Photos (x4)</span>
                    </div>
                    <div className="flex items-start gap-2 sm:col-span-2 mt-2 pt-2 border-t border-slate-200 dark:border-slate-700 print:border-black">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                      <span><strong>For Quota Applicants:</strong> Official Quota Verification Document (e.g., CDO recommendation letter for remote districts, Janajati/Dalit certification, or Government School verification).</span>
                    </div>
                  </div>
                </div>

                <div className={`p-5 sm:p-6 rounded-2xl border print:border-black print:text-black ${isDark ? 'bg-[#1a1a24] border-slate-700' : 'bg-slate-50 border-slate-300'}`}>
                  <h4 className="font-black text-lg text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
                    <span className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded text-sm">03</span>
                    Seat Acceptance & Deposit Rules
                  </h4>
                  <p className="text-sm leading-relaxed mb-3">
                    If your name appears on an admission list, you <strong>must</strong> secure the seat by depositing the required initial amount (often via a designated Bank Voucher) within the strict 3 to 4-day deadline.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600 dark:text-slate-400 print:text-black">
                    <li>Failure to pay the deposit results in permanent removal from the admission system.</li>
                    <li>If you are auto-upgraded to a higher priority choice in a later list, your deposit is automatically transferred. You do not pay twice.</li>
                    <li>Cancellation rules apply. If you cancel your admission later, a specific percentage of your deposit will be deducted.</li>
                  </ul>
                </div>

                <div className={`p-5 sm:p-6 rounded-2xl border print:border-black print:text-black ${isDark ? 'bg-[#1a1a24] border-slate-700' : 'bg-slate-50 border-slate-300'}`}>
                  <h4 className="font-black text-lg text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
                    <span className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded text-sm">04</span>
                    Claim & Objection Window (Dabi Birodh)
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Immediately after every admission list is published, IOE opens a strict <strong>24 to 48-hour</strong> Claim and Objection (Dabi Birodh) window. If you find a candidate with a lower rank than yours admitted into a program/quota you applied for (and ranked higher in your priority list), you must file a formal objection via the IOE portal to correct the error.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'priority' && (
            <div className="animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-xl sm:text-2xl font-black mb-2 print:text-black">Smart Priority Form Generator</h3>
              <p className={`text-sm mb-8 print:text-black ${theme.mutedText}`}>Input your rank to auto-generate a statistically sound 12-choice priority list.</p>
              
              <form onSubmit={generatePriority} className="bg-cyan-500/5 border border-cyan-500/20 p-5 sm:p-6 rounded-2xl print:hidden flex flex-col sm:flex-row gap-4">
                <div className="w-full">
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.mutedText}`}>Your Final Rank</label>
                  <input type="number" placeholder="e.g. 1450" className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-base sm:text-lg ${theme.inputBg}`} value={priorityRank} onChange={(e) => setPriorityRank(e.target.value)} required min="1" />
                </div>
                <div className="w-full sm:w-auto flex items-end">
                  <button type="submit" className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] whitespace-nowrap active:scale-[0.98]">Generate</button>
                </div>
              </form>

              {priorityLists && (
                <div className="mt-8 space-y-8">
                  <div>
                    <h4 className="font-black text-base sm:text-lg text-emerald-500 border-b border-emerald-500/30 pb-2 mb-4">Ambitious (Reach) - Put at Top</h4>
                    <div className="grid gap-3">
                      {priorityLists.ambitious.length ? priorityLists.ambitious.map((o, i) => (
                        <div key={i} className={`p-4 rounded-xl border flex flex-col xl:flex-row xl:justify-between xl:items-center gap-2 ${isDark ? 'bg-emerald-900/10 border-emerald-900/30' : 'bg-emerald-50 border-emerald-200'}`}>
                          <div><span className="font-bold print:text-black text-sm">{CAMPUS_NAMES[o.campus]}</span><span className={`block xl:inline xl:ml-2 text-xs print:text-black ${theme.mutedText}`}>{o.prog} ({o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})</span></div>
                          <span className="font-mono text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded w-fit">Cutoff: {o.cutoff}</span>
                        </div>
                      )) : <p className={`text-sm print:text-black ${theme.mutedText}`}>No ambitious options found for this rank.</p>}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-base sm:text-lg text-amber-500 border-b border-amber-500/30 pb-2 mb-4">Realistic (Match) - Put in Middle</h4>
                    <div className="grid gap-3">
                      {priorityLists.match.length ? priorityLists.match.map((o, i) => (
                        <div key={i} className={`p-4 rounded-xl border flex flex-col xl:flex-row xl:justify-between xl:items-center gap-2 ${isDark ? 'bg-amber-900/10 border-amber-900/30' : 'bg-amber-50 border-amber-200'}`}>
                          <div><span className="font-bold print:text-black text-sm">{CAMPUS_NAMES[o.campus]}</span><span className={`block xl:inline xl:ml-2 text-xs print:text-black ${theme.mutedText}`}>{o.prog} ({o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})</span></div>
                          <span className="font-mono text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded w-fit">Cutoff: {o.cutoff}</span>
                        </div>
                      )) : <p className={`text-sm print:text-black ${theme.mutedText}`}>No match options found.</p>}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-base sm:text-lg text-blue-500 border-b border-blue-500/30 pb-2 mb-4">Guaranteed (Safety) - Put at Bottom</h4>
                    <div className="grid gap-3">
                      {priorityLists.safety.length ? priorityLists.safety.map((o, i) => (
                        <div key={i} className={`p-4 rounded-xl border flex flex-col xl:flex-row xl:justify-between xl:items-center gap-2 ${isDark ? 'bg-blue-900/10 border-blue-900/30' : 'bg-blue-50 border-blue-200'}`}>
                          <div><span className="font-bold print:text-black text-sm">{CAMPUS_NAMES[o.campus]}</span><span className={`block xl:inline xl:ml-2 text-xs print:text-black ${theme.mutedText}`}>{o.prog} ({o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})</span></div>
                          <span className="font-mono text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded w-fit">Cutoff: {o.cutoff}</span>
                        </div>
                      )) : <p className={`text-sm print:text-black ${theme.mutedText}`}>No safety options needed or available.</p>}
                    </div>
                  </div>
                </div>
              )}
              
              <InfoDisclaimer 
                title="Priority Logic" 
                text="This sequence is automatically generated according to recent cutoff trends to maximize your chances. However, this is a mathematical estimation. Always review your own faculty interests and consult seniors before finalizing your IOE priority form." 
              />
            </div>
          )}

          {activeTab === 'calculator' && (
            <div className="animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-xl sm:text-2xl font-black mb-2 print:text-black">CBT Negative Marking Calculator</h3>
              <p className={`text-sm mb-8 print:text-black ${theme.mutedText}`}>Calculate your exact IOE score considering the 10% negative marking penalty.</p>
              
              <form onSubmit={handleCalc} className="grid sm:grid-cols-2 gap-5 sm:gap-6 print:hidden">
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.mutedText}`}>Total Correct Marks</label>
                  <input type="number" className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-base sm:text-lg ${theme.inputBg}`} value={calcForm.correct} onChange={(e) => setCalcForm({...calcForm, correct: e.target.value})} required min="0" max="140" step="any" />
                </div>
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.mutedText}`}>Total Incorrect Marks</label>
                  <input type="number" className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-base sm:text-lg ${theme.inputBg}`} value={calcForm.wrong} onChange={(e) => setCalcForm({...calcForm, wrong: e.target.value})} required min="0" max="140" step="any" />
                </div>
                <div className="sm:col-span-2 mt-2">
                  <button type="submit" className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] active:scale-[0.98]">Calculate Net Score</button>
                </div>
              </form>

              {calcRes && (
                <div className={`mt-8 p-6 sm:p-8 border-2 rounded-2xl text-center backdrop-blur-md transition-all print:border-black print:text-black ${isDark ? 'bg-cyan-500/10 border-cyan-500/40' : 'bg-cyan-50 border-cyan-200'}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 print:text-black ${theme.mutedText}`}>Your Net Score</p>
                  <h3 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight text-cyan-500 print:text-black">{calcRes} <span className="text-2xl sm:text-3xl text-cyan-700/50">/ 140</span></h3>
                  <button onClick={() => { setScore(calcRes); setActiveTab('estimator'); }} className="px-6 py-3 border border-cyan-500 text-cyan-500 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-colors text-sm print:hidden">Send to Estimator →</button>
                </div>
              )}
              
              <InfoDisclaimer 
                title="Marking Scheme Rule" 
                text="Calculations strictly follow the official IOE CBT marking scheme: 1 mark for regular questions, 2 marks for long questions, with a 10% negative marking penalty applied to incorrect attempts (-0.1 and -0.2 respectively)." 
              />
            </div>
          )}

          {activeTab === 'estimator' && (
            <div className="animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-xl sm:text-2xl font-black mb-2 print:text-black">Score-to-Rank Estimator</h3>
              <p className={`text-sm mb-8 print:text-black ${theme.mutedText}`}>Before official results are published, enter your expected raw score (out of 140) to estimate your rank bracket.</p>
              
              <form onSubmit={handleEstimate} className="bg-cyan-500/5 border border-cyan-500/20 p-5 sm:p-6 rounded-2xl print:hidden flex flex-col sm:flex-row gap-4">
                <div className="w-full">
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.mutedText}`}>Your Expected Score (Max 140)</label>
                  <input type="number" placeholder="e.g. 105" className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-base sm:text-lg ${theme.inputBg}`} value={score} onChange={(e) => setScore(e.target.value)} required min="1" max="140" step="any" />
                </div>
                <div className="w-full sm:w-auto flex items-end">
                  <button type="submit" className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] whitespace-nowrap active:scale-[0.98]">Estimate</button>
                </div>
              </form>

              {estimateRes && (
                <div className={`mt-8 p-6 sm:p-8 border-2 rounded-2xl text-center backdrop-blur-md transition-all print:border-black print:text-black ${estimateRes.color === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/40' : estimateRes.color === 'amber' ? 'bg-amber-500/10 border-amber-500/40' : estimateRes.color === 'orange' ? 'bg-orange-500/10 border-orange-500/40' : 'bg-red-500/10 border-red-500/40'}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 print:text-black ${theme.mutedText}`}>Estimated Rank Range</p>
                  <h3 className={`text-3xl sm:text-6xl font-black mb-4 tracking-tight print:text-black ${estimateRes.color === 'emerald' ? 'text-emerald-500' : estimateRes.color === 'amber' ? 'text-amber-500' : estimateRes.color === 'orange' ? 'text-orange-500' : 'text-red-500'}`}>
                    {estimateRes.range}
                  </h3>
                  <p className={`text-sm sm:text-base font-bold max-w-md mx-auto print:text-black ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{estimateRes.msg}</p>
                </div>
              )}
              
              <InfoDisclaimer 
                title="Estimation Methodology" 
                text="Score-to-rank mappings are heuristic estimates based on recent exam difficulty trends and standard deviations over the last 3 years. Actual rank assignments depend entirely on the current year's applicant performance curve." 
              />
            </div>
          )}

          {activeTab === 'compare' && (
            <div className="animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-xl sm:text-2xl font-black mb-2 print:text-black">Faculty Matrix Comparator</h3>
              <p className={`text-sm mb-8 print:text-black ${theme.mutedText}`}>Compare syllabus overlap and core sectors between engineering faculties.</p>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 print:hidden">
                <select className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-base tracking-wider cursor-pointer ${theme.inputBg}`} value={compA} onChange={(e) => setCompA(e.target.value)}>
                  {Object.keys(FACULTY_DATA).map(prog => <option key={prog} value={prog}>{prog}</option>)}
                </select>
                <select className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono text-base tracking-wider cursor-pointer ${theme.inputBg}`} value={compB} onChange={(e) => setCompB(e.target.value)}>
                  {Object.keys(FACULTY_DATA).map(prog => <option key={prog} value={prog}>{prog}</option>)}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {[compA, compB].map((prog, i) => (
                  <div key={i} className={`p-5 sm:p-6 rounded-2xl border ${isDark ? 'bg-[#1a1a24] border-slate-700' : 'bg-slate-50 border-slate-300'}`}>
                    <h4 className="font-black text-base sm:text-lg mb-4 text-cyan-500 print:text-black leading-tight">{prog}</h4>
                    <div className="mb-6">
                      <p className={`text-xs uppercase font-bold tracking-wider mb-3 print:text-black ${theme.mutedText}`}>Core Focus Tags</p>
                      <div className="flex flex-wrap gap-2">
                        {FACULTY_DATA[prog].tags.map(tag => <span key={tag} className={`px-2 py-1 text-xs font-mono rounded-lg border print:border-black print:text-black ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-600'}`}>{tag}</span>)}
                      </div>
                    </div>
                    <div className="border-t pt-4 border-slate-200 dark:border-slate-700 print:border-black">
                      <p className={`text-xs uppercase font-bold tracking-wider mb-1 print:text-black ${theme.mutedText}`}>Overlap with {i === 0 ? 'Selection 2' : 'Selection 1'}</p>
                      <p className="font-black text-2xl print:text-black text-cyan-600">{FACULTY_DATA[prog].overlap[i === 0 ? compB : compA] || '< 15%'}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <InfoDisclaimer 
                title="Curriculum Overlap" 
                text="Overlap percentages and core focus tags are generalized estimates based on standard IOE syllabi and common core subjects. For exact credit hour distributions and specialized electives, please refer to the official TU IOE curriculum handbook." 
              />
            </div>
          )}

          {activeTab === 'affiliated' && (
            <div className="animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-xl sm:text-2xl font-black mb-2 print:text-black">Affiliated Private Colleges</h3>
              <p className={`text-sm mb-8 print:text-black ${theme.mutedText}`}>For ranks outside constituent cutoff zones, these are the top TU-affiliated alternatives.</p>
              
              <div className="grid lg:grid-cols-2 gap-4">
                {AFFILIATED_COLLEGES.map((col, idx) => (
                  <div key={idx} className={`p-5 rounded-xl border flex flex-col justify-between transition-all hover:scale-[1.02] print:border-black print:text-black ${isDark ? 'bg-[#1a1a24] border-slate-700' : 'bg-slate-50 border-slate-300'}`}>
                    <div>
                      <h4 className="font-black text-base sm:text-lg mb-1">{col.name}</h4>
                      <p className={`text-xs mb-4 print:text-black ${theme.mutedText}`}>{col.location}</p>
                      <p className={`text-xs uppercase font-bold tracking-wider mb-1 print:text-black ${theme.mutedText}`}>Programs</p>
                      <p className="text-sm font-semibold mb-5">{col.programs}</p>
                    </div>
                    <div className="flex justify-between items-end border-t pt-4 print:border-black border-slate-200 dark:border-slate-700">
                      <div>
                        <p className={`text-xs uppercase font-bold tracking-wider mb-1 print:text-black ${theme.mutedText}`}>Total Fee</p>
                        <p className="font-mono text-sm font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2 py-1 rounded w-fit print:bg-transparent">{col.fee}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-xs uppercase font-bold tracking-wider mb-1 print:text-black ${theme.mutedText}`}>Safe Rank</p>
                        <p className="font-mono text-sm font-bold text-orange-500 print:text-black bg-orange-500/10 px-2 py-1 rounded w-fit ml-auto print:bg-transparent">{col.cutoff}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <InfoDisclaimer 
                title="Affiliated College Information" 
                text="Fee structures and safe ranks for private institutions are approximations based on recent admission cycles. Costs and seat availability may vary significantly depending on the college's internal policies for the current academic year." 
              />
            </div>
          )}

          {activeTab === 'financials' && (
            <div className="animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-xl sm:text-2xl font-black mb-2 print:text-black">4-Year Engineering Expenses</h3>
              <p className={`text-sm mb-8 print:text-black ${theme.mutedText}`}>A comparative breakdown of estimated tuition and living costs across different IOE admission types.</p>
              
              <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                {Object.entries(FINANCIALS).map(([type, data]) => (
                  <div key={type} className={`p-5 sm:p-6 rounded-2xl border flex flex-col justify-between print:border-black print:text-black ${isDark ? 'bg-[#1a1a24] border-slate-700' : 'bg-slate-50 border-slate-300'}`}>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black mb-5 text-cyan-500 print:text-black">{type}</h4>
                      <div className="space-y-5 mb-6">
                        <div>
                          <p className={`text-xs uppercase font-bold tracking-wider mb-1 print:text-black ${theme.mutedText}`}>Total Tuition</p>
                          <p className="font-mono font-bold text-sm">{data.tuition}</p>
                        </div>
                        <div>
                          <p className={`text-xs uppercase font-bold tracking-wider mb-1 print:text-black ${theme.mutedText}`}>Est. Living (4 Yrs)</p>
                          <p className="font-mono font-bold text-sm">{data.living}</p>
                        </div>
                      </div>
                    </div>
                    <div className={`pt-4 border-t print:border-black ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <p className={`text-xs uppercase font-bold tracking-wider mb-2 print:text-black ${theme.mutedText}`}>Total Estimate</p>
                      <p className="font-mono text-lg sm:text-xl font-black">{data.total}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <InfoDisclaimer 
                title="Financial Estimates" 
                text="Living expenses are estimated for a standard 4-year duration in the respective cities (Kathmandu, Pokhara, Dharan, Chitwan). Tuition fees reflect recent official IOE fee structures and are subject to university revisions." 
              />
            </div>
          )}

        </main>
      </div>
      
      {/* 
        CRITICAL SEO UPDATE: 
        This footer links directly to your main portfolio. Search engines use this 
        to pass domain authority from your predictor app back to your primary site.
      */}
      <div className={`mt-8 mb-4 relative z-10 text-xs font-bold uppercase tracking-widest print:hidden ${theme.mutedText} opacity-80 hover:opacity-100 transition-opacity`}>
        Developed by{' '}
        <a 
          href="https://www.dipeshsapkota7.com.np/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-500 hover:text-cyan-400 underline decoration-cyan-500/30 underline-offset-4"
        >
          Dipesh Sapkota
        </a>
      </div>

    </div>
  );
}