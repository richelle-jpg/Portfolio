// Single source of truth. Values come from the CV. Items marked TODO need your confirmation.
const base = import.meta.env.BASE_URL;

export const profile = {
  name: 'Richelle Cancino',
  title: 'QA Automation Engineer',
  location: 'Bugallon, Pangasinan, Philippines',
  availability: 'Available for immediate hire',
  intro:
    'QA Automation Engineer experienced in building and maintaining Playwright (JavaScript) end-to-end regression suites across multiple projects, plus a centralized Laravel-based platform for test execution history, analytics, and email reporting. Seeking a QA automation role with an international or remote team.',
  email: 'Richellecancino8@gmail.com',
  github: 'https://github.com/richelle-jpg',
  linkedin: 'https://linkedin.com/in/richelle-cancino-01542135a',
  cv: `${base}Richelle-Cancino-CV.pdf`,
};

export const skills = [
  { group: 'Test Automation', items: ['Playwright', 'JavaScript', 'Node.js', 'End-to-end scripting', 'Automation frameworks'] },
  { group: 'QA & Testing', items: ['Regression', 'Functional', 'Smoke', 'Sanity', 'UI testing', 'API testing', 'Test case design', 'Test plans', 'Bug reporting'] },
  { group: 'Development', items: ['PHP', 'Laravel', 'HTML/CSS', 'REST API', 'SQL', 'MySQL'] },
  { group: 'Tools & Process', items: ['Jira', 'Git/GitHub', 'Postman', 'XAMPP', 'VS Code', 'Agile/Scrum', 'CI/CD concepts'] },
];

export const experience = [
  {
    role: 'QA Automation Engineer',
    org: 'TechNavy Philippines Corporation',
    period: 'May 2026 – October 2026 (contract: Mar 31 – Oct 10, 2026)',
    points: [
      'Designed, built, and maintained Playwright (JavaScript/Node.js) end-to-end regression suites for critical business workflows across multiple projects.',
      'Developed a reusable automation framework to improve maintainability, stability, and execution performance.',
      'Built a centralized Laravel-based QA platform with Playwright integration, execution history, pass/fail analytics, dashboard visualization, and automated email reports.',
      'Investigated failed runs, identified root causes, and reduced flakiness.',
      'Validated REST APIs alongside UI flows; managed test cases, plans, and defects in Jira.',
    ],
  },
  {
    role: 'QA Manual Tester',
    org: 'TechNavy Philippines Corporation',
    period: 'March 31, 2026 – April 30, 2026',
    points: ['Performed functional, regression, smoke, and UI testing; logged defects in Jira and verified fixes before deployment.'],
  },
  {
    role: 'QA Intern (On-the-Job Training)',
    org: 'TechNavy Philippines Corporation',
    period: 'December 12, 2025 – March 25, 2026',
    points: ['Assisted with manual testing, test case creation, and defect logging on web applications.'],
  },
];

export const education = {
  degree: 'BS Information Technology (Business Informatics)',
  school: 'PHINMA University of Pangasinan',
  date: 'Graduated June 2026',
  awards: ['Certificate of Recognition: Best Business Informatics Project', 'Certificate of Achievement: CITE 2025'],
  certs: ['Certificate of Completion: EC004 Python AWS Course, Zuitt Learning Institute, Inc.', 'Certificate of Completion: On-the-Job Training, TechNavy Philippines Corporation'],
};

export const projects = [
  { name: 'QA Automation Platform', tag: 'Professional', text: 'Centralized Laravel dashboard integrated with Playwright for automated regression testing, email notifications, execution history, and analytics.', tech: ['Playwright', 'Laravel', 'PHP', 'MySQL'], href: '#case-study', label: 'Read case study' },
  { name: 'DRIMS Regression Automation', tag: 'Professional', text: 'Playwright regression suites with reusable test scripts for a drilling/mining operations management system.', tech: ['Playwright', 'JavaScript'], href: '#case-study', label: 'See how it fits' },
  { name: 'PeopleCore (HRIS) Regression Automation', tag: 'Professional', text: 'Playwright regression suites covering the Admin and Employee portals.', tech: ['Playwright', 'JavaScript'], href: '#code', label: 'See code samples' },
  { name: 'Online Car Buying (CarDeal)', tag: 'Capstone, 2024–2025', text: 'Multi-user platform (Admin, Buyer, Agent) with vehicle listings, inquiry management, and authentication. My role: Project Manager / Developer.', tech: ['HTML', 'CSS', 'JavaScript', 'PHP Laravel'], href: profile.github, label: 'GitHub profile' },
];
