export interface SyllabusTopic {
  id: string;
  name: string;
  weightageLabel?: string;
  subtopics: string[];
  highYieldPoints: string[];
  formulaFocus: string[];
  typicalQuestions: string;
}

export interface SyllabusSubject {
  id: 'mathematics' | 'physics' | 'chemistry' | 'english';
  name: string;
  nepaliName: string;
  badge: string;
  theme: {
    accentColor: string;
    borderLight: string;
    bgLight: string;
    badgeBg: string;
    badgeText: string;
    ringColor: string;
    gradientFrom: string;
    gradientTo: string;
  };
  totalMarks: number;
  totalQuestions: number;
  percentage: number;
  sectionA: {
    questions: number;
    marksPerQuestion: number;
    totalMarks: number;
  };
  sectionB: {
    questions: number;
    marksPerQuestion: number;
    totalMarks: number;
  };
  overview: string;
  preparationStrategy: string[];
  chapters: SyllabusTopic[];
}

export const IOE_SYLLABUS_OVERVIEW = {
  examName: 'IOE Entrance Examination (Computer-Based Test)',
  governingBody: 'Tribhuvan University, Institute of Engineering (IOE)',
  totalMarks: 140,
  totalQuestions: 100,
  durationMinutes: 120,
  passPercentage: 40,
  passMarks: 56,
  negativeMarking: '10% deduction (-0.10 for 1-mark question, -0.20 for 2-mark question)',
  unattemptedPenalty: '0 (No penalty for leaving questions blank)',
  sections: [
    {
      section: 'Section A',
      questions: 60,
      marksEach: 1,
      totalMarks: 60,
      penaltyEach: 0.10,
      description: 'Single-concept objective conceptual & direct calculation multiple-choice questions.'
    },
    {
      section: 'Section B',
      questions: 40,
      marksEach: 2,
      totalMarks: 80,
      penaltyEach: 0.20,
      description: 'Multi-step analytical, mathematical derivations, numericals, and critical reasoning problems.'
    }
  ]
};

export const SYLLABUS_DATA: SyllabusSubject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    nepaliName: 'गणित',
    badge: '50 Marks • 35.7%',
    theme: {
      accentColor: 'text-blue-600 dark:text-blue-400',
      borderLight: 'border-blue-200 dark:border-blue-800/60',
      bgLight: 'bg-blue-50/50 dark:bg-blue-950/20',
      badgeBg: 'bg-blue-100 dark:bg-blue-900/60',
      badgeText: 'text-blue-800 dark:text-blue-200',
      ringColor: 'ring-blue-500/20',
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-indigo-600'
    },
    totalMarks: 50,
    totalQuestions: 36,
    percentage: 35.7,
    sectionA: { questions: 22, marksPerQuestion: 1, totalMarks: 22 },
    sectionB: { questions: 14, marksPerQuestion: 2, totalMarks: 28 },
    overview: 'Mathematics is the highest-weightage subject in the IOE Entrance Examination (50 out of 140 marks). Calculus and Coordinate Geometry together constitute nearly half of the math section.',
    preparationStrategy: [
      'Master standard derivatives and King\'s property of definite integrals to solve Section B problems quickly.',
      'Remember shortcuts for quadratic roots, matrix inverses, and pair of straight lines to save valuable minutes in Section A.',
      'Vector algebra and 3D geometry offer high return on investment with straightforward formula applications.'
    ],
    chapters: [
      {
        id: 'math-sets-functions',
        name: 'Sets, Relations & Functions',
        weightageLabel: '3–4 Marks',
        subtopics: [
          'Types of sets, Venn diagrams, set operations (union, intersection, difference, symmetric difference)',
          'Cartesian product, binary relations, equivalence relations and equivalence classes',
          'Domain, co-domain, and range of real functions',
          'Injective (one-one), surjective (onto), and bijective functions',
          'Composition of functions ((g ∘ f)(x)) and inverse functions (f⁻¹(x))'
        ],
        highYieldPoints: [
          'Finding domain of fractional and square root expressions (e.g. √(9 - x²))',
          'Conditions for invertibility: a function must be both one-to-one and onto',
          'Number of relations between sets of size m and n is 2^(mn)'
        ],
        formulaFocus: [
          'n(A ∪ B) = n(A) + n(B) - n(A ∩ B)',
          '(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹'
        ],
        typicalQuestions: 'Find domain and range of rational square root functions; determine whether a given relation is reflexive, symmetric, or transitive.'
      },
      {
        id: 'math-algebra-complex',
        name: 'Algebra: Complex Numbers',
        weightageLabel: '4–5 Marks',
        subtopics: [
          'Definition of imaginary unit i = √(-1) and powers of i',
          'Real and imaginary parts, equality of complex numbers',
          'Conjugate, modulus (|z|), and principal argument (Arg z) in [-π, π]',
          'Polar form (r(cos θ + i sin θ)) and Euler form (r e^(iθ))',
          'De Moivre\'s Theorem and its applications',
          'Cube roots of unity (1, ω, ω²) and their algebraic properties',
          'Square roots of complex numbers'
        ],
        highYieldPoints: [
          'Properties of cube roots of unity: 1 + ω + ω² = 0 and ω³ = 1',
          'Triangle inequality: ||z₁| - |z₂|| ≤ |z₁ + z₂| ≤ |z₁| + |z₂|',
          'Product of conjugates: z · z̄ = |z|²'
        ],
        formulaFocus: [
          '(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)',
          '|z₁ · z₂| = |z₁| · |z₂| and Arg(z₁ · z₂) = Arg(z₁) + Arg(z₂)'
        ],
        typicalQuestions: 'Simplify expressions with powers of ω; find modulus and principal argument; compute square root of a - ib.'
      },
      {
        id: 'math-algebra-quadratic',
        name: 'Algebra: Quadratic Equations & Expressions',
        weightageLabel: '3–4 Marks',
        subtopics: [
          'Roots of quadratic equation ax² + bx + c = 0 using quadratic formula',
          'Nature of roots via discriminant Δ = b² - 4ac (real, distinct, equal, imaginary)',
          'Relations between roots and coefficients (α + β = -b/a, αβ = c/a)',
          'Symmetric functions of roots (α² + β², α³ + β³, |α - β|)',
          'Formation of quadratic equations from given roots or modified roots',
          'Condition for common roots (one common root vs both roots common)',
          'Sign of quadratic expression and maximum/minimum vertex value (-D/4a)'
        ],
        highYieldPoints: [
          'Difference of roots: |α - β| = √(Δ) / |a|',
          'Both roots common condition: a₁/a₂ = b₁/b₂ = c₁/c₂',
          'If coefficients are rational and one root is p + √q, other root is p - √q'
        ],
        formulaFocus: [
          'x = (-b ± √(b² - 4ac)) / (2a)',
          'α² + β² = (α + β)² - 2αβ'
        ],
        typicalQuestions: 'Find k such that one root is square of the other; find condition for common root between two equations.'
      },
      {
        id: 'math-algebra-sequences',
        name: 'Algebra: Sequences & Series',
        weightageLabel: '4–5 Marks',
        subtopics: [
          'Arithmetic Progression (AP): general term, sum of first n terms',
          'Geometric Progression (GP): general term, sum of n terms, infinite sum for |r| < 1',
          'Harmonic Progression (HP): relation with AP',
          'Means: Arithmetic (AM), Geometric (GM), Harmonic (HM) and relation AM ≥ GM ≥ HM',
          'Sum of first n natural numbers, sum of squares, and sum of cubes',
          'Arithmetic-Geometric Progression (AGP) and telescoping series'
        ],
        highYieldPoints: [
          'Fundamental relation: AM · HM = GM²',
          'Infinite GP convergence strictly requires |r| < 1',
          'Sum of cubes equals square of sum of first n natural numbers'
        ],
        formulaFocus: [
          'S_∞ = a / (1 - r) (for |r| < 1)',
          'Σ n = n(n+1)/2,  Σ n² = n(n+1)(2n+1)/6,  Σ n³ = [n(n+1)/2]²'
        ],
        typicalQuestions: 'Calculate sum of infinite GP; find relation between AM, GM, and HM of two positive numbers; insert n arithmetic/geometric means.'
      },
      {
        id: 'math-algebra-perm-comb',
        name: 'Algebra: Permutations, Combinations & Binomial Theorem',
        weightageLabel: '5–6 Marks',
        subtopics: [
          'Fundamental principles of counting (addition & multiplication)',
          'Permutations: ⁿP_r, circular permutations ((n-1)! and (n-1)!/2 for necklaces)',
          'Combinations: ⁿC_r, selection rules, restricted combinations',
          'Binomial Theorem for positive integer index, general term T_(r+1)',
          'Middle term and term independent of x',
          'Properties of binomial coefficients: C₀ + C₁ + ... + Cₙ = 2ⁿ',
          'Exponential (e^x) and logarithmic (ln(1+x)) series'
        ],
        highYieldPoints: [
          'Pascal\'s identity: ⁿC_r + ⁿC_(r-1) = ⁿ⁺¹C_r',
          'Finding term independent of x by setting exponent of x to 0',
          'Sum of even coefficients equals sum of odd coefficients = 2^(n-1)'
        ],
        formulaFocus: [
          'T_(r+1) = ⁿC_r · a^(n-r) · b^r',
          'e = 1 + 1/1! + 1/2! + 1/3! + ...'
        ],
        typicalQuestions: 'Find the term independent of x in (x² - 1/x)⁹; number of words formed from letters with repetitions.'
      },
      {
        id: 'math-matrices',
        name: 'Matrices & Determinants',
        weightageLabel: '4–5 Marks',
        subtopics: [
          'Types of matrices: symmetric, skew-symmetric, orthogonal, singular',
          'Matrix operations: addition, scalar multiplication, matrix multiplication',
          'Determinants of order 2 and 3, properties of determinants',
          'Minors, cofactors, and adjoint of a square matrix',
          'Inverse of a matrix (A⁻¹ = adj(A)/|A|)',
          'Cramer\'s rule and solution of linear system of equations in 2 and 3 variables'
        ],
        highYieldPoints: [
          'Determinant of scalar multiple: |k · A| = kⁿ · |A| for n×n matrix',
          'Determinant of adjoint: |adj(A)| = |A|^(n-1)',
          'Inverse exists if and only if |A| ≠ 0 (non-singular matrix)'
        ],
        formulaFocus: [
          'A · adj(A) = |A| · I',
          'Cramer\'s Rule: x = Δ_x / Δ,  y = Δ_y / Δ,  z = Δ_z / Δ'
        ],
        typicalQuestions: 'Find determinant using row/column transformations; find value of k for which a 3x3 matrix is singular; find inverse of 2x2 matrix.'
      },
      {
        id: 'math-trigonometry',
        name: 'Trigonometry & Properties of Triangles',
        weightageLabel: '5–6 Marks',
        subtopics: [
          'Compound angles, multiple and sub-multiple angle formulas',
          'Transformation of products into sums/differences and vice versa',
          'Conditional trigonometric identities',
          'General solutions of trigonometric equations (sin θ = 0, cos θ = cos α, tan θ = tan α)',
          'Inverse trigonometric functions: principal values, domain, and range',
          'Properties of triangles: Sine Rule, Cosine Rule, Projection Rule',
          'Area of triangle, in-radius (r), circum-radius (R), and ex-radii (r₁, r₂, r₃)'
        ],
        highYieldPoints: [
          'Principal value branch: sin⁻¹(x) ∈ [-π/2, π/2], cos⁻¹(x) ∈ [0, π]',
          'Circum-radius formula: R = abc / (4Δ) = a / (2 sin A)',
          'In-radius formula: r = Δ / s'
        ],
        formulaFocus: [
          'cos A = (b² + c² - a²) / (2bc)',
          'tan⁻¹(x) + tan⁻¹(y) = tan⁻¹((x + y)/(1 - xy)) (for xy < 1)'
        ],
        typicalQuestions: 'Solve general solution for 2 cos²θ + 3 sin θ = 0; evaluate tan⁻¹(1/2) + tan⁻¹(1/3); find circum-radius given three side lengths.'
      },
      {
        id: 'math-coord-2d',
        name: 'Coordinate Geometry (2D): Lines, Circles & Conics',
        weightageLabel: '6–7 Marks',
        subtopics: [
          'Straight lines: slopes, angle between two lines, intercept and normal forms',
          'Perpendicular distance from point (x₁, y₁) to line Ax + By + C = 0',
          'Distance between parallel lines',
          'Pair of straight lines passing through origin: ax² + 2hxy + by² = 0',
          'Condition for perpendicular lines (a + b = 0) and coincident lines (h² = ab)',
          'Circles: general equation x² + y² + 2gx + 2fy + c = 0, center (-g, -f), radius √(g²+f²-c)',
          'Tangents and normals to a circle, length of tangent from external point',
          'Conic sections: standard equations of Parabola (y² = 4ax), Ellipse (x²/a² + y²/b² = 1), and Hyperbola (x²/a² - y²/b² = 1)',
          'Eccentricity, focus, directrix, and length of latus rectum'
        ],
        highYieldPoints: [
          'Angle between pair of lines: tan θ = 2√(h² - ab) / (a + b)',
          'Eccentricity values: e = 1 (parabola), e < 1 (ellipse), e > 1 (hyperbola)',
          'Condition of tangency for line y = mx + c to circle x² + y² = a² is c² = a²(1 + m²)'
        ],
        formulaFocus: [
          'd = |Ax₁ + By₁ + C| / √(A² + B²)',
          'e = √(1 - b²/a²) (Ellipse),  e = √(1 + b²/a²) (Hyperbola),  Latus Rectum = 2b²/a'
        ],
        typicalQuestions: 'Find angle between pair of lines; find equation of circle passing through three points; find eccentricity and focus of ellipse.'
      },
      {
        id: 'math-coord-3d-vectors',
        name: 'Vectors & 3D Coordinate Geometry',
        weightageLabel: '5–6 Marks',
        subtopics: [
          '3D Coordinate System: distance and section formulas in space',
          'Direction cosines (l, m, n) and direction ratios (a, b, c), relation l² + m² + n² = 1',
          'Angle between two lines in space',
          'Equation of a plane: general form, intercept form, and normal form',
          'Perpendicular distance of a point from a plane',
          'Vectors: addition, scalar multiplication, unit vector',
          'Dot (Scalar) product and projection of one vector on another',
          'Cross (Vector) product, geometric interpretation (area of triangle & parallelogram)',
          'Scalar Triple Product ([a b c]) and condition of coplanarity'
        ],
        highYieldPoints: [
          'Two vectors are orthogonal if a · b = 0; parallel if a × b = 0',
          'Three vectors are coplanar if [a b c] = 0 (determinant is zero)',
          'Area of triangle formed by vectors a and b is (1/2)|a × b|'
        ],
        formulaFocus: [
          'a · b = |a||b| cos θ,  |a × b| = |a||b| sin θ',
          'd = |Ax₁ + By₁ + Cz₁ + D| / √(A² + B² + C²)'
        ],
        typicalQuestions: 'Check coplanarity of three vectors; find unit vector perpendicular to both a and b; calculate distance from origin to plane.'
      },
      {
        id: 'math-calculus-limits-derivatives',
        name: 'Calculus: Limits, Continuity & Derivatives',
        weightageLabel: '6–7 Marks',
        subtopics: [
          'Limits: algebraic, trigonometric, exponential, and logarithmic limits',
          'Indeterminate forms (0/0, ∞/∞, 1^∞) and L\'Hôpital\'s Rule',
          'Continuity of a function at a point and on an interval',
          'Derivatives from first principle, product rule, quotient rule, chain rule',
          'Derivatives of inverse trigonometric, implicit, and parametric functions',
          'Higher-order derivatives (d²y/dx²)'
        ],
        highYieldPoints: [
          'Limit involving 1^∞: lim [f(x)]^(g(x)) = e^(lim (f(x)-1)·g(x))',
          'L\'Hôpital\'s rule applies only when direct substitution yields 0/0 or ∞/∞',
          'Differentiability strictly implies continuity (converse is false)'
        ],
        formulaFocus: [
          'lim (x→0) (sin x)/x = 1,  lim (x→0) (e^x - 1)/x = 1',
          'd/dx (tan⁻¹ x) = 1 / (1 + x²),  d/dx (sin⁻¹ x) = 1 / √(1 - x²)'
        ],
        typicalQuestions: 'Evaluate limit using L\'Hôpital\'s Rule; find dy/dx of parametric equations x = a cos³θ, y = a sin³θ; find value of k for continuity.'
      },
      {
        id: 'math-calculus-apps-integrals',
        name: 'Calculus: Applications of Derivatives & Integrals',
        weightageLabel: '7–8 Marks',
        subtopics: [
          'Tangents and normals to curves: slopes, equations',
          'Rate of change, velocity and acceleration',
          'Monotonicity (increasing/decreasing functions), critical points',
          'Maxima and minima (first and second derivative tests)',
          'Indefinite integration: substitution, by parts (∫ u v dx), partial fractions',
          'Definite integrals and fundamental theorem of calculus',
          'Properties of definite integrals (King\'s rule, odd/even functions)',
          'Area bounded by curves and differential equations (first order separable & linear)'
        ],
        highYieldPoints: [
          'King\'s Property: ∫[a to b] f(x) dx = ∫[a to b] f(a + b - x) dx',
          'Integrating factor for linear differential equation dy/dx + Py = Q is IF = e^(∫ P dx)',
          'Local maximum occurs when f\'(x) = 0 and f\'\'(x) < 0'
        ],
        formulaFocus: [
          '∫ u v dx = u ∫ v dx - ∫ [u\' (∫ v dx)] dx',
          'dy/dx + Py = Q ⟹ y · e^(∫ P dx) = ∫ Q · e^(∫ P dx) dx + C'
        ],
        typicalQuestions: 'Find maximum volume of cylinder/box; compute ∫[0 to π/2] (sin x)/(sin x + cos x) dx; solve dy/dx + y/x = x².'
      }
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    nepaliName: 'भौतिकशास्त्र',
    badge: '45 Marks • 32.1%',
    theme: {
      accentColor: 'text-violet-600 dark:text-violet-400',
      borderLight: 'border-violet-200 dark:border-violet-800/60',
      bgLight: 'bg-violet-50/50 dark:bg-violet-950/20',
      badgeBg: 'bg-violet-100 dark:bg-violet-900/60',
      badgeText: 'text-violet-800 dark:text-violet-200',
      ringColor: 'ring-violet-500/20',
      gradientFrom: 'from-violet-600',
      gradientTo: 'to-purple-600'
    },
    totalMarks: 45,
    totalQuestions: 33,
    percentage: 32.1,
    sectionA: { questions: 21, marksPerQuestion: 1, totalMarks: 21 },
    sectionB: { questions: 12, marksPerQuestion: 2, totalMarks: 24 },
    overview: 'Physics carries 45 marks with balanced coverage across Mechanics (12-14 marks), Electricity & Magnetism (10-12 marks), Wave & Optics (7-8 marks), Heat (6-7 marks), and Modern Physics (6-7 marks).',
    preparationStrategy: [
      'Focus heavily on dimensional formulas and unit consistency to quickly eliminate wrong options in Section A.',
      'Rotational dynamics, SHM, and AC circuits frequently appear as 2-mark calculation problems in Section B.',
      'Modern Physics (photoelectric effect, Bohr model, half-life) offers quick, formula-based scoring.'
    ],
    chapters: [
      {
        id: 'phy-units-vectors-kinematics',
        name: 'Units, Dimensions, Vectors & Kinematics',
        weightageLabel: '3–4 Marks',
        subtopics: [
          'Fundamental and derived units, SI base units and dimensions',
          'Dimensional formulas of physical constants (G, h, ε₀, μ₀, η)',
          'Limitations of dimensional analysis, significant figures and error propagation',
          'Vectors: resolution, triangle and parallelogram laws, scalar and vector products',
          'Motion in a straight line: uniform and non-uniform acceleration',
          'Relative velocity in 1D and 2D (river-boat and rain-man problems)',
          'Projectile motion: trajectory equation, time of flight, horizontal range, maximum height'
        ],
        highYieldPoints: [
          'Maximum horizontal range occurs at launch angle θ = 45°',
          'Range is identical for complementary angles θ and (90° - θ)',
          'Velocity at highest point of projectile is u cos θ (only horizontal)'
        ],
        formulaFocus: [
          'T = (2u sin θ)/g,  H = (u² sin²θ)/(2g),  R = (u² sin 2θ)/g',
          'y = x tan θ - (gx²) / (2u² cos²θ)'
        ],
        typicalQuestions: 'Find dimensions of permittivity ε₀ or Planck\'s constant h; shortest crossing time of a river with flowing water; angle of projection for equal range and height.'
      },
      {
        id: 'phy-laws-work-power',
        name: 'Laws of Motion, Friction & Work-Energy-Power',
        weightageLabel: '4–5 Marks',
        subtopics: [
          'Newton\'s laws of motion, inertia, linear momentum and impulse',
          'Conservation of linear momentum (recoil of gun, rocket propulsion)',
          'Friction: static, limiting, kinetic; coefficient of friction (μ), angle of friction and repose',
          'Motion on rough inclined plane (upward and downward acceleration)',
          'Circular motion: centripetal acceleration, banking of roads without and with friction',
          'Work done by constant and variable force (∫ F dx)',
          'Work-Energy Theorem and conservation of mechanical energy',
          'Elastic and inelastic collisions in 1D and 2D, coefficient of restitution (e)'
        ],
        highYieldPoints: [
          'Optimum banking speed without friction: v = √(r g tan θ)',
          'Coefficient of restitution: e = 1 for perfectly elastic collision, e = 0 for perfectly inelastic',
          'Work done by centripetal force is always zero (perpendicular to displacement)'
        ],
        formulaFocus: [
          'W = ΔKE = (1/2)m(v² - u²)',
          'P = F · v,  f_s ≤ μ_s N,  v_bank = √(r g tan θ)'
        ],
        typicalQuestions: 'Calculate banking angle for highway curve; speed of bullet and recoil of gun; loss of kinetic energy in inelastic collision.'
      },
      {
        id: 'phy-gravitation-rotation-shm',
        name: 'Gravitation, Rotational Motion & SHM',
        weightageLabel: '5–6 Marks',
        subtopics: [
          'Newton\'s law of gravitation, gravitational field and potential',
          'Variation of g with altitude (g\' = g(1 - 2h/R)), depth (g\' = g(1 - d/R)), and latitude',
          'Escape velocity from Earth\'s surface (v_e = √(2gR) ≈ 11.2 km/s)',
          'Orbital velocity of satellite (v_o = √(gR)) and Kepler\'s third law (T² ∝ r³)',
          'Moment of inertia (MI) of rod, ring, disc, cylinder, sphere; parallel and perpendicular axis theorems',
          'Torque (τ = Iα), angular momentum (L = Iω) and conservation of angular momentum',
          'Rotational kinetic energy ((1/2)Iω²) and rolling without slipping',
          'Simple Harmonic Motion (SHM): displacement, velocity, acceleration, phase, time period of simple pendulum and loaded spring'
        ],
        highYieldPoints: [
          'Escape velocity is √2 times the orbital velocity: v_e = √2 · v_o',
          'Parallel Axis Theorem: I = I_cm + M d²',
          'Total energy in SHM is constant: E = (1/2) m ω² A²'
        ],
        formulaFocus: [
          'T = 2π √(L/g) (Pendulum),  T = 2π √(m/k) (Spring)',
          'v = ω √(A² - x²),  a = -ω² x,  L = Iω = const'
        ],
        typicalQuestions: 'Find time period of simple pendulum inside an accelerating elevator; ratio of rotational to total KE of rolling sphere; height at which g reduces to g/4.'
      },
      {
        id: 'phy-fluid-mechanics',
        name: 'Hydrostatics, Viscosity & Surface Tension',
        weightageLabel: '3–4 Marks',
        subtopics: [
          'Fluid pressure, Pascal\'s law, Archimedes\' principle and principle of floatation',
          'Surface tension and surface energy, relation between them',
          'Excess pressure inside liquid drop (2T/R) and soap bubble (4T/R)',
          'Angle of contact, capillary rise (Jurin\'s law: h = 2T cos θ / (r ρ g))',
          'Viscosity, Newton\'s law of viscous force, coefficient of viscosity (η)',
          'Stokes\' law (F = 6πηrv) and terminal velocity of falling sphere',
          'Streamline flow, Equation of Continuity (A₁v₁ = A₂v₂), Bernoulli\'s Principle and applications (Torricelli\'s theorem)'
        ],
        highYieldPoints: [
          'Excess pressure in soap bubble is twice that in a liquid drop because bubble has two surfaces',
          'Terminal velocity is directly proportional to square of sphere radius (v_t ∝ r²)',
          'Torricelli\'s efflux velocity from orifice: v = √(2gh)'
        ],
        formulaFocus: [
          'P + (1/2)ρv² + ρgh = const (Bernoulli)',
          'v_t = 2r²(ρ - σ)g / (9η),  h = 2T cos θ / (r ρ g)'
        ],
        typicalQuestions: 'Work done in blowing a soap bubble from radius r to 2r; terminal velocity of raindrops; water level in capillary tube.'
      },
      {
        id: 'phy-heat-thermo',
        name: 'Heat, Kinetic Theory & Thermodynamics',
        weightageLabel: '6–7 Marks',
        subtopics: [
          'Thermal expansion of solids and liquids: relations between α, β, γ (α : β : γ = 1 : 2 : 3)',
          'Calorimetry, specific heat capacity, water equivalent, and latent heat of phase change',
          'Kinetic theory of gases: pressure of ideal gas, RMS speed (v_rms = √(3RT/M))',
          'Degrees of freedom, equipartition of energy, molar heat capacities C_p and C_v, Mayer\'s relation (C_p - C_v = R)',
          'Thermal conduction, thermal conductivity (k), Newton\'s law of cooling, Stefan-Boltzmann law (E = σT⁴), Wien\'s displacement law (λ_max T = b)',
          'First Law of Thermodynamics (ΔQ = ΔU + ΔW)',
          'Thermodynamic processes: isothermal (PV = const), adiabatic (PV^γ = const), isobaric, isochoric',
          'Work done in isothermal and adiabatic processes',
          'Second Law of Thermodynamics, Carnot heat engine efficiency (η = 1 - T_C/T_H), refrigerator COP'
        ],
        highYieldPoints: [
          'Carnot efficiency depends strictly on absolute temperatures of source and sink: η = 1 - T₂/T₁',
          'In adiabatic expansion, temperature decreases; in adiabatic compression, temperature rises',
          'Internal energy of ideal gas depends solely on temperature: ΔU = n C_v ΔT'
        ],
        formulaFocus: [
          'v_rms = √(3RT/M) = √(3P/ρ)',
          'W_iso = nRT ln(V₂/V₁),  W_ad = (P₁V₁ - P₂V₂) / (γ - 1)',
          'η_Carnot = 1 - T_C / T_H'
        ],
        typicalQuestions: 'Calculate Carnot engine efficiency given sink and source temperatures; ratio of C_p to C_v for monoatomic/diatomic gas; final temperature in sudden adiabatic expansion.'
      },
      {
        id: 'phy-optics-geometric',
        name: 'Geometrical Optics: Reflection, Refraction & Optical Instruments',
        weightageLabel: '4–5 Marks',
        subtopics: [
          'Reflection at spherical mirrors, mirror formula (1/f = 1/v + 1/u)',
          'Refraction through plane surfaces, refractive index, apparent depth (real depth / μ)',
          'Critical angle (sin C = 1/μ) and Total Internal Reflection (TIR), optical fiber transmission',
          'Refraction through prism: angle of minimum deviation (δ_m), prism formula',
          'Thin lenses: lens maker\'s equation (1/f = (μ - 1)(1/R₁ - 1/R₂)), power of lens (P = 1/f)',
          'Combination of thin lenses in contact (P = P₁ + P₂) and separated by distance d',
          'Optical instruments: magnifying power and tube length of Simple Microscope, Compound Microscope, and Astronomical Telescope'
        ],
        highYieldPoints: [
          'Prism formula for minimum deviation: μ = sin((A + δ_m)/2) / sin(A/2)',
          'When lens is immersed in liquid of equal refractive index, it becomes invisible and f → ∞',
          'Astronomical telescope magnifying power in normal adjustment: M = f_o / f_e, Length L = f_o + f_e'
        ],
        formulaFocus: [
          '1/f = (μ - 1)(1/R₁ - 1/R₂)',
          'M_tele = f_o / f_e,  M_micro = (v_o/u_o)(1 + D/f_e)'
        ],
        typicalQuestions: 'Find focal length of lens immersed in water; minimum deviation angle in equilateral prism; magnifying power of compound microscope.'
      },
      {
        id: 'phy-waves-physical-optics',
        name: 'Wave Motion, Sound & Physical Optics',
        weightageLabel: '4–5 Marks',
        subtopics: [
          'Progressive wave equation (y = A sin(ωt - kx)), wave velocity (v = fλ)',
          'Velocity of sound in gases: Newton\'s formula and Laplace\'s correction (v = √(γP/ρ))',
          'Factors affecting speed of sound (temperature, humidity, density)',
          'Stationary waves in stretched strings and organ pipes (open vs closed pipe harmonics)',
          'Beats phenomenon (beat frequency = |f₁ - f₂|)',
          'Doppler Effect in sound (apparent frequency when source and observer are in relative motion)',
          'Huygens\' principle, wave fronts',
          'Interference of light, Young\'s Double Slit Experiment (YDSE): fringe width (β = λD/d)',
          'Diffraction of light: single slit Fraunhofer diffraction, angular width of central maximum',
          'Polarization of light: Brewster\'s law (μ = tan i_p), Malus\'s law (I = I₀ cos²θ)'
        ],
        highYieldPoints: [
          'Closed organ pipe produces only odd harmonics (f, 3f, 5f); open pipe produces all harmonics',
          'In YDSE, fringe width β = λD/d is inversely proportional to slit separation d',
          'At Brewster\'s angle, reflected and refracted rays are mutually perpendicular'
        ],
        formulaFocus: [
          'f\' = f [(v ± v_o) / (v ∓ v_s)] (Doppler)',
          'β = (λ · D) / d (YDSE),  μ = tan i_p (Brewster)'
        ],
        typicalQuestions: 'Find apparent frequency of whistle moving towards stationary listener; fringe shift when thin mica sheet is introduced in one slit; end correction of organ pipe.'
      },
      {
        id: 'phy-electrostatics-capacitors',
        name: 'Electrostatics & Capacitors',
        weightageLabel: '5–6 Marks',
        subtopics: [
          'Coulomb\'s Law, permittivity of free space and medium (F = (1/4πε) · q₁q₂/r²)',
          'Electric field intensity and electric potential due to point charge and electric dipole',
          'Relation between field and potential (E = -dV/dr), equipotential surfaces',
          'Electric flux and Gauss\'s Law, applications (infinite line charge, thin plane sheet, charged spherical shell)',
          'Capacitance of parallel plate capacitor (C = ε₀A/d), effect of dielectric slab',
          'Series (1/C_s = 1/C₁ + 1/C₂) and parallel (C_p = C₁ + C₂) combinations of capacitors',
          'Energy stored in a charged capacitor (U = (1/2)CV² = Q²/(2C)) and energy density'
        ],
        highYieldPoints: [
          'Electric field inside a uniformly charged conducting spherical shell is strictly zero',
          'When dielectric slab of constant K is inserted with battery connected, V is constant, C becomes KC',
          'Energy density in electric field: u = (1/2) ε₀ E²'
        ],
        formulaFocus: [
          'C = (K ε₀ A) / d',
          'U = (1/2) C V² = (1/2) Q V = Q² / (2C)'
        ],
        typicalQuestions: 'Equivalent capacitance of bridge/infinite ladder network; work done in moving charge along equipotential surface (zero); energy loss in sharing charge between capacitors.'
      },
      {
        id: 'phy-current-electricity-magnetism',
        name: 'Current Electricity, Magnetism & Electromagnetic Induction',
        weightageLabel: '6–7 Marks',
        subtopics: [
          'Electric current, drift velocity (I = n e A v_d), Ohm\'s law, resistance and resistivity',
          'Temperature dependence of resistance (R_t = R₀(1 + αt)), carbon resistors',
          'EMF, terminal voltage, and internal resistance of a cell (V = E - Ir)',
          'Kirchhoff\'s Current and Voltage Laws, Wheatstone bridge principle',
          'Potentiometer: comparison of EMFs (E₁/E₂ = l₁/l₂) and determination of internal resistance',
          'Joule\'s heating effect and electric power consumption (P = V²/R = I²R)',
          'Biot-Savart Law and Ampere\'s circuital law: magnetic field around straight wire, circular coil, and solenoid',
          'Force on moving charge (Lorentz force F = q(v × B)) and on current-carrying conductor (F = I(L × B))',
          'Moving coil galvanometer: sensitivity, conversion to ammeter (shunt) and voltmeter (multiplier)',
          'Earth\'s magnetic field elements (declination, angle of dip, horizontal component B_H = B cos δ)',
          'Faraday\'s laws of electromagnetic induction, Lenz\'s law, self-inductance and mutual inductance'
        ],
        highYieldPoints: [
          'To convert galvanometer into ammeter, connect small shunt resistance in parallel: S = (I_g · G) / (I - I_g)',
          'To convert into voltmeter, connect large multiplier resistance in series: R = (V / I_g) - G',
          'Lenz\'s law is a direct consequence of the principle of conservation of energy'
        ],
        formulaFocus: [
          'B = (μ₀ I) / (2π r) (Wire),  B = (μ₀ N I) / (2R) (Coil center)',
          'e = -L (dI/dt),  e = -dΦ/dt'
        ],
        typicalQuestions: 'Calculate shunt required to extend ammeter range; force between two parallel long currents; null deflection point in potentiometer wire.'
      },
      {
        id: 'phy-ac-circuits-modern',
        name: 'Alternating Currents & Modern Physics',
        weightageLabel: '6–7 Marks',
        subtopics: [
          'Alternating current: peak and RMS values (I_rms = I₀/√2, V_rms = V₀/√2)',
          'AC through pure resistor, inductor, and capacitor (phase relations)',
          'Series RLC Circuit: impedance Z = √(R² + (X_L - X_C)²), resonance condition (ω = 1/√(LC))',
          'Power in AC circuits, power factor (cos φ = R/Z)',
          'Transformers: turns ratio, voltage and current relations (V_s/V_p = N_s/N_p = I_p/I_s)',
          'Photoelectric effect: Einstein\'s equation (hν = φ + KE_max), threshold frequency, stopping potential',
          'Dual nature of matter, de Broglie wavelength (λ = h/p = h/√(2mE))',
          'Bohr\'s atomic model for hydrogen atom: energy levels (E_n = -13.6/n² eV), radii (r_n ∝ n²), spectral series',
          'X-rays: production in Coolidge tube, continuous and characteristic spectrum, Moseley\'s law',
          'Nuclear physics: mass defect, binding energy per nucleon, radioactivity decay law (N = N₀ e^(-λt)), half-life (T₁/₂ = 0.693/λ)',
          'Semiconductors: p-n junction diode, rectification (half-wave and full-wave), Zener diode, logic gates (AND, OR, NOT, NAND, NOR, XOR)'
        ],
        highYieldPoints: [
          'At resonance in series RLC circuit, impedance is minimum (Z = R) and current is maximum',
          'Bohr energy of hydrogen atom: E₁ = -13.6 eV, E₂ = -3.4 eV, E₃ = -1.51 eV',
          'Half-life relation: fraction remaining after n half-lives is (1/2)ⁿ'
        ],
        formulaFocus: [
          'Z = √[R² + (ωL - 1/(ωC))²],  f_r = 1 / (2π √(LC))',
          'KE_max = hν - φ = e V_0,  λ = h / √(2mqV)',
          'T₁/₂ = 0.693 / λ,  N = N₀ (1/2)^(t / T₁/₂)'
        ],
        typicalQuestions: 'Calculate resonant frequency and power factor of RLC circuit; find de Broglie wavelength of electron accelerated through 100V; find activity after 3 half-lives.'
      }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    nepaliName: 'रसायनशास्त्र',
    badge: '25 Marks • 17.9%',
    theme: {
      accentColor: 'text-emerald-600 dark:text-emerald-400',
      borderLight: 'border-emerald-200 dark:border-emerald-800/60',
      bgLight: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      badgeBg: 'bg-emerald-100 dark:bg-emerald-900/60',
      badgeText: 'text-emerald-800 dark:text-emerald-200',
      ringColor: 'ring-emerald-500/20',
      gradientFrom: 'from-emerald-600',
      gradientTo: 'to-teal-600'
    },
    totalMarks: 25,
    totalQuestions: 17,
    percentage: 17.9,
    sectionA: { questions: 9, marksPerQuestion: 1, totalMarks: 9 },
    sectionB: { questions: 8, marksPerQuestion: 2, totalMarks: 16 },
    overview: 'Chemistry carries 25 marks and is traditionally the quickest scoring section. Organic chemistry (approx. 10 marks) and Physical chemistry (approx. 9 marks) dominate the questions.',
    preparationStrategy: [
      'Memorize organic named reactions (Aldol, Cannizzaro, Reimer-Tiemann, Kolbe, Williamson) along with their specific reagents.',
      'Physical chemistry questions are direct formula substitutions: stoichiometry, chemical equilibrium, pH, and kinetics.',
      'Inorganic chemistry focuses heavily on periodic trends, metallurgy extraction steps, and coordination compound IUPAC names.'
    ],
    chapters: [
      {
        id: 'chem-physical-foundations',
        name: 'Physical Chemistry: Stoichiometry, Atomic Structure & Bonding',
        weightageLabel: '4–5 Marks',
        subtopics: [
          'Mole concept, Avogadro\'s number, molar mass, stoichiometry and limiting reagent',
          'Concentration expressions: Molarity (M), Molality (m), Normality (N), Mole fraction (χ), ppm',
          'Atomic structure: Bohr\'s postulates, quantum numbers (n, l, m, s)',
          'Aufbau principle, Pauli\'s exclusion principle, Hund\'s rule of maximum multiplicity',
          'Chemical bonding: ionic bond, covalent bond, coordinate bond',
          'VSEPR Theory and shapes of molecules (linear, trigonal planar, tetrahedral, pyramidal, bent)',
          'Hybridization of atomic orbitals (sp, sp², sp³, sp³d, sp³d²), dipole moment, and hydrogen bonding'
        ],
        highYieldPoints: [
          'Relation between Normality and Molarity: Normality = Molarity × n-factor (valency factor)',
          'Bond angle order: CH₄ (109.5°) > NH₃ (107°) > H₂O (104.5°) due to lone-pair repulsion',
          'Intermolecular H-bonding increases boiling point and water solubility'
        ],
        formulaFocus: [
          'M₁V₁ = M₂V₂,  N₁V₁ = N₂V₂',
          'Number of moles = Mass / Molar mass = Volume at STP (L) / 22.4'
        ],
        typicalQuestions: 'Calculate molarity of solution after mixing; predict shape and hybridization of SF₄, XeF₄, or PCl₅; identify quantum number set that is invalid.'
      },
      {
        id: 'chem-physical-equilibrium-kinetics',
        name: 'Physical Chemistry: States of Matter, Equilibrium & Kinetics',
        weightageLabel: '5–6 Marks',
        subtopics: [
          'Gas laws: Boyle\'s, Charles\'s, Avogadro\'s; Ideal Gas Equation PV = nRT',
          'Dalton\'s law of partial pressures and Graham\'s law of diffusion (r ∝ 1/√M)',
          'Chemical equilibrium: Law of mass action, equilibrium constants K_c and K_p, relation K_p = K_c(RT)^(Δn)',
          'Le Chatelier\'s principle: effect of temperature, pressure, concentration, and catalyst on equilibrium',
          'Ionic equilibrium: Arrhenius, Bronsted-Lowry, and Lewis theories of acids and bases',
          'pH and pOH scales, ionic product of water (K_w = 10^(-14) at 25°C)',
          'Buffer solutions and Henderson-Hasselbalch equation; common ion effect; solubility product (K_sp)',
          'Chemical kinetics: rate of reaction, rate law, order and molecularity of reaction',
          'Integrated rate equations for zero and first order reactions, half-life (t₁/₂ = 0.693/k)',
          'Electrochemistry: electrochemical series, standard electrode potential, Nernst equation'
        ],
        highYieldPoints: [
          'Relation between K_p and K_c: K_p = K_c(RT)^(Δn); if Δn = 0, K_p = K_c',
          'First-order half-life is strictly independent of initial reactant concentration: t₁/₂ = 0.693/k',
          'Buffer solution pH: pH = pK_a + log([Salt]/[Acid])'
        ],
        formulaFocus: [
          'K_p = K_c (RT)^(Δn)',
          'pH = -log[H⁺],  pH + pOH = 14',
          't₁/₂ = 0.693 / k (First order),  E_cell = E°_cell - (0.0591/n) log Q'
        ],
        typicalQuestions: 'Calculate pH of buffer mixture; find direction of equilibrium shift when pressure increases; calculate half-life of first-order radioactive reaction.'
      },
      {
        id: 'chem-inorganic',
        name: 'Inorganic Chemistry: Periodic Trends, Non-Metals & Metallurgy',
        weightageLabel: '5–6 Marks',
        subtopics: [
          'Periodic table: trends in atomic and ionic radii, ionization enthalpy, electron gain enthalpy, electronegativity',
          'Hydrogen: isotopes (protium, deuterium, tritium), heavy water (D₂O), water hardness and removal methods',
          's-Block Elements: general group characteristics of alkali and alkaline earth metals; compounds (NaOH, Na₂CO₃, CaO, CaCO₃, Plaster of Paris CaSO₄·½H₂O)',
          'p-Block Elements: Group 13 to 17 highlights (Borax, Carbon allotropes, Nitric acid Ostwald process, Allotropes of Phosphorus, Contact process for H₂SO₄)',
          'Metallurgy: principles of extraction (concentration, calcination, roasting, smelting, refining)',
          'Extraction of Iron (blast furnace), Copper (Bessemerization), Zinc, and Silver',
          'Transition elements (d-block): variable oxidation states, colored complexes, magnetic properties (spin-only formula μ = √(n(n+2)) BM)',
          'Coordination chemistry: IUPAC nomenclature, Werner\'s coordination theory, ligands (monodentate, bidentate, ambidentate)'
        ],
        highYieldPoints: [
          'First ionization enthalpy of Nitrogen is higher than Oxygen due to half-filled stable 2p³ subshell',
          'Plaster of Paris formula is CaSO₄·½H₂O; Gypsum is CaSO₄·2H₂O',
          'Spin-only magnetic moment: μ = √(n(n+2)) Bohr Magneton, where n is number of unpaired electrons'
        ],
        formulaFocus: [
          'μ_eff = √[n(n + 2)] BM',
          'CaSO₄·2H₂O (Gypsum) --[120°C]--> CaSO₄·½H₂O (POP) + 1.5 H₂O'
        ],
        typicalQuestions: 'Write IUPAC name of [Co(NH₃)₅Cl]Cl₂; identify ore of copper or iron; explain why Zn²⁺ salts are colorless while Cu²⁺ salts are blue.'
      },
      {
        id: 'chem-organic-hydrocarbons',
        name: 'Organic Chemistry: Fundamentals & Hydrocarbons',
        weightageLabel: '4–5 Marks',
        subtopics: [
          'IUPAC nomenclature of organic compounds with single and multiple functional groups',
          'Electronic displacements: Inductive (+I, -I), Electromeric, Resonance (+R, -R), and Hyperconjugation',
          'Reaction intermediates: stability of carbocations (3° > 2° > 1°), carbanions, and free radicals',
          'Isomerism: Structural (chain, position, functional, metamerism, tautomerism) and Stereoisomerism (geometrical cis/trans, optical enantiomers)',
          'Alkanes: preparation, free radical chlorination mechanism',
          'Alkenes: preparation by dehydrohalogenation (Saytzeff\'s rule), electrophilic addition of HX (Markovnikov\'s rule and peroxide Anti-Markovnikov effect), Ozonolysis',
          'Alkynes: preparation, acidity of terminal alkynes (HC≡CH), addition of water to form carbonyls'
        ],
        highYieldPoints: [
          'Markovnikov addition adds H to carbon with more hydrogens; peroxide effect (Kharasch) applies ONLY to HBr',
          'Ozonolysis cleaves double bond: R-CH=CH-R\' + O₃ ⟹ R-CHO + R\'-CHO',
          'Tautomerism requires at least one α-hydrogen atom adjacent to carbonyl group'
        ],
        formulaFocus: [
          'Stability of Carbocations: 3° > 2° > 1° > CH₃⁺',
          'Saytzeff Rule: More substituted alkene is the major product in elimination'
        ],
        typicalQuestions: 'Identify ozonolysis products of 2-methylbut-2-ene; compare acidic strength of terminal alkynes vs alkanes; determine type of isomerism between diethyl ether and methyl propyl ether.'
      },
      {
        id: 'chem-organic-functional-groups',
        name: 'Organic Chemistry: Functional Groups & Reactions',
        weightageLabel: '5–6 Marks',
        subtopics: [
          'Haloalkanes & Haloarenes: S_N1 vs S_N2 mechanism differences (kinetics, stereochemistry, solvent effects)',
          'Grignard Reagents (R-Mg-X): synthesis and reactions with aldehydes/ketones to yield alcohols',
          'Alcohols & Phenols: classification, Lucas test (distinguishing 1°, 2°, 3° alcohols), acidity of phenol, Reimer-Tiemann and Kolbe\'s reactions',
          'Ethers: Williamson\'s ether synthesis (R-X + R\'-O⁻Na⁺)',
          'Aldehydes & Ketones: Nucleophilic addition, Aldol condensation, Cannizzaro reaction, Haloform reaction (Iodoform test)',
          'Tests to distinguish aldehydes from ketones: Tollens\' mirror test and Fehling\'s solution',
          'Carboxylic acids & derivatives: acidity comparison, esterification',
          'Organic Nitrogen compounds: basicity of amines in gas vs aqueous phase, Carbylamine test, Diazonium salt reactions (Sandmeyer reaction)'
        ],
        highYieldPoints: [
          'S_N1 leads to racemization (carbocation); S_N2 leads to complete Walden inversion of configuration',
          'Aldol condensation requires α-H; Cannizzaro occurs ONLY in aldehydes lacking α-H (e.g. HCHO, C₆H₅CHO)',
          'Iodoform test is given by compounds with CH₃-C=O or CH₃-CH(OH)- groups'
        ],
        formulaFocus: [
          'Lucas Test: 3° alcohol ⟹ immediate turbidity; 2° ⟹ 5 mins; 1° ⟹ no turbidity at room temp',
          'Sandmeyer Reaction: C₆H₅N₂⁺Cl⁻ + CuCl/HCl ⟹ C₆H₅Cl + N₂'
        ],
        typicalQuestions: 'Identify major product when acetone undergoes haloform reaction; product of benzaldehyde with 50% NaOH (Cannizzaro); differentiate primary, secondary, and tertiary amines using Hinsberg reagent.'
      }
    ]
  },
  {
    id: 'english',
    name: 'English',
    nepaliName: 'अंग्रेजी',
    badge: '20 Marks • 14.3%',
    theme: {
      accentColor: 'text-amber-600 dark:text-amber-400',
      borderLight: 'border-amber-200 dark:border-amber-800/60',
      bgLight: 'bg-amber-50/50 dark:bg-amber-950/20',
      badgeBg: 'bg-amber-100 dark:bg-amber-900/60',
      badgeText: 'text-amber-800 dark:text-amber-200',
      ringColor: 'ring-amber-500/20',
      gradientFrom: 'from-amber-600',
      gradientTo: 'to-orange-600'
    },
    totalMarks: 20,
    totalQuestions: 14,
    percentage: 14.3,
    sectionA: { questions: 8, marksPerQuestion: 1, totalMarks: 8 },
    sectionB: { questions: 6, marksPerQuestion: 2, totalMarks: 12 },
    overview: 'English accounts for 20 marks and is the most time-efficient section on the CBT exam. High scorers frequently secure 16-18+ marks here, providing a crucial boost to entrance rank.',
    preparationStrategy: [
      'Master subject-verb agreement rules (inverted sentences, collective nouns, correlative conjunctions).',
      'Pay careful attention to third conditional structures (If + had + V3, would have + V3) which routinely appear in Section B.',
      'In reading comprehension, read the questions first to pinpoint factual details within the passage quickly.'
    ],
    chapters: [
      {
        id: 'eng-grammar-syntax',
        name: 'Grammar, Tenses & Sentence Structure',
        weightageLabel: '7–8 Marks',
        subtopics: [
          'Tense and aspect: correct usage of simple, continuous, perfect, and perfect continuous tenses',
          'Conditional sentences: Zero (factual), Type 1 (probable), Type 2 (hypothetical), Type 3 (impossible past)',
          'Subject-Verb Agreement: rules for collective nouns, correlatives (either...or, neither...nor), phrases like "along with", "as well as"',
          'Active and Passive Voice transformations across all tense forms, modal verbs, and imperative sentences',
          'Direct and Indirect Narration (Reported Speech): assertions, interrogatives, imperatives, exclamations',
          'Articles (a, an, the) and Determiners (few/a few, little/a little, each, every, either, neither)',
          'Tag questions, question transformations, and inversion syntax'
        ],
        highYieldPoints: [
          'Type 3 Conditional: "If + had + V3, ... would/could/might + have + V3"',
          'In "Neither A nor B", verb agrees with subject nearest to it (B)',
          '"A number of students are..." (plural) vs "The number of students is..." (singular)'
        ],
        formulaFocus: [
          'Conditional 1: If + Present Simple, Will + V1',
          'Conditional 2: If + Past Simple, Would + V1',
          'Conditional 3: If + Past Perfect, Would have + V3'
        ],
        typicalQuestions: 'Identify the grammatically correct sentence; convert direct speech with interrogative into reported speech; select correct conditional clause.'
      },
      {
        id: 'eng-prepositions-vocabulary',
        name: 'Prepositions, Phrasal Verbs & Word Power',
        weightageLabel: '6–7 Marks',
        subtopics: [
          'Appropriate and fixed prepositions with verbs, nouns, and adjectives (e.g. abstain from, adhere to, look forward to + V-ing)',
          'Phrasal verbs in academic and everyday usage (break down, call off, put up with, carry out)',
          'Synonyms and Antonyms in contextual engineering and scientific passages',
          'Idiomatic expressions and common proverbs (burn the midnight oil, through thick and thin, once in a blue moon)',
          'One-word substitutions for scientific concepts, personality traits, and literary forms',
          'Homophones, homonyms, and easily confused words (affect/effect, principal/principle, stationery/stationary)',
          'Spellings of frequently misspelled academic words'
        ],
        highYieldPoints: [
          '"Look forward to", "with a view to", "used to" are followed by V-ing (gerund), NOT V1',
          'Distinguish between "compliment" (praise) and "complement" (complete/enhance)',
          'Preposition differences: "die of" (disease) vs "die from" (external cause/overwork)'
        ],
        formulaFocus: [
          'Fixed Preposition: Congratulate ON, Accuse OF, Abstain FROM, Prefer X TO Y',
          'Gerund Trigger: Look forward to + [Verb-ing]'
        ],
        typicalQuestions: 'Fill preposition blank in "He was accused ___ theft"; choose synonym of "ephemeral" or "ubiquitous"; correct spelling of "accommodate" or "bureaucracy".'
      },
      {
        id: 'eng-comprehension-analysis',
        name: 'Reading Comprehension & Critical Analysis',
        weightageLabel: '5–6 Marks',
        subtopics: [
          'Reading comprehension of unseen passages (scientific discoveries, engineering ethics, environmental issues)',
          'Factual, inferential, and vocabulary-in-context comprehension questions',
          'Identifying main idea, central theme, tone of author (objective, critical, analytical, optimistic)',
          'Sentence completion and cloze test passage filling',
          'Para-jumbles and logical sentence sequencing (ordering jumbled sentences P, Q, R, S into coherent paragraph)'
        ],
        highYieldPoints: [
          'Always read the comprehension questions first before reading the passage to read with targeted purpose',
          'Look for transition connectors (however, furthermore, consequently, nevertheless) to solve para-jumbles',
          'Avoid extreme options containing absolute terms like "never", "always", "solely" unless explicitly stated in passage'
        ],
        formulaFocus: [
          'Para-Jumble Strategy: Identify topic sentence ⟹ Link noun-pronoun pairs ⟹ Conclude with final result'
        ],
        typicalQuestions: 'Answer inference questions based on 300-word passage; arrange 4 jumbled sentences into a logical paragraph.'
      }
    ]
  }
];

