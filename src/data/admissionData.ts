import type { 
  AdmissionMetadata, 
  CampusKey, 
  CampusDetail, 
  CampusSeat, 
  CutoffsData, 
  AffiliatedCollege, 
  FacultyInfo, 
  FinancialPlan, 
  OfficialPortal 
} from '../types';

/**
 * IOE Undergraduate Engineering Admission Dataset
 * 
 * Provenance & Verification:
 * - Data Source: Institute of Engineering (IOE), Tribhuvan University
 * - Official Reference: IOE Entrance Examination Information Booklet & Historical Closing Rank Archives (2082 BS)
 * - Academic Cycle: Undergraduate B.E. / B.Arch Entrance & Admissions
 * - Last Verified: October 2026
 * 
 * Note: Historical closing ranks represent past admissions and serve as a statistical reference.
 * Cutoff ranks for subsequent academic years fluctuate based on test difficulty, applicant volume, and seat changes.
 */

export const ADMISSION_METADATA: AdmissionMetadata = {
  academicYear: "2083/084 (2083 BS)",
  governingBody: "Institute of Engineering (IOE), Tribhuvan University",
  examFormat: "Computer Based Test (CBT)",
  totalMarks: 140,
  durationHours: 2,
  passPercentage: 40, // 56 marks
  negativeMarking: "10% per incorrect answer (-0.1 for 1-mark, -0.2 for 2-mark)",
  totalConstituentSeats: 2040,
  sourceUrl: "https://admission.ioe.edu.np/be/2083/public/guideline",
  disclaimer: "This platform is an independent educational guide for Nepalese students. Fee structures and rules are verified against IOE B.E./B.Arch Booklet 2083 (2083/084 Intake). Cutoff predictions and priority recommendations are statistical heuristics derived from historical admission archives. Official admissions are solely governed by the IOE Entrance Examination Board."
};

export const CAMPUS_NAMES: Record<CampusKey, string> = {
  Pulchowk: 'Pulchowk Campus',
  Thapathali: 'Thapathali Campus',
  WRC: 'Pashchimanchal Campus (WRC)',
  ERC: 'Purwanchal Campus (ERC)',
  ChEC: 'Chitwan Eng. Campus (ChEC)'
};

export const CAMPUS_DETAILS: Record<CampusKey, CampusDetail> = {
  Pulchowk: {
    fullName: "Pulchowk Campus (Central Campus)",
    location: "Pulchowk, Lalitpur",
    district: "Lalitpur",
    established: 1972,
    website: "https://pcampus.edu.np",
    admissionPortal: "https://entrance.ioe.edu.np",
    type: "Constituent Campus",
    totalSeats: 624,
    description: "The premier central engineering institution of Tribhuvan University, offering top-tier undergraduate engineering programs with high entrance competition.",
    facilities: ["Advanced Computing Labs", "Robotics Club", "Central Library", "Boys & Girls Hostels", "Research Centers"]
  },
  Thapathali: {
    fullName: "Thapathali Campus",
    location: "Thapathali, Kathmandu",
    district: "Kathmandu",
    established: 1966,
    website: "https://tcioe.edu.np",
    admissionPortal: "https://entrance.ioe.edu.np",
    type: "Constituent Campus",
    totalSeats: 432,
    description: "Centrally located in the heart of Kathmandu, specialized in Automobile, Industrial, Civil, Mechanical, Electronics, and Computer disciplines.",
    facilities: ["Automobile Workshops", "CAD/CAM Lab", "Digital Library", "Maker Space", "Robotics Club"]
  },
  WRC: {
    fullName: "Pashchimanchal Campus (Western Regional Campus)",
    location: "Lamachaur, Pokhara",
    district: "Kaski",
    established: 1981,
    website: "https://wrc.edu.np",
    admissionPortal: "https://entrance.ioe.edu.np",
    type: "Constituent Campus",
    totalSeats: 432,
    description: "Sprawled across 312 ropanis in Pokhara, offering excellent technical programs including the pioneering Geomatics Engineering program.",
    facilities: ["Surveying Grounds", "GIS & Remote Sensing Lab", "Power Systems Lab", "Student Hostels", "Expansive Sports Grounds"]
  },
  ERC: {
    fullName: "Purwanchal Campus (Eastern Regional Campus)",
    location: "Tinkune, Dharan",
    district: "Sunsari",
    established: 1978,
    website: "https://ioeerc.edu.np",
    admissionPortal: "https://entrance.ioe.edu.np",
    type: "Constituent Campus",
    totalSeats: 528,
    description: "The eastern regional constituent engineering hub situated in Dharan, renowned for Agricultural Engineering alongside standard technical degrees.",
    facilities: ["Agricultural Machinery Lab", "Hydraulics Lab", "High-Speed Internet Labs", "On-Campus Hostels", "Botanical Enclosure"]
  },
  ChEC: {
    fullName: "Chitwan Engineering Campus",
    location: "Rampur, Chitwan",
    district: "Chitwan",
    established: 2019,
    website: "https://chec.edu.np",
    admissionPortal: "https://entrance.ioe.edu.np",
    type: "Constituent Campus",
    totalSeats: 24,
    description: "The newest constituent wing of IOE established in Rampur, Chitwan. It currently offers Bachelor of Architecture (B.Arch) only.",
    facilities: ["Design Studios", "Architecture Workshop", "Growing Technical Library"]
  }
};

export const CAMPUS_SEATS: Record<CampusKey, CampusSeat[]> = {
  Pulchowk: [
    { program: "Civil Engineering", regular: 108, fullFee: 84, total: 192 },
    { program: "Computer Engineering", regular: 36, fullFee: 60, total: 96 },
    { program: "Electrical Engineering", regular: 24, fullFee: 48, total: 72 },
    { program: "Electronics, Communication and Information Engineering", regular: 24, fullFee: 48, total: 72 },
    { program: "Mechanical Engineering", regular: 24, fullFee: 48, total: 72 },
    { program: "Architecture", regular: 24, fullFee: 24, total: 48 },
    { program: "Aerospace Engineering", regular: 12, fullFee: 12, total: 24 },
    { program: "Chemical Engineering", regular: 12, fullFee: 36, total: 48 }
  ],
  Thapathali: [
    { program: "Civil Engineering", regular: 36, fullFee: 108, total: 144 },
    { program: "Computer Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Electronics, Communication and Information Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Mechanical Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Automobile Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Industrial Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Architecture", regular: 12, fullFee: 36, total: 48 }
  ],
  WRC: [
    { program: "Civil Engineering", regular: 36, fullFee: 108, total: 144 },
    { program: "Electrical Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Electronics, Communication and Information Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Mechanical Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Computer Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Automobile Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Geomatics Engineering", regular: 12, fullFee: 36, total: 48 }
  ],
  ERC: [
    { program: "Civil Engineering", regular: 36, fullFee: 108, total: 144 },
    { program: "Electrical Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Mechanical Engineering", regular: 24, fullFee: 72, total: 96 },
    { program: "Computer Engineering", regular: 24, fullFee: 72, total: 96 },
    { program: "Electronics, Communication and Information Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Agricultural Engineering", regular: 12, fullFee: 36, total: 48 },
    { program: "Architecture", regular: 12, fullFee: 36, total: 48 }
  ],
  ChEC: [
    { program: "Architecture", regular: 6, fullFee: 18, total: 24 }
  ]
};

export const ALL_PROGRAMS: string[] = [
  "Civil Engineering",
  "Computer Engineering",
  "Electrical Engineering",
  "Electronics, Communication and Information Engineering",
  "Mechanical Engineering",
  "Architecture",
  "Aerospace Engineering",
  "Chemical Engineering",
  "Automobile Engineering",
  "Industrial Engineering",
  "Geomatics Engineering",
  "Agricultural Engineering"
];

// Preserved historical cutoff baseline across constituent campuses
export const CUTOFFS: CutoffsData = {
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
    "Electrical Engineering": { Regular: { Open: 695, Janajati: 1050, Female_FmQ: 1150, Female_RsQ: 1100 }, FullFee: { Open: 3120, Janajati: 4200, Female_FmQ: 4100, Female_RsQ: 4000 } },
    "Mechanical Engineering": { Regular: { Open: 620, Janajati: 950, Female_FmQ: 1080, Female_RsQ: 1000 }, FullFee: { Open: 2980, Janajati: 3900, Female_FmQ: 3850, Female_RsQ: 3800 } },
    "Automobile Engineering": { Regular: { Open: 1200, Janajati: 1400, Female_FmQ: 1800, Female_RsQ: 1750 }, FullFee: { Open: 4100, Janajati: 4600, Female_FmQ: 4800, Female_RsQ: 4700 } },
    "Geomatics Engineering": { Regular: { Open: 1180, Janajati: 1350, Female_FmQ: 1900, Female_RsQ: 1850 }, FullFee: { Open: 3450, Janajati: 4200, Female_FmQ: 4300, Female_RsQ: 4250 } }
  },
  ERC: {
    "Civil Engineering": { Regular: { Open: 920, Janajati: 1400, Female_FmQ: 1600, Female_RsQ: 1550 }, FullFee: { Open: 3800, Janajati: 5800, Female_FmQ: 5700, Female_RsQ: 5600 } },
    "Computer Engineering": { Regular: { Open: 240, Janajati: 480, Female_FmQ: 520, Female_RsQ: 500 }, FullFee: { Open: 1150, Janajati: 1900, Female_FmQ: 1850, Female_RsQ: 1800 } },
    "Electronics, Communication and Information Engineering": { Regular: { Open: 650, Janajati: 980, Female_FmQ: 1100, Female_RsQ: 1050 }, FullFee: { Open: 2800, Janajati: 3800, Female_FmQ: 3700, Female_RsQ: 3600 } },
    "Electrical Engineering": { Regular: { Open: 980, Janajati: 1350, Female_FmQ: 1500, Female_RsQ: 1450 }, FullFee: { Open: 3900, Janajati: 4900, Female_FmQ: 4800, Female_RsQ: 4700 } },
    "Mechanical Engineering": { Regular: { Open: 890, Janajati: 1250, Female_FmQ: 1400, Female_RsQ: 1350 }, FullFee: { Open: 3600, Janajati: 4500, Female_FmQ: 4400, Female_RsQ: 4300 } },
    "Agricultural Engineering": { Regular: { Open: 1450, Janajati: 1800, Female_FmQ: 2100, Female_RsQ: 2000 }, FullFee: { Open: 4800, Janajati: 5400, Female_FmQ: 5500, Female_RsQ: 5450 } },
    "Architecture": { Regular: { Open: 1350, Janajati: 1700, Female_FmQ: 1900, Female_RsQ: 1850 }, FullFee: { Open: 3400, Janajati: 4200, Female_FmQ: 4100, Female_RsQ: 4050 } }
  },
  ChEC: {
    "Architecture": { Regular: { Open: 1150, Janajati: 1500, Female_FmQ: 1750, Female_RsQ: 1700 }, FullFee: { Open: 2950, Janajati: 3800, Female_FmQ: 3900, Female_RsQ: 3850 } }
  }
};

export const AFFILIATED_COLLEGES: AffiliatedCollege[] = [
  { name: "Advanced College of Engineering and Management (ACEM)", location: "Kupondole, Lalitpur", programs: "Civil, Computer, Electrical, Electronics", fee: "NPR 11,50,000 - 13,00,000", cutoff: "Rank ~4,500", website: "https://acem.edu.np" },
  { name: "Kathmandu Engineering College (KEC)", location: "Kalimati, Kathmandu", programs: "Civil, Computer, Electrical, Electronics, Architecture", fee: "NPR 12,00,000 - 14,50,000", cutoff: "Rank ~4,200", website: "https://kecktm.edu.np" },
  { name: "Himalaya College of Engineering (HCOE)", location: "Chyasal, Lalitpur", programs: "Civil, Computer, Electronics, Architecture", fee: "NPR 10,50,000 - 12,50,000", cutoff: "Rank ~4,800", website: "https://hcoe.edu.np" },
  { name: "Kantipur Engineering College (KEC Dhapakhel)", location: "Dhapakhel, Lalitpur", programs: "Civil, Computer, Electronics", fee: "NPR 11,00,000 - 13,00,000", cutoff: "Rank ~4,400", website: "https://kec.edu.np" },
  { name: "National College of Engineering (NCE)", location: "Talchhikhel, Lalitpur", programs: "Civil, Computer, Electrical, Electronics", fee: "NPR 10,00,000 - 12,00,000", cutoff: "Rank ~5,200", website: "https://nce.edu.np" },
  { name: "Kathford International College of Engineering and Management (KIC)", location: "Balkumari, Lalitpur", programs: "Civil, Computer, Electronics", fee: "NPR 10,50,000 - 12,50,000", cutoff: "Rank ~5,000", website: "https://kathford.edu.np" },
  { name: "Janakpur Engineering College (JEC)", location: "Tathali, Bhaktapur", programs: "Civil, Computer, Electronics", fee: "NPR 9,50,000 - 11,50,000", cutoff: "Rank ~5,500", website: "https://jec.edu.np" },
  { name: "Sagarmatha Engineering College", location: "Sanpa, Lalitpur", programs: "Civil, Computer, Electronics", fee: "NPR 11,00,000 - 12,80,000", cutoff: "Rank ~4,700", website: "https://sagarmatha.edu.np" },
  { name: "Lalitpur Engineering College", location: "Chakupat, Lalitpur", programs: "Civil, Computer", fee: "NPR 9,80,000 - 11,50,000", cutoff: "Rank ~5,300", website: "https://lec.edu.np" },
  { name: "Khwopa College of Engineering", location: "Libali, Bhaktapur", programs: "Civil, Computer, Electrical", fee: "NPR 8,50,000 - 10,50,000", cutoff: "Rank ~3,800", website: "https://khwopa.edu.np" }
];

export const FACULTY_DATA: Record<string, FacultyInfo> = {
  "Computer Engineering": {
    degree: "B.E. (Bachelor of Computer Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["Software Engineering", "Algorithms & DSA", "AI & Machine Learning", "Computer Networks", "Cybersecurity", "Database Systems"],
    description: "Focuses on software engineering, computer system architecture, embedded computing, algorithms, database systems, distributed networks, cloud computing, and artificial intelligence. Prepares graduates to design scalable software products, intelligent algorithms, and mission-critical digital systems.",
    coreSubjects: [
      "Data Structures & Algorithms (DSA)",
      "Digital Logic & Microprocessors (8085/8086)",
      "Object Oriented Programming (C++/Java)",
      "Operating Systems & Systems Programming",
      "Database Management Systems (DBMS)",
      "Computer Networks & Network Security",
      "Theory of Computation & Compiler Design",
      "Software Engineering & Agile Methodologies",
      "Computer Architecture & Organization",
      "Artificial Intelligence & Machine Learning"
    ],
    careers: [
      "Software Engineer / Full-Stack Developer",
      "Machine Learning & AI Research Engineer",
      "Cloud Solutions & DevOps Architect",
      "Cybersecurity Analyst & Penetration Tester",
      "Database Administrator (DBA)",
      "Systems Programmer / Kernel Developer"
    ],
    industries: [
      "Global Software & Tech Product Companies",
      "Fintech, Banking & Digital Payment Gateways",
      "Government Digital Services (NITC, DoIT)",
      "Telecommunication & Cloud Infrastructure Providers",
      "Research Institutes & AI Startups"
    ],
    labWorkshops: [
      "Microprocessor & Embedded Systems Lab",
      "High-Performance Computing & AI Cluster",
      "Computer Networking & Packet Analysis Lab",
      "Database Management & Cloud Sandbox"
    ],
    furtherStudies: [
      "M.Sc. in Computer Systems & Knowledge Engineering",
      "M.Sc. in Information & Communication Engineering",
      "M.Sc. / Ph.D. in Artificial Intelligence & Data Science",
      "M.Sc. in Cybersecurity & Cryptography"
    ],
    overlap: {
      "Electronics, Communication and Information Engineering": "45%",
      "Electrical Engineering": "25%",
      "Industrial Engineering": "35%",
      "Geomatics Engineering": "35%"
    }
  },
  "Civil Engineering": {
    degree: "B.E. (Bachelor of Civil Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["Structural Engineering", "Hydropower & Water Resources", "Geotechnical & Soil Mechanics", "Transportation & Highways", "Surveying"],
    description: "Encompasses the planning, analysis, design, construction, and maintenance of public infrastructure. Spans structural engineering, hydropower projects, geotechnical exploration, bridge design, road networks, tunneling, and environmental water resource systems.",
    coreSubjects: [
      "Surveying I & II (including 15-Day Survey Camp)",
      "Strength of Materials & Mechanics of Solids",
      "Fluid Mechanics & Hydraulics",
      "Structural Analysis I & II (Indeterminate Structures)",
      "Soil Mechanics & Foundation Engineering",
      "Design of Reinforced Concrete (RCC) Structures",
      "Design of Steel & Timber Structures",
      "Transportation Engineering I & II (Highway & Pavement)",
      "Hydropower Engineering & Water Resources",
      "Estimating, Costing & Construction Project Management"
    ],
    careers: [
      "Structural Design Engineer",
      "Hydropower & Dam Project Engineer",
      "Highway & Transportation Planner",
      "Geotechnical / Tunneling Consultant",
      "Water Resource & Irrigation Engineer",
      "Government Civil Engineer (Lok Sewa / NEA / MoUD)"
    ],
    industries: [
      "Hydropower Generation Companies (NEA & Private IPPs)",
      "Department of Roads (DoR) & Infrastructure Ministries",
      "National & International Civil Consulting Firms",
      "Tunnel & Bridge Construction Contractors",
      "Disaster Risk Mitigation & Urban Municipalities"
    ],
    labWorkshops: [
      "Heavy Structures & Concrete Testing Lab",
      "Soil Mechanics & Triaxial Shear Lab",
      "Hydraulics & Fluid Mechanics Flume Lab",
      "Transportation & Bitumen Materials Lab",
      "15-Day On-Field Practical Survey Camp"
    ],
    furtherStudies: [
      "M.Sc. in Structural Engineering",
      "M.Sc. in Water Resources Engineering / Hydropower",
      "M.Sc. in Geotechnical Engineering / Tunnel Engineering",
      "M.Sc. in Transportation Engineering"
    ],
    overlap: {
      "Architecture": "35%",
      "Geomatics Engineering": "40%",
      "Agricultural Engineering": "30%",
      "Mechanical Engineering": "20%"
    }
  },
  "Electronics, Communication and Information Engineering": {
    degree: "B.E. (Bachelor of Electronics, Communication & Information Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["Telecommunications", "Signal Processing", "VLSI & Chip Design", "Embedded Systems & IoT", "RF & Microwave", "Wireless Networks"],
    description: "Blends electronic hardware design with communication systems and information engineering. Focuses on semiconductor devices, wireless networks (4G/5G), optical communications, embedded systems, microcontrollers, digital signal processing, and antenna systems.",
    coreSubjects: [
      "Electronic Devices & Circuits (EDC I & II)",
      "Signals & Systems & Digital Signal Processing (DSP)",
      "Electromagnetic Fields & Wave Propagation",
      "Microprocessors, Microcontrollers & Interfacing",
      "Analog & Digital Communication Systems",
      "RF, Microwave & Antenna Engineering",
      "VLSI Design & Hardware Description Languages (VHDL/Verilog)",
      "Computer Networks & Telecommunication Switching",
      "Embedded Systems & Internet of Things (IoT)",
      "Wireless & Mobile Communications (Cellular & Satellite)"
    ],
    careers: [
      "Telecommunication Engineer (NTC, Ncell, ISPs)",
      "Embedded Systems & Firmware Developer",
      "VLSI / FPGA Hardware Design Engineer",
      "Network Infrastructure & Wireless Systems Architect",
      "RF & Satellite Communications Engineer",
      "IoT Systems Specialist & Robotics Engineer"
    ],
    industries: [
      "Telecom Operators & Internet Service Providers",
      "Hardware R&D and Chip Design Laboratories",
      "Aerospace & Defense Electronics (Civil Aviation)",
      "Smart Grid & Industrial Automation Firms",
      "Broadcasting Stations & Satellite Transponders"
    ],
    labWorkshops: [
      "Electronics Circuit Prototyping & Oscilloscope Lab",
      "Communication Systems & Spectrum Analyzer Lab",
      "Microwave & Antenna Radiation Pattern Lab",
      "VLSI Design, FPGA Synthesis & Embedded IoT Lab"
    ],
    furtherStudies: [
      "M.Sc. in Information & Communication Engineering",
      "M.Sc. in Telecommunication Engineering",
      "M.Sc. in Electronics System & VLSI Design",
      "Ph.D. in Next-Generation Wireless & Signal Processing"
    ],
    overlap: {
      "Computer Engineering": "45%",
      "Electrical Engineering": "40%",
      "Aerospace Engineering": "30%",
      "Mechanical Engineering": "20%"
    }
  },
  "Electrical Engineering": {
    degree: "B.E. (Bachelor of Electrical Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["Power Systems", "Grid Transmission", "Hydroelectric Generation", "High Voltage", "Power Electronics", "Renewable Energy"],
    description: "Centers on electrical power generation, high-voltage transmission, smart grid distribution, hydroelectric turbines, generators, power electronic drives, switchgear protection, and renewable solar/wind integration. Crucial for Nepal's massive hydropower sector.",
    coreSubjects: [
      "Electric Circuit Theory & Network Analysis",
      "Electrical Machines I & II (Transformers, Induction & Synchronous)",
      "Instrumentation I & II & Transducers",
      "Power System Analysis I & II (Fault & Stability)",
      "Control Systems Engineering",
      "Power Electronics & Industrial Motor Drives",
      "Switchgear & Protective Relaying",
      "High Voltage Engineering & Testing",
      "Transmission & Distribution Line Design",
      "Power Plant Engineering & Hydroelectric Auxiliary Systems"
    ],
    careers: [
      "Power Grid & Substation Engineer (NEA)",
      "Hydropower Electrical Plant Engineer",
      "Renewable Energy & Solar Project Developer",
      "Industrial Automation & SCADA Engineer",
      "Transmission Line & Protection Specialist",
      "Electrical Safety & Energy Auditor"
    ],
    industries: [
      "Nepal Electricity Authority (NEA) & Generation Plants",
      "Hydropower Independent Power Producers (IPPs)",
      "Substation & High-Voltage Transmission Contractors",
      "Heavy Manufacturing & Cement Processing Plants",
      "Solar & Alternative Energy Engineering Companies"
    ],
    labWorkshops: [
      "Electrical Machines & Dynamo Testing Lab",
      "High Voltage & Dielectric Breakdown Lab",
      "Power System Simulation & SCADA Workstation",
      "Power Electronics & Variable Frequency Drive Lab"
    ],
    furtherStudies: [
      "M.Sc. in Power System Engineering",
      "M.Sc. in Renewable Energy Engineering",
      "M.Sc. in Control & Automation Engineering",
      "Ph.D. in Smart Grids & Energy Economics"
    ],
    overlap: {
      "Electronics, Communication and Information Engineering": "40%",
      "Mechanical Engineering": "30%",
      "Computer Engineering": "25%",
      "Automobile Engineering": "25%"
    }
  },
  "Mechanical Engineering": {
    degree: "B.E. (Bachelor of Mechanical Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["Thermodynamics", "Hydraulic Turbines", "Manufacturing & CAD/CAM", "Machine Design", "HVAC", "Fluid Mechanics"],
    description: "Spans mechanics, thermodynamics, fluid machinery (hydraulic turbines for hydropower), heat transfer, machine design, heating/cooling (HVAC), materials science, and advanced CAD/CAM automation. Powers Nepal's hydropower mechanical sector, manufacturing, and industrial plants.",
    coreSubjects: [
      "Engineering Thermodynamics I & II",
      "Fluid Mechanics & Fluid Machinery (Pelton, Francis, Kaplan Turbines)",
      "Mechanics of Materials & Stress Analysis",
      "Theory of Mechanisms & Kinematics of Machines",
      "Manufacturing Processes & Workshop Technology",
      "Heat Transfer & Thermal System Design",
      "Design of Machine Elements & Mechanical Components",
      "Internal Combustion (IC) Engines",
      "Refrigeration & Air Conditioning (HVAC)",
      "CAD/CAM, CNC Machining & Industrial Robotics"
    ],
    careers: [
      "Hydropower Turbine & Mechanical Plant Engineer",
      "HVAC & Building Mechanical Systems Engineer",
      "Manufacturing & Industrial Plant Supervisor",
      "Machine Design & Finite Element Analysis (FEA) Specialist",
      "Energy Auditor & Thermal Power Specialist",
      "Automotive & Heavy Equipment Engineer"
    ],
    industries: [
      "Hydropower Projects (Hydro Turbine Manufacturing & Erection)",
      "Cement, Steel, Beverage & Food Manufacturing Plants",
      "HVAC & Cleanroom Construction Firms",
      "Aviation & Heavy Earthmoving Equipment Companies",
      "Automotive Assembly & Tooling Workshops"
    ],
    labWorkshops: [
      "Hydraulic Turbines & Hydro-Machinery Testing Lab",
      "Thermal Engineering & Heat Engine Test Beds",
      "Machine Shop, Lathe, Milling & CNC Machining Lab",
      "Metrology, Material Testing & Metallurgical Lab"
    ],
    furtherStudies: [
      "M.Sc. in Renewable Energy Engineering",
      "M.Sc. in Mechanical Systems Design & Engineering",
      "M.Sc. in Technology & Innovation Management",
      "Ph.D. in Turbine Fluid Dynamics & Aerodynamics"
    ],
    overlap: {
      "Automobile Engineering": "65%",
      "Aerospace Engineering": "55%",
      "Industrial Engineering": "50%",
      "Electrical Engineering": "30%",
      "Civil Engineering": "20%"
    }
  },
  "Architecture": {
    degree: "B.Arch. (Bachelor of Architecture)",
    duration: "5 Years (10 Semesters)",
    tags: ["Architectural Design Studio", "Urban Planning", "Building Science", "Historic Preservation", "Interior Architecture", "Sustainable Design"],
    description: "A comprehensive 5-year professional program bridging art, aesthetics, spatial design, structural principles, urban settlement planning, climatology, and sustainable building technologies. Regulated under Nepal Engineering Council (NEC) guidelines for registered professional architects.",
    coreSubjects: [
      "Architectural Design Studio I through IX",
      "History of Architecture I & II (Eastern, Western & Traditional Nepalese)",
      "Building Construction Materials & Techniques I to IV",
      "Building Science (Acoustics, Daylighting, Thermal Comfort & Climatology)",
      "Structural Systems for Architects (RCC, Steel & Masonry)",
      "Working Drawings & Building Bye-Laws",
      "Urban Design & Settlement Planning",
      "Landscape Architecture & Site Planning",
      "Professional Practice, Ethics & Building Contracts",
      "Terminal Architectural Thesis Project (Semester 10)"
    ],
    careers: [
      "Licensed / Registered Architect (NEC Certified)",
      "Urban & Town Planning Consultant",
      "Interior & Spatial Designer",
      "Conservation & Heritage Restoration Specialist",
      "Landscape Architect & Environmental Designer",
      "Real Estate Development & Construction Project Manager"
    ],
    industries: [
      "Architectural Design & Planning Studios",
      "Urban Municipalities & Town Planning Authorities (KVDA, MoUD)",
      "Real Estate Developers & Housing Corporations",
      "Heritage Conservation Trusts & UNESCO Projects",
      "Commercial Interior & Exhibition Design Firms"
    ],
    labWorkshops: [
      "Architectural Drafting Studios & Model Making Workshop",
      "Climatology, Lighting & Acoustic Simulation Lab",
      "Building Materials & Traditional Joinery Workshop",
      "Digital Visualization & 3D CAD/BIM Computing Studio"
    ],
    furtherStudies: [
      "M.Sc. in Urban Planning",
      "M.Sc. in Energy for Sustainable Buildings",
      "M.Sc. in Disaster Risk Management",
      "Ph.D. in Architecture, Urban Morphology & Sustainable Cities"
    ],
    overlap: {
      "Civil Engineering": "35%",
      "Geomatics Engineering": "20%",
      "Industrial Engineering": "15%"
    }
  },
  "Aerospace Engineering": {
    degree: "B.E. (Bachelor of Aerospace Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["Aerodynamics", "Flight Propulsion", "Avionics Systems", "Flight Mechanics", "UAV & Drones", "Aircraft Structures"],
    description: "Deals with the design, fluid aerodynamics, propulsion systems, flight mechanics, structural dynamics, navigation electronics, and maintenance protocols of aircraft, unmanned aerial vehicles (UAVs), and aerospace vehicles.",
    coreSubjects: [
      "Incompressible & Compressible Aerodynamics",
      "Aircraft Propulsion & Gas Turbine Engines",
      "Flight Mechanics & Aircraft Performance",
      "Aircraft Structural Analysis & Composite Materials",
      "Avionics, Flight Instruments & Radar Systems",
      "Flight Dynamics & Automatic Control Systems",
      "Space Mechanics & Orbital Dynamics",
      "Computational Fluid Dynamics (CFD)",
      "Aircraft Maintenance Engineering (DGCA / CAAN Norms)",
      "Unmanned Aerial Systems (UAS / Drones) Design"
    ],
    careers: [
      "Aeronautical Maintenance Engineer (CAAN Certified)",
      "Aerodynamic Design & CFD Analyst",
      "Avionics Systems Engineer",
      "Drone / UAV Systems Developer",
      "Flight Operations & Airworthiness Inspector",
      "Aero-Structural Test Engineer"
    ],
    industries: [
      "Civil Aviation Authority of Nepal (CAAN) & Commercial Airlines",
      "Aircraft Maintenance & Repair Organizations (MRO)",
      "Drone Manufacturing, Survey & Geospatial Startups",
      "International Aerospace & Defense Contractors",
      "Renewable Wind Turbine Aerodynamics Firms"
    ],
    labWorkshops: [
      "Subsonic Wind Tunnel Aerodynamics Lab",
      "Avionics & Flight Navigation Simulation Lab",
      "Aerospace Composite Materials & Structures Lab",
      "Aircraft Engine & Propulsion Test Bench"
    ],
    furtherStudies: [
      "M.Sc. in Aerospace / Aeronautical Engineering",
      "M.Sc. in Computational Fluid Dynamics & Thermal Engineering",
      "M.Sc. in Robotics & Autonomous Systems",
      "Ph.D. in Hypersonic Flight & Space Systems"
    ],
    overlap: {
      "Mechanical Engineering": "55%",
      "Electronics, Communication and Information Engineering": "30%",
      "Automobile Engineering": "30%"
    }
  },
  "Chemical Engineering": {
    degree: "B.E. (Bachelor of Chemical Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["Process Chemistry", "Thermodynamics", "Mass Transfer", "Reaction Engineering", "Polymer & Cement", "Bioprocess"],
    description: "Applies chemical, biochemical, and physical principles to transform raw materials into valuable industrial products safely, sustainably, and cost-effectively. Encompasses reactor design, separation processes, distillation, petroleum refining, cement chemistry, and pharmaceuticals.",
    coreSubjects: [
      "Chemical Process Calculations (Stoichiometry)",
      "Fluid Flow Operations in Chemical Processing",
      "Heat Transfer Operations & Heat Exchanger Design",
      "Mass Transfer Operations I & II (Distillation, Absorption, Extraction)",
      "Chemical Engineering Thermodynamics",
      "Chemical Reaction Engineering (Reactor Kinetics & Catalysis)",
      "Transport Phenomena (Momentum, Heat & Mass)",
      "Process Dynamics & Industrial Process Control",
      "Plant Design, Process Safety & Economics",
      "Polymer Science, Cement Chemistry & Bio-processing"
    ],
    careers: [
      "Chemical Process Engineer",
      "Cement & Heavy Materials Quality Specialist",
      "Pharmaceutical Production Manager",
      "Environmental Safety & Waste Treatment Officer",
      "Petroleum & Chemical Plant Operations Lead",
      "Quality Assurance & R&D Chemist"
    ],
    industries: [
      "Cement Manufacturing & Construction Materials",
      "Pharmaceutical & Healthcare Product Laboratories",
      "Food, Dairy, Brewing & Distillation Plants",
      "Pulp, Paper, Polymers & Plastic Manufacturing",
      "Water Treatment & Environmental Protection Agencies"
    ],
    labWorkshops: [
      "Unit Operations & Distillation Column Lab",
      "Chemical Reaction Kinetics & Catalyst Lab",
      "Heat & Mass Transfer Pilot Equipment Lab",
      "Process Simulation & Aspen Plus / ChemCAD Suite"
    ],
    furtherStudies: [
      "M.Sc. in Chemical Process Engineering",
      "M.Sc. in Environmental & Biochemical Engineering",
      "M.Sc. in Materials Science & Nanotechnology",
      "Ph.D. in Green Catalysis & Industrial Sustainable Processes"
    ],
    overlap: {
      "Mechanical Engineering": "25%",
      "Civil Engineering": "15%",
      "Industrial Engineering": "20%"
    }
  },
  "Automobile Engineering": {
    degree: "B.E. (Bachelor of Automobile Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["Electric Vehicles (EV)", "Powertrain Design", "Vehicle Dynamics", "Internal Combustion", "Automotive Electronics", "Chassis Design"],
    description: "Focuses on automotive propulsion, vehicle chassis design, braking systems, suspension dynamics, powertrain engineering, internal combustion engines, battery technology, EV conversion, motor controllers, and automotive safety electronics.",
    coreSubjects: [
      "Automotive Engines (Spark & Compression Ignition)",
      "Automotive Chassis, Suspension & Steering Systems",
      "Vehicle Dynamics & Handling Analysis",
      "Automotive Transmission & Driveline Engineering",
      "Automotive Electrical & Electronic Systems",
      "Electric & Hybrid Electric Vehicles (EV/HEV)",
      "Automotive Safety, Crashworthiness & Ergonomics",
      "Emission Control Technologies & Environmental Standards",
      "Vehicle Maintenance, Diagnostics & Fleet Management",
      "CAD/CAM in Automotive Component Design"
    ],
    careers: [
      "Automotive Design & Development Engineer",
      "Electric Vehicle (EV) Powertrain Specialist",
      "Automobile Workshop & Dealership Technical Director",
      "Vehicle Homologation & Certification Inspector",
      "Automotive Fleet Operations & Maintenance Manager",
      "Motorsport & Performance Vehicle Specialist"
    ],
    industries: [
      "Automotive OEMs & EV Assembly Plants in Nepal",
      "Automobile Importers, Distributors & Authorized Service Centers",
      "Battery Storage & EV Charging Infrastructure Providers",
      "Public Transport Corporations & Heavy Equipment Fleets",
      "Vehicle Inspection & Transport Management Authority (DoTM)"
    ],
    labWorkshops: [
      "Automotive Engine Test Bed & Dyno Lab",
      "Chassis, Braking & Alignment Workshop",
      "EV Battery Testing, BMS & Electric Motor Lab",
      "Automotive Computerized OBD-II Diagnostics Station"
    ],
    furtherStudies: [
      "M.Sc. in Automotive / Vehicle Engineering",
      "M.Sc. in E-Mobility & Battery Systems",
      "M.Sc. in Mechanical Systems Engineering",
      "Ph.D. in Advanced Powertrains & Autonomous Driving"
    ],
    overlap: {
      "Mechanical Engineering": "65%",
      "Electrical Engineering": "25%",
      "Aerospace Engineering": "30%",
      "Industrial Engineering": "30%"
    }
  },
  "Industrial Engineering": {
    degree: "B.E. (Bachelor of Industrial Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["Operations Research", "Supply Chain Management", "Six Sigma & Quality", "Ergonomics", "Plant Layout", "Production Planning"],
    description: "Dedicated to optimizing complex production processes, manufacturing systems, human-machine workflows, factory layouts, supply chain logistics, and quality assurance. Combines engineering rigor with management science.",
    coreSubjects: [
      "Work Study, Method Engineering & Ergonomics",
      "Operations Research & Optimization Techniques",
      "Production Planning & Inventory Control (PPC)",
      "Total Quality Management (TQM) & Six Sigma",
      "Facility Layout & Material Handling Systems",
      "Supply Chain & Logistics Management",
      "Manufacturing Systems & Industrial Automation",
      "Human Factors Engineering & Safety",
      "Reliability, Maintainability & Plant Engineering",
      "Engineering Economics & Cost Accounting"
    ],
    careers: [
      "Industrial / Operations Manager",
      "Supply Chain & Logistics Director",
      "Quality Assurance & Six Sigma Black Belt Specialist",
      "Process Optimization & Lean Consultant",
      "Manufacturing Plant Workflow Engineer",
      "Inventory & Production Planning Controller"
    ],
    industries: [
      "FMCG, Food & Beverage Production Factories",
      "Apparel, Textile & Manufacturing Conglomerates",
      "E-Commerce Fulfillment Centers & Logistics Hubs",
      "Healthcare Systems & Hospital Operations Management",
      "Management Consulting & ISO Certification Firms"
    ],
    labWorkshops: [
      "Ergonomics & Work Measurement Laboratory",
      "Operations Research Simulation & Arena Workstation",
      "Quality Control & Metrology Equipment Lab",
      "Flexible Manufacturing & Automation Demo Line"
    ],
    furtherStudies: [
      "M.Sc. in Industrial & Systems Engineering",
      "M.Sc. in Supply Chain & Logistics Engineering",
      "M.Sc. in Engineering Management",
      "Ph.D. in Operations Research & Stochastic Systems"
    ],
    overlap: {
      "Mechanical Engineering": "50%",
      "Computer Engineering": "35%",
      "Automobile Engineering": "30%",
      "Civil Engineering": "15%"
    }
  },
  "Geomatics Engineering": {
    degree: "B.E. (Bachelor of Geomatics Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["GIS & Remote Sensing", "Geodesy & GNSS", "Photogrammetry", "Cadastral Survey", "Digital Cartography", "Spatial Big Data"],
    description: "Integrates geospatial measurement, satellite positioning (GPS/GNSS), satellite remote sensing, photogrammetry (drone mapping), digital cartography, and Geographic Information Systems (GIS) to model land, territory, and infrastructure.",
    coreSubjects: [
      "Fundamentals of Geomatics & Geodetic Surveying",
      "Geodesy & Satellite Positioning (GNSS/GPS)",
      "Digital Photogrammetry & UAV / Drone Mapping",
      "Remote Sensing Principles & Satellite Image Processing",
      "Geographic Information Systems (GIS) & Spatial Analysis",
      "Cadastral Surveying & Land Administration Systems",
      "Spatial Database Management & Web GIS",
      "Cartography & Map Production Systems",
      "Adjustment Computations & Error Analysis",
      "Hydrographic Surveying & Laser Scanning (LiDAR)"
    ],
    careers: [
      "Geomatics / GIS Specialist",
      "Survey Officer (Nepal Government Survey Department)",
      "Remote Sensing & Satellite Imagery Analyst",
      "Drone Survey & LiDAR Mapping Engineer",
      "Cadastral / Land Administration Consultant",
      "Spatial Data Scientist / Web GIS Developer"
    ],
    industries: [
      "Ministry of Land Management, Cooperatives and Poverty Alleviation",
      "Department of Survey, Forest & Disaster Risk Authorities",
      "Infrastructure Mega-Projects (Highways, Hydropower, Railways)",
      "Commercial GIS & Satellite Earth Observation Firms",
      "Urban Municipalities & Smart City Mapping Wings"
    ],
    labWorkshops: [
      "High-Precision GNSS, Total Station & Theodolite Grounds",
      "Photogrammetry, LiDAR & Drone Image Processing Lab",
      "ArcGIS, QGIS & Spatial Big Data Computing Center",
      "Digital Cartography & Precision Map Plotting Facility"
    ],
    furtherStudies: [
      "M.Sc. in Geospatial Engineering",
      "M.Sc. in Remote Sensing & Geographic Information Science",
      "M.Sc. in Land Administration & Geoinformatics",
      "Ph.D. in Earth Observation & Spatial Big Data"
    ],
    overlap: {
      "Civil Engineering": "40%",
      "Computer Engineering": "35%",
      "Architecture": "20%",
      "Agricultural Engineering": "25%"
    }
  },
  "Agricultural Engineering": {
    degree: "B.E. (Bachelor of Agricultural Engineering)",
    duration: "4 Years (8 Semesters)",
    tags: ["Farm Machinery", "Irrigation & Drainage", "Post-Harvest Processing", "Agri-Tech & Smart Farming", "Soil Conservation", "Food Engineering"],
    description: "Applies mechanical, civil, chemical, and biological engineering principles to agricultural production, mechanization, irrigation canal design, soil conservation, post-harvest crop preservation, food processing, and climate-smart farm structures.",
    coreSubjects: [
      "Farm Power, Tractor Systems & Prime Movers",
      "Soil & Water Conservation Engineering",
      "Irrigation Engineering & Drainage Systems Design",
      "Farm Machinery & Tillage Implements",
      "Post-Harvest Technology & Storage Structures",
      "Dairy & Food Engineering Operations",
      "Design of Farm Structures & Greenhouses",
      "Renewable Energy in Agriculture (Biogas & Solar Pumps)",
      "Hydrology & Watershed Management",
      "Precision Agriculture & Agri-IoT Automation"
    ],
    careers: [
      "Agricultural Engineer (Ministry of Agriculture / NARC)",
      "Irrigation & Water Resource Project Engineer",
      "Farm Equipment & Tractor Design Specialist",
      "Post-Harvest & Food Processing Plant Manager",
      "Watershed & Soil Conservation Consultant",
      "Agri-Tech Startup Founder / Automation Lead"
    ],
    industries: [
      "Ministry of Agriculture and Livestock Development",
      "Nepal Agricultural Research Council (NARC)",
      "Commercial Agro-Industrial & Food Processing Enterprises",
      "Irrigation Canal Networks & Deep Tube-well Projects",
      "Agricultural Machinery Manufacturers & Importers"
    ],
    labWorkshops: [
      "Farm Machinery, Tractor & Tillage Implements Workshop",
      "Irrigation Flume & Soil Conservation Lab",
      "Post-Harvest Grain Testing & Drying Demonstration Facility",
      "Dairy & Food Processing Pilot Plant"
    ],
    furtherStudies: [
      "M.Sc. in Land & Water Engineering",
      "M.Sc. in Post-Harvest & Food Engineering",
      "M.Sc. in Renewable Energy in Agriculture",
      "Ph.D. in Smart Agriculture & Precision Biosystems"
    ],
    overlap: {
      "Civil Engineering": "30%",
      "Mechanical Engineering": "35%",
      "Geomatics Engineering": "25%",
      "Industrial Engineering": "20%"
    }
  }
};

export const FINANCIALS: Record<string, FinancialPlan> = {
  Regular: { 
    type: "Regular (Government Subsidized)",
    tuition: "Rs. 63,087", 
    living: "≈ NPR 4,80,000", 
    total: "≈ NPR 5,43,087",
    notes: "Tuition per semester: Rs. 2,862 | All charges per semester: Rs. 6,974 | One-time charges: Rs. 7,295 | Refundable deposits: Rs. 3,400 | First admission payment: Rs. 17,669 (including deposits).",
    totalFootnote: "Including estimated living expenses, excluding refundable deposits.",
    semBreakdown: {
      tuitionPerSem: "Rs. 2,862",
      allChargesPerSem: "Rs. 6,974",
      oneTimeCharges: "Rs. 7,295",
      refundableDeposits: "Rs. 3,400",
      firstPayment: "Rs. 17,669"
    }
  },
  FullFee: { 
    type: "Full Fee (Constituent Campus Paying)",
    tuition: "Rs. 5,45,832", 
    living: "≈ NPR 4,80,000", 
    total: "≈ NPR 10,25,832",
    notes: "Tuition per semester: Rs. 46,854 | All charges per semester: Rs. 52,766 | One-time charges: Rs. 1,23,704 | Refundable deposits: Rs. 40,000 | First admission payment: Rs. 2,16,470 (including deposits).",
    totalFootnote: "Including estimated living expenses, excluding refundable deposits.",
    semBreakdown: {
      tuitionPerSem: "Rs. 46,854",
      allChargesPerSem: "Rs. 52,766",
      oneTimeCharges: "Rs. 1,23,704",
      refundableDeposits: "Rs. 40,000",
      firstPayment: "Rs. 2,16,470"
    }
  },
  Foreign: { 
    type: "Foreign Students",
    tuition: "Rs. 14,50,761", 
    living: "≈ NPR 4,80,000", 
    total: "≈ NPR 19,30,761",
    notes: "Fee structure for foreign nationals at IOE constituent campuses. Includes semester charges and one-time fees, with refundable deposits listed separately. Tuition per semester: Rs. 1,34,754 | All charges per semester: Rs. 1,47,166 | One-time charges: Rs. 2,73,433 | Refundable deposits: Rs. 1,15,000 | First admission payment: Rs. 5,35,599 (including deposits).",
    totalFootnote: "Including estimated living expenses, excluding refundable deposits.",
    semBreakdown: {
      tuitionPerSem: "Rs. 1,34,754",
      allChargesPerSem: "Rs. 1,47,166",
      oneTimeCharges: "Rs. 2,73,433",
      refundableDeposits: "Rs. 1,15,000",
      firstPayment: "Rs. 5,35,599"
    }
  },
  Affiliated: { 
    type: "Affiliated Private Colleges",
    tuition: "≈ NPR 10,00,000–16,00,000", 
    tuitionSubtext: "provisional estimate; verify with the specific college",
    living: "≈ NPR 4,80,000", 
    total: "≈ NPR 14,80,000–20,80,000",
    notes: "Private engineering institutions affiliated with Tribhuvan University or other universities have institution-specific fee structures. Total costs vary by college, engineering program, scholarships, and applicable admission-year rules.",
    totalFootnote: "Indicative estimate only; not an official uniform fee range."
  }
};

export const OFFICIAL_PORTALS: OfficialPortal[] = [
  { name: "IOE Central Admission Portal (2083)", url: "https://admission.ioe.edu.np/be/2083/public/guideline", type: "Official Central Admission Portal", authority: "Central Admission Committee" },
  { name: "IOE Official Downloads (Booklet & Syllabus)", url: "https://ioe.tu.edu.np/downloads", type: "Official Downloads Repository", authority: "Tribhuvan University" },
  { name: "IOE Entrance Examination Portal", url: "https://entrance.ioe.edu.np/", type: "Application & Results Portal", authority: "IOE Entrance Board" },
  { name: "IOE Central Official Portal", url: "https://ioe.tu.edu.np/", type: "Official University Site", authority: "Tribhuvan University" },
  { name: "IOE Official Notices Board", url: "https://ioe.tu.edu.np/notices", type: "Circulars & Notices", authority: "Dean's Office" },
  { name: "Pulchowk Campus Admission Portal", url: "https://admission.pcampus.edu.np/be/2083", type: "Constituent Campus Portal", authority: "Lalitpur" },
  { name: "Thapathali Campus Admission Portal", url: "https://admission.tcioe.edu.np", type: "Constituent Campus Portal", authority: "Kathmandu" },
  { name: "Pashchimanchal Campus (WRC) Admission Portal", url: "https://admission.ioepas.edu.np/", type: "Constituent Campus Portal", authority: "Pokhara" },
  { name: "Purwanchal Campus (ERC) Admission Portal", url: "http://ioepc.edu.np/", type: "Constituent Campus Portal", authority: "Dharan" },
  { name: "Chitwan Engineering Campus Admission Portal", url: "https://admission.ioecc.edu.np/", type: "Constituent Campus Portal", authority: "Chitwan" }
];

