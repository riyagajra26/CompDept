const facultyData = [
  { name: "Dr. Rekha Ramesh", designation: "Professor", subject: "Artificial Intelligence & ML", email: "rekha.ramesh@sakec.ac.in" },
  { name: "Dr. Nilakshi Jain", designation: "Professor", subject: "Cybersecurity & Forensics", email: "nilakshi.jain@sakec.ac.in" },
  { name: "Prof. Shahzia Sayyad", designation: "Associate Professor", subject: "Data Science & Analytics", email: "shahzia.sayyad@sakec.ac.in" },
  { name: "Prof. Pramod Bhavarthe", designation: "Assistant Professor", subject: "Cloud Computing", email: "pramod.bhavarthe@sakec.ac.in" }
];

const syllabusData = {
  3: [
    { code: "CSC301", title: "Engineering Mathematics - III", credits: 4 },
    { code: "CSC302", title: "Data Structures", credits: 4 },
    { code: "CSC303", title: "Digital Logic & Computer Architecture", credits: 4 }
  ],
  4: [
    { code: "CSC401", title: "Analysis of Algorithms", credits: 4 },
    { code: "CSC402", title: "Database Management Systems", credits: 4 },
    { code: "CSC403", title: "Operating Systems", credits: 4 }
  ],
  5: [
    { code: "CSC501", title: "Computer Networks", credits: 4 },
    { code: "CSC502", title: "Software Engineering", credits: 4 },
    { code: "CSC503", title: "Data Warehousing & Mining", credits: 4 }
  ],
  6: [
    { code: "CSC601", title: "Artificial Intelligence", credits: 4 },
    { code: "CSC602", title: "Cryptography & System Security", credits: 4 },
    { code: "CSC603", title: "Compiler Construction", credits: 4 }
  ]
};

function renderFaculty(role) {
  const list = document.getElementById("facultyList");
  const filtered = role === "All" ? facultyData : facultyData.filter(f => f.designation === role);

  list.innerHTML = filtered.map(f => `
    <div class="card">
      <h3>${f.name}</h3>
      <p><strong>${f.designation}</strong></p>
      <p>Area: ${f.subject}</p>
      <p>${f.email}</p>
    </div>
  `).join("");
}

function renderSyllabus(sem) {
  const tbody = document.getElementById("syllabusBody");
  tbody.innerHTML = syllabusData[sem].map(c => `
    <tr>
      <td>${c.code}</td>
      <td>${c.title}</td>
      <td>${c.credits}</td>
    </tr>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderFaculty("All");
  renderSyllabus(3);

  document.getElementById("roleFilter").addEventListener("change", (e) => {
    renderFaculty(e.target.value);
  });

  document.querySelectorAll(".sem-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sem-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSyllabus(btn.dataset.sem);
    });
  });
});