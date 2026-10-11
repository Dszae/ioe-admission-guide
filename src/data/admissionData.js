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

export const ADMISSION_METADATA = {
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

export const CAMPUS_NAMES = {
  Pulchowk: 'Pulchowk Campus',
  Thapathali: 'Thapathali Campus',
  WRC: 'Pashchimanchal Campus (WRC)',
  ERC: 'Purwanchal Campus (ERC)',
  ChEC: 'Chitwan Eng. Campus (ChEC)'
};

export const CAMPUS_DETAILS = {
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

export const CAMPUS_SEATS = {
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

export const ALL_PROGRAMS = [
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
export const CUTOFFS = {
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
    "Architecture": { Regular: { Open: 1800, Janajati: 1950, Female_FmQ: 1800, Female_RsQ: 1750 }, FullFee: { Open: 3500, Janajati: 3800, Female_FmQ: 3600, Female_RsQ: 3500 } }
  }
};

export const AFFILIATED_COLLEGES = [
  { 
    name: "Kathmandu Engineering College (KEC)", 
    location: "Kalimati, Kathmandu", 
    programs: "Civil, Computer, Electrical, Electronics, Architecture", 
    fee: "≈ 14 - 16 Lakhs", 
    cutoff: "Rank ~4000+",
    established: 1998,
    website: "https://kecktm.edu.np"
  },
  { 
    name: "Kantipur Engineering College (KEC)", 
    location: "Dhapakhel, Lalitpur", 
    programs: "Civil, Computer, Electronics", 
    fee: "≈ 13 - 15 Lakhs", 
    cutoff: "Rank ~4500+",
    established: 1998,
    website: "https://kec.edu.np"
  },
  { 
    name: "Advanced College of Engineering & Management", 
    location: "Kupondole, Lalitpur", 
    programs: "Civil, Computer, Electrical, Electronics", 
    fee: "≈ 14 - 15 Lakhs", 
    cutoff: "Rank ~4000+",
    established: 2001,
    website: "https://acem.edu.np"
  },
  { 
    name: "Himalaya College of Engineering", 
    location: "Chyasal, Lalitpur", 
    programs: "Civil, Computer, Architecture, Electronics", 
    fee: "≈ 12 - 14 Lakhs", 
    cutoff: "Rank ~5000+",
    established: 2000,
    website: "https://hcoe.edu.np"
  },
  { 
    name: "Kathford International College of Eng. & Mgmt.", 
    location: "Balkumari, Lalitpur", 
    programs: "Civil, Computer, Electronics", 
    fee: "≈ 12 - 14 Lakhs", 
    cutoff: "Rank ~5500+",
    established: 2003,
    website: "https://kathford.edu.np"
  },
  { 
    name: "National College of Engineering", 
    location: "Talchikhel, Lalitpur", 
    programs: "Civil, Computer, Electrical, Electronics", 
    fee: "≈ 12 - 14 Lakhs", 
    cutoff: "Rank ~6000+",
    established: 2001,
    website: "https://nce.edu.np"
  },
  {
    name: "Janakpur Engineering College",
    location: "Kupondole, Lalitpur",
    programs: "Civil, Computer, Electronics",
    fee: "≈ 11 - 13 Lakhs",
    cutoff: "Rank ~6500+",
    established: 2001,
    website: "https://jec.edu.np"
  },
  {
    name: "Sagarmatha Engineering College",
    location: "Sanepa, Lalitpur",
    programs: "Civil, Computer, Electronics",
    fee: "≈ 12 - 14 Lakhs",
    cutoff: "Rank ~5500+",
    established: 2010,
    website: "https://sagarmatha.edu.np"
  }
];

export const FACULTY_DATA = {
  "Computer Engineering": { 
    tags: ["Software Engineering", "Algorithms", "AI & Data", "IT Sector"], 
    description: "Focuses on design of computational hardware and software systems, cloud infrastructure, algorithm design, and applied intelligence.",
    careers: ["Software Engineer", "Systems Architect", "Data Scientist", "DevOps Engineer", "Tech Entrepreneur"],
    overlap: { 
      "Electronics, Communication and Information Engineering": "70%", 
      "Electrical Engineering": "40%",
      "Civil Engineering": "15%",
      "Mechanical Engineering": "20%",
      "Architecture": "10%"
    } 
  },
  "Electronics, Communication and Information Engineering": { 
    tags: ["Hardware & Embedded", "Telecom Networks", "VLSI Design", "Signal Processing"], 
    description: "Combines fundamental hardware engineering with network protocols, telecommunications, embedded devices, and computer networks.",
    careers: ["Network Engineer", "Embedded Systems Developer", "Telecom Specialist", "IoT Hardware Designer"],
    overlap: { 
      "Computer Engineering": "70%", 
      "Electrical Engineering": "60%",
      "Mechanical Engineering": "25%",
      "Civil Engineering": "10%",
      "Architecture": "10%"
    } 
  },
  "Electrical Engineering": { 
    tags: ["Power Grid Systems", "Renewable Energy", "Heavy Machinery", "NEA & Hydropower"], 
    description: "Core discipline concentrating on generation, transmission, and distribution of electrical power, renewable systems, and industrial electrical machinery.",
    careers: ["Power Grid Engineer", "Hydropower Plant Manager", "Substation Engineer", "Electrical Systems Designer"],
    overlap: { 
      "Electronics, Communication and Information Engineering": "60%", 
      "Mechanical Engineering": "30%",
      "Computer Engineering": "40%",
      "Civil Engineering": "20%",
      "Architecture": "10%"
    } 
  },
  "Civil Engineering": { 
    tags: ["Structural Analysis", "Hydropower Design", "Transportation", "Gov & Construction"], 
    description: "The foundational infrastructure discipline covering building structures, roads, bridges, irrigation, hydraulics, and geotechnical engineering.",
    careers: ["Structural Designer", "Site Engineer", "Government Technical Officer (Loksewa)", "Hydropower Civil Engineer"],
    overlap: { 
      "Architecture": "25%", 
      "Agricultural Engineering": "30%",
      "Geomatics Engineering": "40%",
      "Mechanical Engineering": "20%",
      "Electrical Engineering": "20%"
    } 
  },
  "Mechanical Engineering": { 
    tags: ["Thermodynamics", "Robotics", "Industrial Fabrication", "Automotive Systems"], 
    description: "Studies motion, mechanics, thermal dynamics, manufacturing systems, robotics, and energy conversion.",
    careers: ["Mechanical Designer", "Plant Operations Engineer", "HVAC Specialist", "Automotive Consultant"],
    overlap: { 
      "Automobile Engineering": "80%", 
      "Aerospace Engineering": "60%", 
      "Industrial Engineering": "70%",
      "Electrical Engineering": "30%",
      "Civil Engineering": "20%"
    } 
  },
  "Architecture": { 
    tags: ["Spatial Design", "Urban Planning", "Building Physics", "5-Year Degree"], 
    description: "A 5-year specialized Bachelor of Architecture (B.Arch) blending artistic creativity, building design, sustainability, and urban planning.",
    careers: ["Registered Architect", "Urban Planner", "Interior Architect", "Landscape Consultant"],
    overlap: { 
      "Civil Engineering": "25%",
      "Computer Engineering": "10%",
      "Mechanical Engineering": "15%"
    } 
  },
  "Aerospace Engineering": {
    tags: ["Aerodynamics", "Flight Mechanics", "Propulsion", "Aviation"],
    description: "Focuses on the science and technology of aircraft, spacecraft, propulsion systems, and flight aerodynamics.",
    careers: ["Aviation Maintenance Engineer", "Aerodynamics Analyst", "UAV/Drone Systems Engineer"],
    overlap: {
      "Mechanical Engineering": "60%",
      "Electronics, Communication and Information Engineering": "35%",
      "Computer Engineering": "30%"
    }
  },
  "Chemical Engineering": {
    tags: ["Process Engineering", "Thermodynamics", "Materials Science", "Industrial Refining"],
    description: "Applies physical and biological sciences to industrial processes that convert raw materials into chemical and pharmaceutical products.",
    careers: ["Process Engineer", "Quality Control Specialist", "Refinery Engineer", "Environmental Safety Officer"],
    overlap: {
      "Mechanical Engineering": "35%",
      "Civil Engineering": "15%"
    }
  },
  "Automobile Engineering": {
    tags: ["Vehicle Dynamics", "IC & EV Engines", "Chassis Design", "Automotive Electronics"],
    description: "Specialized branch of mechanical engineering centered on design, manufacture, and operation of ground vehicles and modern electric vehicles.",
    careers: ["Automotive Engineer", "EV Powertrain Engineer", "Fleet Maintenance Manager"],
    overlap: {
      "Mechanical Engineering": "80%",
      "Industrial Engineering": "50%",
      "Electronics, Communication and Information Engineering": "30%"
    }
  },
  "Industrial Engineering": {
    tags: ["Operations Research", "Supply Chain", "Quality Assurance", "Factory Optimization"],
    description: "Optimizes complex processes, supply chains, manufacturing workflows, and organizational productivity.",
    careers: ["Operations Manager", "Supply Chain Analyst", "Industrial Production Engineer", "Quality Assurance Lead"],
    overlap: {
      "Mechanical Engineering": "70%",
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

export const FINANCIALS = {
  Regular: { 
    type: "Regular (Government Subsidized)",
    tuition: "Rs. 63,087", 
    living: "≈ NPR 4,80,000", 
    total: "≈ NPR 5,43,087",
    notes: "Tuition per semester: Rs. 2,862 | All charges per semester: Rs. 6,974 | One-time charges: Rs. 7,295 | First admission payment: Rs. 17,669 (incl. deposits). Living cost estimated at ~NPR 10,000/month."
  },
  FullFee: { 
    type: "Full Fee (Constituent Paying)",
    tuition: "Rs. 5,45,832", 
    living: "≈ NPR 4,80,000", 
    total: "≈ NPR 10,25,832",
    notes: "Tuition per semester: Rs. 46,854 | All charges per semester: Rs. 52,766 | One-time charges: Rs. 1,23,704 | First admission payment: Rs. 2,16,470 (incl. deposits). Living cost estimated at ~NPR 10,000/month."
  },
  Foreign: { 
    type: "Foreign Students",
    tuition: "Rs. 14,50,761", 
    living: "≈ NPR 4,80,000", 
    total: "≈ NPR 19,30,761",
    notes: "Fee structure for foreign nationals at IOE constituent campuses. Includes all tuition, charges, and one-time fees. Living cost estimated at ~NPR 10,000/month."
  },
  Affiliated: { 
    type: "Affiliated Private Colleges",
    tuition: "≈ NPR 10,00,000 - 16,00,000", 
    living: "≈ NPR 4,80,000", 
    total: "≈ NPR 14,80,000 - 20,80,000",
    notes: "Private engineering institutions affiliated with TU IOE. Tuition fees are set according to institutional fee structures."
  }
};

export const OFFICIAL_PORTALS = [
  { name: "IOE Central Official Portal", url: "https://www.ioe.tu.edu.np/", type: "Official University Site", authority: "Tribhuvan University" },
  { name: "IOE Entrance Examination Board", url: "https://entrance.ioe.edu.np/", type: "Application & Results Portal", authority: "IOE Entrance Board" },
  { name: "Pulchowk Campus", url: "https://pcampus.edu.np/", type: "Constituent Campus", authority: "Lalitpur" },
  { name: "Thapathali Campus", url: "https://tcioe.edu.np/", type: "Constituent Campus", authority: "Kathmandu" },
  { name: "Pashchimanchal Campus (WRC)", url: "https://wrc.edu.np/", type: "Constituent Campus", authority: "Pokhara" },
  { name: "Purwanchal Campus (ERC)", url: "https://ioeerc.edu.np/", type: "Constituent Campus", authority: "Dharan" },
  { name: "Chitwan Engineering Campus", url: "https://chec.edu.np/", type: "Constituent Campus", authority: "Chitwan" },
  { name: "IOE Official Notices Board", url: "https://www.ioe.tu.edu.np/notices", type: "Circulars & Notices", authority: "Dean's Office" }
];
