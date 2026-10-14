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
  academicYear: "2082 BS",
  governingBody: "Institute of Engineering (IOE), Tribhuvan University",
  examFormat: "Computer Based Test (CBT)",
  totalMarks: 140,
  durationHours: 2,
  passPercentage: 40, // 56 marks
  negativeMarking: "10% per incorrect answer (-0.1 for 1-mark, -0.2 for 2-mark)",
  totalConstituentSeats: 2040,
  sourceUrl: "https://entrance.ioe.edu.np/",
  disclaimer: "This platform is an independent educational guide for Nepalese students. Predictions and priority recommendations are statistical heuristics derived from historical data. Official admissions are solely governed by the IOE Entrance Examination Board."
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
  { name: "Kantipur Engineering College (KEC Dhapakhel)", location: "Dhapakhel, Lalitpur", programs: "Civil, Computer, Electrical", fee: "NPR 11,00,000 - 13,00,000", cutoff: "Rank ~4,400", website: "https://kec.edu.np" },
  { name: "National College of Engineering (NCE)", location: "Talchhikhel, Lalitpur", programs: "Civil, Computer, Electrical, Electronics", fee: "NPR 10,00,000 - 12,00,000", cutoff: "Rank ~5,200", website: "https://nce.edu.np" },
  { name: "Thapathali/Kathford International College", location: "Balkumari, Lalitpur", programs: "Civil, Computer, Electronics", fee: "NPR 10,50,000 - 12,50,000", cutoff: "Rank ~5,000", website: "https://kathford.edu.np" },
  { name: "Janakpur Engineering College (JEC)", location: "Tathali, Bhaktapur", programs: "Civil, Computer, Electronics", fee: "NPR 9,50,000 - 11,50,000", cutoff: "Rank ~5,500", website: "https://jec.edu.np" },
  { name: "Sagarmatha Engineering College", location: "Sanpa, Lalitpur", programs: "Civil, Computer, Electronics", fee: "NPR 11,00,000 - 12,80,000", cutoff: "Rank ~4,700", website: "https://sagarmatha.edu.np" },
  { name: "Lalitpur Engineering College", location: "Chakupat, Lalitpur", programs: "Civil, Computer", fee: "NPR 9,80,000 - 11,50,000", cutoff: "Rank ~5,300", website: "https://lec.edu.np" },
  { name: "Khwopa College of Engineering", location: "Libali, Bhaktapur", programs: "Civil, Computer, Electrical", fee: "NPR 8,50,000 - 10,50,000", cutoff: "Rank ~3,800", website: "https://khwopa.edu.np" }
];

export const FACULTY_DATA: Record<string, FacultyInfo> = {
  "Computer Engineering": {
    tags: ["Software Engineering", "Algorithms", "AI & ML", "Systems Architecture"],
    description: "Focuses on software design, computer systems architecture, embedded computing, algorithms, database engineering, and artificial intelligence.",
    careers: ["Software Engineer", "Systems Architect", "Machine Learning Engineer", "DevOps Specialist", "Cybersecurity Analyst"],
    overlap: {
      "Electronics, Communication and Information Engineering": "45%",
      "Electrical Engineering": "25%"
    }
  },
  "Civil Engineering": {
    tags: ["Structures", "Hydropower & Water Resources", "Transportation", "Geotechnical"],
    description: "Covers the design, construction, and maintenance of public infrastructure including highways, bridges, dams, irrigation tunnels, and high-rise structural foundations.",
    careers: ["Structural Engineer", "Hydropower Project Engineer", "Transportation Planner", "Geotechnical Consultant"],
    overlap: {
      "Mechanical Engineering": "20%",
      "Architecture": "35%"
    }
  },
  "Electronics, Communication and Information Engineering": {
    tags: ["Telecommunication", "Signal Processing", "VLSI Design", "Embedded Systems"],
    description: "Encompasses hardware-software integration, communications systems, microwave engineering, microprocessors, digital signal processing, and IoT systems.",
    careers: ["Telecom Engineer (NTC/Ncell)", "Embedded Systems Developer", "Network Architect", "Hardware Design Engineer"],
    overlap: {
      "Computer Engineering": "45%",
      "Electrical Engineering": "40%"
    }
  },
  "Electrical Engineering": {
    tags: ["Power Systems", "Grid Transmission", "Renewable Energy", "High Voltage"],
    description: "Specializes in electrical generation, substation management, transmission networks, motor drives, power electronics, and power market operations.",
    careers: ["Power Grid Engineer (NEA)", "Substation Engineer", "Renewable Energy Specialist", "Industrial Automation Engineer"],
    overlap: {
      "Electronics, Communication and Information Engineering": "40%",
      "Mechanical Engineering": "30%"
    }
  },
  "Mechanical Engineering": {
    tags: ["Thermodynamics", "Hydraulic Turbines", "Manufacturing", "Automotive"],
    description: "Encompasses mechanics, thermodynamics, fluid dynamics, turbine engineering, heating/cooling systems, CAD/CAM manufacturing, and machine design.",
    careers: ["Turbine Engineer (Hydropower)", "HVAC Project Engineer", "Manufacturing Supervisor", "Energy Auditor"],
    overlap: {
      "Automobile Engineering": "65%",
      "Industrial Engineering": "50%"
    }
  },
  "Aerospace Engineering": {
    tags: ["Aerodynamics", "Propulsion Systems", "Avionics", "Flight Dynamics"],
    description: "Deals with the design, flight mechanics, structural dynamics, navigation electronics, and maintenance protocols of aircraft and aeronautical equipment.",
    careers: ["Aeronautical Maintenance Engineer (CAAN)", "Avionics Specialist", "Drone/UAV Developer", "Aerodynamic Analyst"],
    overlap: {
      "Mechanical Engineering": "55%",
      "Electronics, Communication and Information Engineering": "30%"
    }
  },
  "Chemical Engineering": {
    tags: ["Process Chemistry", "Thermodynamics", "Materials Synthesis", "Biochemical"],
    description: "Applies chemical, biochemical, and physical principles to transform raw materials into valuable industrial products safely and sustainably.",
    careers: ["Process Engineer", "Polymer & Cement Specialist", "Environmental Safety Officer", "Quality Assurance Lead"],
    overlap: {
      "Mechanical Engineering": "25%",
      "Civil Engineering": "15%"
    }
  },
  "Automobile Engineering": {
    tags: ["Internal Combustion", "Electric Vehicles (EV)", "Chassis Design", "Diagnostics"],
    description: "Focuses on vehicle propulsion, powertrain design, braking systems, battery technology, EV conversion, and vehicle safety electronics.",
    careers: ["Automotive Design Engineer", "EV Fleet Operations Manager", "Vehicle Certification Inspector", "Workshop Director"],
    overlap: {
      "Mechanical Engineering": "65%",
      "Electrical Engineering": "25%"
    }
  },
  "Industrial Engineering": {
    tags: ["Operations Research", "Supply Chain", "Quality Control", "Ergonomics"],
    description: "Optimizes complex processes, factory workflows, manufacturing assembly lines, ergonomic environments, and industrial supply logistics.",
    careers: ["Operations Manager", "Supply Chain Analyst", "Quality Control Specialist (ISO)", "Lean Production Consultant"],
    overlap: {
      "Mechanical Engineering": "50%",
      "Computer Engineering": "35%"
    }
  },
  "Geomatics Engineering": {
    tags: ["GIS & Remote Sensing", "Cartography", "Geodesy", "Cadastral Survey"],
    description: "Integrates geospatial measurement, surveying, satellite imagery, GPS mapping, and geographical information systems.",
    careers: ["GIS Specialist", "Survey Officer (Survey Dept.)", "Geospatial Analyst", "Remote Sensing Scientist"],
    overlap: {
      "Civil Engineering": "40%",
      "Computer Engineering": "35%"
    }
  },
  "Agricultural Engineering": {
    tags: ["Farm Machinery", "Irrigation & Soil", "Post-Harvest Processing", "Agri-Tech"],
    description: "Applies engineering principles to agricultural production, machinery, post-harvest processing, and natural resource conservation.",
    careers: ["Agri-Tech Engineer", "Irrigation Officer", "Farm Equipment Designer", "Agricultural Project Consultant"],
    overlap: {
      "Civil Engineering": "30%",
      "Mechanical Engineering": "35%"
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
  { name: "IOE Central Official Portal", url: "https://www.ioe.tu.edu.np/", type: "Official University Site", authority: "Tribhuvan University" },
  { name: "IOE Entrance Examination Board", url: "https://entrance.ioe.edu.np/", type: "Application & Results Portal", authority: "IOE Entrance Board" },
  { name: "Pulchowk Campus", url: "https://pcampus.edu.np/", type: "Constituent Campus", authority: "Lalitpur" },
  { name: "Thapathali Campus", url: "https://tcioe.edu.np/", type: "Constituent Campus", authority: "Kathmandu" },
  { name: "Pashchimanchal Campus (WRC)", url: "https://wrc.edu.np/", type: "Constituent Campus", authority: "Pokhara" },
  { name: "Purwanchal Campus (ERC)", url: "https://ioeerc.edu.np/", type: "Constituent Campus", authority: "Dharan" },
  { name: "Chitwan Engineering Campus", url: "https://chec.edu.np/", type: "Constituent Campus", authority: "Chitwan" },
  { name: "IOE Official Notices Board", url: "https://www.ioe.tu.edu.np/notices", type: "Circulars & Notices", authority: "Dean's Office" }
];

