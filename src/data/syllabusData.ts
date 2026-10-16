export interface SyllabusUnit {
  id: string;
  unitName: string;
  topics: string[];
}

export interface SyllabusSubject {
  id: 'mathematics' | 'physics' | 'chemistry' | 'english';
  name: string;
  nepaliName: string;
  totalMarks: number;
  totalQuestions: number;
  percentage: number;
  theme: {
    accentText: string;
    badgeBg: string;
    badgeText: string;
    border: string;
    bgLight: string;
    indicator: string;
  };
  units: SyllabusUnit[];
}

export const SYLLABUS_DATA: SyllabusSubject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    nepaliName: 'गणित',
    totalMarks: 50,
    totalQuestions: 36,
    percentage: 35.7,
    theme: {
      accentText: 'text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-100 dark:bg-blue-900/60',
      badgeText: 'text-blue-800 dark:text-blue-200',
      border: 'border-blue-200 dark:border-blue-800/60',
      bgLight: 'bg-blue-50/50 dark:bg-blue-950/20',
      indicator: 'bg-blue-600'
    },
    units: [
      {
        id: 'math-sets',
        unitName: 'Set, Relations & Functions',
        topics: [
          'Types of Sets & Set Operations',
          'Venn Diagrams & Applications',
          'Cartesian Product of Sets',
          'Binary Relations & Types',
          'Equivalence Relations & Equivalence Classes',
          'Domain, Co-domain & Range of Functions',
          'Injective, Surjective & Bijective Functions',
          'Composite Functions & Inverse Functions'
        ]
      },
      {
        id: 'math-complex',
        unitName: 'Algebra: Complex Numbers',
        topics: [
          'Imaginary Unit & Integral Powers of i',
          'Algebra of Complex Numbers (Addition, Subtraction, Multiplication, Division)',
          'Conjugate, Modulus & Principal Argument',
          'Polar & Euler Forms',
          'De Moivre\'s Theorem & Applications',
          'Cube Roots of Unity & Their Algebraic Properties',
          'Square Roots of Complex Numbers'
        ]
      },
      {
        id: 'math-quadratic',
        unitName: 'Algebra: Quadratic Equations',
        topics: [
          'Quadratic Equations & Roots Formula',
          'Nature of Roots & Discriminant',
          'Relations Between Roots and Coefficients',
          'Symmetric Functions of Roots',
          'Formation of Quadratic Equations',
          'Condition for Common Roots',
          'Sign & Extremum Values of Quadratic Expressions'
        ]
      },
      {
        id: 'math-sequences',
        unitName: 'Algebra: Sequences & Series',
        topics: [
          'Arithmetic Progression (AP)',
          'Geometric Progression (GP)',
          'Harmonic Progression (HP)',
          'Arithmetic, Geometric & Harmonic Means (AM, GM, HM)',
          'Inequality of Means (AM ≥ GM ≥ HM)',
          'Sum to Infinity of Geometric Series (|r| < 1)',
          'Sum of First n Natural Numbers, Squares & Cubes',
          'Arithmetico-Geometric Progression (AGP)'
        ]
      },
      {
        id: 'math-perm-comb-binomial',
        unitName: 'Permutations, Combinations & Binomial Theorem',
        topics: [
          'Fundamental Principles of Counting',
          'Permutations of Distinct & Repeated Objects (ⁿP_r)',
          'Circular Permutations',
          'Combinations & Selection Rules (ⁿC_r)',
          'Restricted Permutations & Combinations',
          'Binomial Theorem for Positive Integral Index',
          'General Term (T_r+1), Middle Term & Independent Term',
          'Properties of Binomial Coefficients',
          'Exponential & Logarithmic Series'
        ]
      },
      {
        id: 'math-matrices',
        unitName: 'Matrices & Determinants',
        topics: [
          'Types of Matrices & Matrix Operations',
          'Transpose, Symmetric & Skew-Symmetric Matrices',
          'Determinants of Order 2 and 3 & Properties',
          'Minors, Cofactors & Adjoint of a Matrix',
          'Singular & Non-Singular Matrices',
          'Inverse of a Square Matrix',
          'Cramer\'s Rule & System of Linear Equations'
        ]
      },
      {
        id: 'math-trig',
        unitName: 'Trigonometry',
        topics: [
          'Compound, Multiple & Sub-multiple Angles',
          'Transformation of Sums and Products',
          'Conditional Trigonometric Identities',
          'General Solutions of Trigonometric Equations',
          'Inverse Circular Functions & Principal Values',
          'Properties of Triangles: Sine, Cosine & Projection Rules',
          'Area of Triangle, In-radius, Circum-radius & Ex-radii',
          'Heights & Distances'
        ]
      },
      {
        id: 'math-coord-2d',
        unitName: 'Coordinate Geometry (2D)',
        topics: [
          'Distance & Section Formulas',
          'Slopes & Forms of Straight Lines',
          'Angle Between Two Lines',
          'Perpendicular Distance & Parallel Line Separation',
          'Pair of Straight Lines Through Origin (ax² + 2hxy + by² = 0)',
          'Condition for Orthogonal & Coincident Pair of Lines',
          'Circles: Standard & General Equations, Center & Radius',
          'Tangents, Normals & Length of Tangent',
          'Parabola: Standard Equation, Focus, Directrix & Latus Rectum',
          'Ellipse: Standard Equation, Eccentricity, Foci & Directrices',
          'Hyperbola: Standard Equation, Eccentricity, Foci & Asymptotes'
        ]
      },
      {
        id: 'math-vectors-3d',
        unitName: 'Vectors & 3D Geometry',
        topics: [
          '3D Coordinate System, Distance & Section Formulas',
          'Direction Cosines & Direction Ratios of a Line',
          'Angle Between Two Lines in Space',
          'Equations of a Plane (General, Intercept, Normal Forms)',
          'Distance of a Point from a Plane',
          'Vector Algebra: Addition, Subtraction & Scalar Multiplication',
          'Dot (Scalar) Product & Geometric Projection',
          'Cross (Vector) Product & Areas of Triangles/Parallelograms',
          'Scalar Triple Product & Coplanarity of Vectors'
        ]
      },
      {
        id: 'math-calculus-limits-derivatives',
        unitName: 'Calculus: Limits & Differential Calculus',
        topics: [
          'Limits of Algebraic, Trigonometric, Exponential & Logarithmic Functions',
          'Indeterminate Forms & L\'Hôpital\'s Rule',
          'Continuity of Functions at a Point & in an Interval',
          'Derivatives from First Principle',
          'Product, Quotient & Chain Rules of Differentiation',
          'Derivatives of Inverse Trigonometric, Implicit & Parametric Functions',
          'Higher-Order Derivatives (Second Derivative)',
          'Tangents & Normals to Curves',
          'Rate of Change, Velocity & Acceleration',
          'Monotonicity (Increasing & Decreasing Functions)',
          'Local Maxima & Minima (First & Second Derivative Tests)',
          'Rolle\'s Theorem & Lagrange\'s Mean Value Theorem'
        ]
      },
      {
        id: 'math-calculus-integrals',
        unitName: 'Calculus: Integral Calculus & Differential Equations',
        topics: [
          'Indefinite Integrals & Standard Formulas',
          'Integration by Substitution',
          'Integration by Parts',
          'Integration by Partial Fractions',
          'Definite Integrals & Fundamental Theorem of Calculus',
          'Properties of Definite Integrals (King\'s Property, Symmetry)',
          'Area Bounded by Curves',
          'Differential Equations: Order & Degree',
          'Separable Variable Differential Equations',
          'Homogeneous First-Order Differential Equations',
          'Linear Differential Equations (Integrating Factor Method)'
        ]
      }
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    nepaliName: 'भौतिकशास्त्र',
    totalMarks: 45,
    totalQuestions: 33,
    percentage: 32.1,
    theme: {
      accentText: 'text-violet-600 dark:text-violet-400',
      badgeBg: 'bg-violet-100 dark:bg-violet-900/60',
      badgeText: 'text-violet-800 dark:text-violet-200',
      border: 'border-violet-200 dark:border-violet-800/60',
      bgLight: 'bg-violet-50/50 dark:bg-violet-950/20',
      indicator: 'bg-violet-600'
    },
    units: [
      {
        id: 'phy-mechanics-kinematics',
        unitName: 'Units, Vectors & Kinematics',
        topics: [
          'Fundamental & Derived SI Units',
          'Dimensional Formulas of Physical Quantities & Constants',
          'Applications & Limitations of Dimensional Analysis',
          'Significant Figures & Error Propagation',
          'Vector Addition, Subtraction & Resolution',
          'Rectilinear Motion with Uniform & Non-Uniform Acceleration',
          'Relative Velocity in 1D & 2D (River-Boat & Rain Problems)',
          'Projectile Motion (Horizontal & Oblique Projections)',
          'Time of Flight, Maximum Height, Range & Trajectory'
        ]
      },
      {
        id: 'phy-mechanics-dynamics',
        unitName: 'Dynamics, Work, Energy & Momentum',
        topics: [
          'Newton\'s Laws of Motion & Applications',
          'Linear Momentum & Impulse',
          'Conservation of Linear Momentum & Recoil',
          'Static, Limiting & Kinetic Friction',
          'Angle of Friction, Angle of Repose & Inclined Planes',
          'Uniform Circular Motion & Centripetal Acceleration',
          'Banking of Roads & Railway Tracks',
          'Work Done by Constant & Variable Forces',
          'Work-Energy Theorem & Power',
          'Conservative & Non-Conservative Forces',
          'Elastic & Inelastic Collisions in 1D and 2D',
          'Coefficient of Restitution'
        ]
      },
      {
        id: 'phy-mechanics-gravitation-rotation',
        unitName: 'Gravitation, Rotation & Oscillations',
        topics: [
          'Newton\'s Law of Universal Gravitation',
          'Variation of Acceleration Due to Gravity (Altitude, Depth, Latitude)',
          'Gravitational Field Intensity & Gravitational Potential',
          'Escape Velocity from Earth',
          'Orbital Velocity of Satellites & Kepler\'s Laws',
          'Moment of Inertia of Regular Bodies',
          'Theorems of Parallel & Perpendicular Axes',
          'Torque, Angular Momentum & Its Conservation',
          'Rotational Kinetic Energy & Rolling Without Slipping',
          'Simple Harmonic Motion (SHM) Kinematics & Dynamics',
          'Simple Pendulum & Mass-Spring Oscillations',
          'Energy Conservation in Simple Harmonic Motion'
        ]
      },
      {
        id: 'phy-fluids',
        unitName: 'Fluid Mechanics & Properties of Matter',
        topics: [
          'Fluid Pressure & Pascal\'s Principle',
          'Archimedes\' Principle & Laws of Floatation',
          'Surface Tension & Surface Energy',
          'Excess Pressure in Drops and Soap Bubbles',
          'Angle of Contact & Capillary Action (Jurin\'s Law)',
          'Viscosity & Newton\'s Viscous Force Formula',
          'Stokes\' Law & Terminal Velocity',
          'Streamline & Turbulent Flow',
          'Equation of Continuity & Bernoulli\'s Principle',
          'Torricelli\'s Law of Efflux & Venturimeter'
        ]
      },
      {
        id: 'phy-heat',
        unitName: 'Heat & Thermodynamics',
        topics: [
          'Thermometry & Temperature Scales',
          'Thermal Expansion of Solids & Liquids (α, β, γ)',
          'Calorimetry, Specific Heat Capacity & Latent Heat',
          'Kinetic Theory of Gases & RMS Velocity',
          'Degrees of Freedom & Molar Heat Capacities (Cp, Cv)',
          'Mayer\'s Relation (Cp - Cv = R)',
          'Thermal Conduction, Convection & Radiation',
          'Stefan-Boltzmann Law & Wien\'s Displacement Law',
          'Newton\'s Law of Cooling',
          'First Law of Thermodynamics & Internal Energy',
          'Isothermal, Adiabatic, Isobaric & Isochoric Processes',
          'Work Done in Isothermal & Adiabatic Expansions',
          'Second Law of Thermodynamics & Carnot Heat Engine',
          'Efficiency of Carnot Engine & Refrigerator COP',
          'Concept of Entropy'
        ]
      },
      {
        id: 'phy-optics',
        unitName: 'Optics: Geometric & Wave Optics',
        topics: [
          'Reflection at Plane & Spherical Mirrors',
          'Refraction at Plane Surfaces, Critical Angle & TIR',
          'Optical Fibers & Prism Minimum Deviation',
          'Thin Lenses & Lens Maker\'s Equation',
          'Combination of Lenses in Contact & Power',
          'Simple Microscope, Compound Microscope & Astronomical Telescope',
          'Wavefronts & Huygens\' Principle',
          'Interference of Light & Young\'s Double Slit Experiment (YDSE)',
          'Fringe Width & Path Difference in YDSE',
          'Single Slit Fraunhofer Diffraction',
          'Polarization of Light, Brewster\'s Law & Malus\'s Law'
        ]
      },
      {
        id: 'phy-waves-sound',
        unitName: 'Wave Motion & Sound',
        topics: [
          'Progressive Wave Equation & Wave Speed',
          'Velocity of Sound in Gases (Laplace Correction)',
          'Factors Affecting Speed of Sound',
          'Stationary Waves in Stretched Strings',
          'Organ Pipes (Open & Closed) & Harmonics',
          'Resonance & Beats Phenomenon',
          'Doppler Effect in Sound'
        ]
      },
      {
        id: 'phy-electrostatics',
        unitName: 'Electrostatics & Capacitors',
        topics: [
          'Coulomb\'s Law of Electrostatics',
          'Electric Field Intensity & Electric Potential',
          'Electric Dipole & Dipole Moment',
          'Electric Flux & Gauss\'s Theorem Applications',
          'Equipotential Surfaces',
          'Capacitance of Parallel Plate Capacitor',
          'Effect of Dielectric Slab on Capacitance',
          'Series & Parallel Combinations of Capacitors',
          'Energy Stored in a Capacitor & Energy Density'
        ]
      },
      {
        id: 'phy-current-electricity-magnetism',
        unitName: 'Current Electricity & Magnetism',
        topics: [
          'Electric Current, Drift Velocity & Ohm\'s Law',
          'Resistance, Resistivity & Temperature Coefficient',
          'EMF, Terminal Potential & Internal Resistance of Cells',
          'Kirchhoff\'s Laws & Wheatstone Bridge Principle',
          'Potentiometer & Comparison of EMFs',
          'Joule\'s Heating Effect & Electric Power',
          'Biot-Savart Law & Circular Coil Magnetic Fields',
          'Ampere\'s Circuital Law & Solenoids',
          'Lorentz Force on Moving Charges & Current Wires',
          'Moving Coil Galvanometer, Ammeter & Voltmeter Conversion',
          'Earth\'s Magnetic Field Elements',
          'Magnetic Materials: Diamagnetic, Paramagnetic, Ferromagnetic',
          'Electromagnetic Induction: Faraday\'s & Lenz\'s Laws',
          'Self-Inductance & Mutual Inductance'
        ]
      },
      {
        id: 'phy-ac-modern',
        unitName: 'Alternating Currents & Modern Physics',
        topics: [
          'Peak & RMS Values of Alternating Current',
          'AC Through Pure Resistors, Inductors & Capacitors',
          'Series RLC Circuit, Impedance & Resonance',
          'Power Factor in AC Circuits & Transformers',
          'Specific Charge (e/m) of Electron',
          'Photoelectric Effect & Einstein\'s Photoelectric Equation',
          'Stopping Potential, Threshold Frequency & Work Function',
          'de Broglie Wavelength & Matter Waves',
          'Bohr\'s Model of Hydrogen Atom & Spectral Series',
          'X-Rays Production & Moseley\'s Law',
          'Mass Defect, Binding Energy & Radioactivity Decay Law',
          'Half-Life, Mean Life & Nuclear Reactions',
          'Energy Bands in Solids (Conductors, Semiconductors, Insulators)',
          'p-n Junction Diode, Rectification & Zener Diode',
          'Logic Gates (AND, OR, NOT, NAND, NOR, XOR)'
        ]
      }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    nepaliName: 'रसायनशास्त्र',
    totalMarks: 25,
    totalQuestions: 17,
    percentage: 17.9,
    theme: {
      accentText: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-100 dark:bg-emerald-900/60',
      badgeText: 'text-emerald-800 dark:text-emerald-200',
      border: 'border-emerald-200 dark:border-emerald-800/60',
      bgLight: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      indicator: 'bg-emerald-600'
    },
    units: [
      {
        id: 'chem-physical-foundations',
        unitName: 'Physical Chemistry: Atomic Structure & Bonding',
        topics: [
          'Mole Concept, Molar Mass & Stoichiometry',
          'Concentration Units: Molarity, Molality, Normality, Mole Fraction, ppm',
          'Bohr\'s Atomic Model & Quantum Numbers (n, l, m, s)',
          'Aufbau Principle, Pauli\'s Exclusion Principle & Hund\'s Rule',
          'Electronic Configurations of Elements',
          'Ionic, Covalent & Coordinate Bonds',
          'VSEPR Theory & Molecular Geometries',
          'Hybridization of Central Atoms (sp, sp², sp³, sp³d, sp³d²)',
          'Dipole Moment & Hydrogen Bonding'
        ]
      },
      {
        id: 'chem-physical-equilibrium-kinetics',
        unitName: 'Physical Chemistry: States, Equilibrium & Kinetics',
        topics: [
          'Gas Laws, Ideal Gas Equation & Graham\'s Diffusion Law',
          'Dalton\'s Law of Partial Pressures & Real Gases',
          'Chemical Equilibrium, Law of Mass Action & Kc/Kp Relations',
          'Le Chatelier\'s Principle & Industrial Applications',
          'Arrhenius, Bronsted-Lowry & Lewis Acid-Base Theories',
          'pH & pOH Scales, Ionic Product of Water (Kw)',
          'Buffer Solutions & Henderson-Hasselbalch Equation',
          'Common Ion Effect & Solubility Product (Ksp)',
          'Chemical Kinetics: Rate of Reaction, Order & Molecularity',
          'Integrated Rate Laws (Zero & First Order) & Half-Life',
          'Arrhenius Equation & Activation Energy',
          'First Law of Thermodynamics, Enthalpy & Hess\'s Law',
          'Entropy, Gibbs Free Energy & Spontaneity (ΔG < 0)',
          'Electrochemistry: Standard Electrode Potential & Nernst Equation'
        ]
      },
      {
        id: 'chem-inorganic',
        unitName: 'Inorganic Chemistry: Elements & Metallurgy',
        topics: [
          'Periodic Trends (Radii, Ionization Enthalpy, Electronegativity)',
          'Hydrogen Isotopes, Heavy Water & Water Hardness Removal',
          's-Block Alkali & Alkaline Earth Metals & Compounds (NaOH, Na₂CO₃, CaO, Plaster of Paris)',
          'p-Block Highlights: Borax, Carbon Allotropes, Nitric Acid (Ostwald), Sulfuric Acid (Contact)',
          'Allotropes of Phosphorus & Halogen Trends',
          'Principles of Metallurgy: Concentration, Roasting, Calcination, Smelting, Refining',
          'Extraction of Iron, Copper, Zinc & Silver',
          'd-Block Transition Metals: Oxidation States, Colors & Magnetism',
          'Coordination Compounds, IUPAC Nomenclature & Werner\'s Theory'
        ]
      },
      {
        id: 'chem-organic-fundamentals',
        unitName: 'Organic Chemistry: Fundamentals & Hydrocarbons',
        topics: [
          'IUPAC Nomenclature of Organic Compounds',
          'Inductive, Electromeric, Resonance & Hyperconjugation Effects',
          'Reaction Intermediates: Carbocations, Carbanions, Free Radicals',
          'Structural Isomerism (Chain, Position, Functional, Metamerism, Tautomerism)',
          'Stereoisomerism (Geometrical Cis/Trans & Optical Enantiomers)',
          'Alkanes & Free Radical Halogenation',
          'Alkenes, Dehydrohalogenation & Saytzeff\'s Rule',
          'Electrophilic Addition: Markovnikov & Anti-Markovnikov Rules',
          'Ozonolysis of Alkenes',
          'Alkynes, Terminal Alkyne Acidity & Hydration'
        ]
      },
      {
        id: 'chem-organic-functional',
        unitName: 'Organic Chemistry: Functional Groups & Polymers',
        topics: [
          'Alkyl & Aryl Halides (S_N1 vs S_N2 Nucleophilic Substitution)',
          'Grignard Reagents (R-Mg-X) Synthesis & Reactions',
          'Alcohols: Classification, Lucas Test & Victor Meyer Test',
          'Phenols: Acidity, Nitration, Kolbe\'s & Reimer-Tiemann Reactions',
          'Williamson\'s Ether Synthesis',
          'Aldehydes & Ketones: Nucleophilic Addition Reactions',
          'Aldol Condensation & Cannizzaro Reaction',
          'Iodoform Test, Tollens\' Reagent & Fehling\'s Solution',
          'Carboxylic Acids: Acidic Strength & Esterification',
          'Amines: Basicity Trends, Carbylamine Test & Hinsberg Test',
          'Diazonium Salts & Sandmeyer Reaction',
          'Biomolecules (Glucose, Fructose, Amino Acids, Peptide Bond)',
          'Polymers (Addition & Condensation: Nylon-6,6, Bakelite, Teflon, PVC)'
        ]
      }
    ]
  },
  {
    id: 'english',
    name: 'English',
    nepaliName: 'अंग्रेजी',
    totalMarks: 20,
    totalQuestions: 14,
    percentage: 14.3,
    theme: {
      accentText: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-100 dark:bg-amber-900/60',
      badgeText: 'text-amber-800 dark:text-amber-200',
      border: 'border-amber-200 dark:border-amber-800/60',
      bgLight: 'bg-amber-50/50 dark:bg-amber-950/20',
      indicator: 'bg-amber-500'
    },
    units: [
      {
        id: 'eng-grammar',
        unitName: 'Grammar & Syntax',
        topics: [
          'Tense & Aspect Usage',
          'Conditional Sentences (Type 0, 1, 2, 3)',
          'Subject-Verb Agreement Rules',
          'Active & Passive Voice Transformations',
          'Direct & Indirect Speech (Reported Speech)',
          'Articles & Determiners (a, an, the, few, little, each, every)',
          'Appropriate & Fixed Prepositions',
          'Phrasal Verbs in Academic Usage',
          'Connectors & Conjunctions',
          'Question Tags & Sentence Inversions'
        ]
      },
      {
        id: 'eng-vocabulary',
        unitName: 'Vocabulary & Word Power',
        topics: [
          'Contextual Synonyms & Antonyms',
          'Frequently Tested Idioms & Phrases',
          'One-Word Substitutions',
          'Homophones, Homonyms & Confused Word Pairs',
          'Word Spelling Correction & Prefixes/Suffixes'
        ]
      },
      {
        id: 'eng-comprehension',
        unitName: 'Reading Comprehension & Critical Analysis',
        topics: [
          'Unseen Passage Comprehension (Scientific & Analytical)',
          'Factual & Inferential Questions',
          'Vocabulary-in-Context',
          'Identifying Main Idea & Author\'s Tone',
          'Sentence Completion & Cloze Test',
          'Para-Jumbles & Logical Sentence Ordering'
        ]
      }
    ]
  }
];
