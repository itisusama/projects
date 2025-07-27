const projectData = [
  {
    name: "Genre Grove",
    details: "A personal project for storing and creating prompts for novels.",
    liveLink: "https://genre-grove-prompts.vercel.app/"
  },
  {
    name: "Imagination Sculptor",
    details: "A personal project for creating dynamic characters for novels.",
    liveLink: "https://imagination-sculptor.vercel.app/"
  },
  {
    name: "Mergeable Names",
    details: "A personal project for creating unique character names for novels.",
    liveLink: "https://mergeable-names.vercel.app/"
  },
  {
    name: "Digital Crisis",
    details: "A website to show a fictitious digital crisis of NCA.",
    liveLink: "https://digital-crisis-narrative.vercel.app/"
  },
  {
    name: "Novel Editor",
    details: "A sample novel editor with attached database.",
    liveLink: "https://my-novel-editor.vercel.app/"
  },
  {
    name: "Darij Admin",
    details: "Admin Panel of a language learning website and app",
    liveLink: "https://deploy-darij-admin.vercel.app/dashboard"
  },
  {
    name: "Networking Executives",
    details: "An events request and management website",
    liveLink: "https://www.networkingexecutives.com/"
  },
];

// === Render Projects ===
const projectsContainer = document.getElementById('projects');

projectData.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card fade-in'; // Added animation class

  card.innerHTML = `
    <div class="project-name">${project.name}</div>
    <div class="project-details">${project.details}</div>
    <a class="view-button" href="${project.liveLink}" target="_blank" rel="noopener noreferrer">
      View Live
    </a>
  `;

  projectsContainer.appendChild(card);
});

// === Theme Toggle ===
const themeToggleBtn = document.createElement('button');
themeToggleBtn.className = 'theme-toggle';
themeToggleBtn.setAttribute('aria-label', 'Toggle theme');
themeToggleBtn.innerHTML = '🌙'; // default is dark

document.body.appendChild(themeToggleBtn);

// Apply saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

// Handle theme toggle click
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});

// Apply theme function
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggleBtn.innerHTML = theme === 'dark' ? '🌙' : '☀️';
}
