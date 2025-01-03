const jobRoles = {
  tolol: {
    title: "terdeteksi fendi",
    requiredSkills: [null],
    description:
      "anda terdeteksi fendi, tikus tikuss hushh hussh hussshh, cit cti cti cittttt citt ciitt 🐭🐭🤬🤬",
  },

  cina1: {
    title: "Anda Terdeteksi cina ambis",
    requiredSkills: ["cina", "cpp", "python"],
    description:
      "anda teredeksi cina ambis, cina ambis merupakan cina versi terbaru biasanya mereka nongkrong di perpus, mereka terkenal pelit",
  },
  FRONTEND_DEV: {
    title: "Frontend Developer",
    requiredSkills: ["javascript", "css", "html"],
    description: "Pawang tampilan, pejuang pixel perfect.",
  },
  BACKEND_DEV: {
    title: "Backend Developer",
    requiredSkills: ["python", "java", "sql"],
    description: "Ninja server-side, sering disalahkan frontend.",
  },
  DEVOPS: {
    title: "DevOps Engineer",
    requiredSkills: ["linux", "python", "javascript"],
    description: "Jembatan damai antara developer dan server.",
  },
  GAME_DEV: {
    title: "Game Developer",
    requiredSkills: ["cpp", "blender", "shader programming"],
    description: "Pemimpi dunia virtual, sering ngoding sambil main game.",
  },
  CYBER_SECURITY: {
    title: "Cyber Security Specialist",
    requiredSkills: ["linux", "python", "statistik"],
    description: "Hacker legal yang hobi main tebak password.",
  },
  DATABASE_ADMIN: {
    title: "Database Administrator",
    requiredSkills: ["sql", "python", "statistik"],
    description: "Pelindung data, sering ditanya 'kenapa error nih?'.",
  },
  MOBILE_DEV: {
    title: "Mobile App Developer",
    requiredSkills: ["kotlin", "node.js", "javascript"],
    description: "Pencipta aplikasi, kadang lupa update versi.",
  },
  JAVA_NINJA: {
    title: "Java Ninja",
    requiredSkills: ["java", "node.js", "javascript"],
    description: "Master OOP, siap menghadapi error dan null pointer.",
  },
  CLOUD_ENGINEER: {
    title: "Cloud Engineer",
    requiredSkills: ["linux", "javascript", "python"],
    description:
      "Sang penjaga awan digital, lebih sering di cloud daripada darat.",
  },
  QA_ENGINEER: {
    title: "Quality Assurance Engineer",
    requiredSkills: ["javascript", "sql", "python"],
    description: "Pemburu bug yang bikin developer menangis.",
  },
  AI_ENGINEER: {
    title: "AI Engineer",
    requiredSkills: ["python", "statistik", "javascript"],
    description: "Pencipta masa depan, sering bicara dengan AI.",
  },
  TECH_SUPPORT: {
    title: "Technical Support",
    requiredSkills: ["python", "sql", "javascript"],
    description: "Malaikat sabar, mendengar keluhan user seharian.",
  },
  UX_DESIGNER: {
    title: "UX Designer",
    requiredSkills: ["css", "html", "javascript"],
    description:
      "Pakar pengalaman pengguna, suka bilang 'lebih user-friendly dong'.",
  },
  NETWORK_ENGINEER: {
    title: "Network Engineer",
    requiredSkills: ["linux", "sql", "javascript"],
    description: "Pawang jaringan, internet lambat jadi musuh bebuyutan.",
  },
  PRODUCT_MANAGER: {
    title: "Product Manager",
    requiredSkills: ["javascript", "node.js", "sql"],
    description: "Pengatur timeline, sering disalahkan kalau delay.",
  },
  SCRUM_MASTER: {
    title: "Scrum Master",
    requiredSkills: ["javascript", "node.js", "sql"],
    description: "Pengatur ritme tim, suka bilang 'stand-up yuk!'",
  },
  ROBOTICS_ENGINEER: {
    title: "Robotics Engineer",
    requiredSkills: ["cpp", "blender", "shader programming"],
    description: "Pembuat robot, berharap robotnya gak jadi musuh manusia.",
  },
  BI_ENGINEER: {
    title: "Business Intelligence Engineer",
    requiredSkills: ["sql", "javascript", "statistik"],
    description: "Detektif bisnis, suka bilang 'insight-nya keren nih'.",
  },
  SEO_SPECIALIST: {
    title: "SEO Specialist",
    requiredSkills: ["javascript", "sql", "html"],
    description: "Pencari jalan pintas ke halaman pertama Google.",
  },
  TECH_WRITER: {
    title: "Technical Writer",
    requiredSkills: ["javascript", "sql", "python"],
    description: "Si penyulap istilah teknis jadi bahasa manusia.",
  },
  SYSTEM_ADMIN: {
    title: "System Administrator",
    requiredSkills: ["linux", "javascript", "python"],
    description: "Pahlawan tanpa tanda jasa di balik server stabil.",
  },
  MACHINE_LEARNING_ENGINEER: {
    title: "Machine Learning Engineer",
    requiredSkills: ["python", "statistik", "javascript"],
    description: "Guru mesin, mengajarkan komputer cara berpikir.",
  },
  BLOCKCHAIN_DEV: {
    title: "Blockchain Developer",
    requiredSkills: ["javascript", "sql", "cpp"],
    description: "Penggemar kripto, mengubah dunia satu blok dalam waktu.",
  },
  FULLSTACK_DEV: {
    title: "Full Stack Developer",
    requiredSkills: ["javascript", "node.js", "react"],
    description: "Jagoan serba bisa, pejuang dari front hingga back.",
  },
  TECH_ARTIST: {
    title: "Technical Artist",
    requiredSkills: ["blender", "shader programming", "cpp"],
    description: "Artis dengan jiwa teknis, dunia 3D jadi playground-nya.",
  },
  UI_ENGINEER: {
    title: "UI Engineer",
    requiredSkills: ["react", "css", "javascript"],
    description: "Pejuang keindahan dan performa antarmuka.",
  },
  REKTOR: {
    title:
      "TIDAK PERLU LAMA SEBAIKNYA ANDA MENJADI REKTOR, Kalo presiden pun bisa nanti saya bantu, silahkan tanya ketua",
    requiredSkills: [
      "shader programming",
      "blender",
      "html",
      "css",
      "statistik",
      "sql",
      "react",
      "css",
      "javascript",
      "cina",
      "kotlin",
      "linux",
    ],
    description: "SEPUHHHHHHHHHH🙏🏻🙏🏻🙏🏻🙏🏻",
  },
};

export function matchJobRole(answers) {
  const skillsMap = {
    1: "python",
    2: "java",
    3: "cpp",
    4: "javascript",
    5: "cina",
    6: "jawa",
    7: "kotlin",
    8: "linux",
    9: "sql",
    10: "statistik", //
    11: "css",
    12: "html",
    13: "node.js",
    14: "react",
    15: "blender",
    16: "shader programming",
  };

  const userSkills = answers.reduce((skills, answer) => {
    if (answer.answer === true) {
      skills.push(skillsMap[answer.id]);
    }
    return skills;
  }, []);

  let bestMatch = null;
  for (const roleKey in jobRoles) {
    const role = jobRoles[roleKey];
    const matchCount = userSkills.filter((skill) =>
      role.requiredSkills.includes(skill),
    ).length;
    const accuracy = (matchCount / role.requiredSkills.length) * 100;

    if (!bestMatch || accuracy > bestMatch.accuracy) {
      bestMatch = {
        role: role.title,
        accuracy,
        description: role.description,
      };
    }
  }

  return bestMatch;
}
