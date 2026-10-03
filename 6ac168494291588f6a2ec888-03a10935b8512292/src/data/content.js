// All editable portfolio content lives here.
export const site = {
  name: 'Nagaraj Kalburgi', short: 'NK', role: 'Full Stack Developer',
  university: 'Kishkinda University', location: 'Ballari', degree: 'B.Tech — Computer Science & Engineering',
  gradYear: '2028', cgpa: '9.05',
  studentId: 'KUB24CSE138',
  email: 'YOUR-EMAIL@example.com',            // TODO: add your real email
  github: 'https://github.com/Nagaraj39311',
  linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME',   // TODO
  resume: '/assets/resume.pdf',
  eyebrow: 'CSE • 3RD YEAR • BALLARI',
  heroTitle: ['Full Stack ', 'Developer', '.'],
  subtitle: 'I build clean, practical digital experiences and enjoy turning ideas into working software.',
  availability: 'OPEN TO INTERNSHIPS',
  watermark: 'NAGARAJ',
  video: null, poster: '/assets/character.png',
  captionText: "Hi, I'm Nagaraj — a Full Stack Developer in the making.", // TODO: match your real video
  profile: '/assets/character.png',
  about: {
    heading: ["Hi, I'm ", 'Nagaraj', '.'],
    p1: "I'm a third-year Computer Science & Engineering student at Kishkinda University, Ballari, focused on Python, DSA and full-stack development.",
    p2: "I enjoy problem solving, mathematics and building real-world projects. I'm currently looking for opportunities where I can learn fast, contribute to a team and ship useful software.",
    quote: 'Build. Learn. Improve. Repeat.',
  },
  contact: { heading: ["Let's build ", 'something', ' useful.'],
    text: "I'm open to internship opportunities, collaborative projects and conversations around software development." },
}
export const nav = [['About','about'],['Skills','skills'],['Work','work'],['Experience','experience'],['Achievements','achievements'],['Contact','contact']]
export const skillFilters = ['All','Languages','Frontend','Backend','Databases','Tools']
export const skills = [
  { k:'Py', name:'Python', cat:'Languages', focus:'Programming • DSA • OOP • Automation', desc:'Versatile programming language with experience in data structures, algorithms, object-oriented programming, exception handling, problem-solving, and application development. Used to build efficient solutions and practical projects.' },
  { k:'Ja', name:'Java', cat:'Languages', focus:'OOP • DSA • Algorithms', desc:'Object-oriented programming with a strong understanding of classes, objects, inheritance, abstraction, polymorphism, exception handling, and algorithm implementation.' },
  { k:'C', name:'C', cat:'Languages', focus:'Programming Fundamentals • Memory • DSA', desc:'Strong foundation in programming fundamentals, pointers, memory management, functions, arrays, linked lists, stacks, queues, and other core data structures.' },
  { k:'JS', name:'JavaScript', cat:'Languages', focus:'Web Development • DOM • APIs', desc:'Used to create interactive and dynamic web experiences. Familiar with functions, objects, arrays, events, DOM manipulation, asynchronous programming, and API integration.' },
  { k:'HT', name:'HTML', cat:'Frontend', focus:'Structure • Semantics • Forms', desc:'Building structured and semantic web pages using modern HTML elements, forms, tables, links, multimedia, lists, and accessible document structures.' },
  { k:'CS', name:'CSS', cat:'Frontend', focus:'Responsive Design • Animation • UI', desc:'Creating responsive and visually polished interfaces using Flexbox, Grid, positioning, transitions, animations, typography, and modern layout techniques.' },
  { k:'Re', name:'React', cat:'Frontend', focus:'Components • Hooks • UI Development', desc:'Building reusable and interactive user interfaces using components, props, state, hooks, conditional rendering, event handling, and modern React development practices.' },
  { k:'Nx', name:'Next.js', cat:'Frontend', focus:'React Framework • Routing • Full-Stack Web', desc:'Developing scalable web applications using React and Next.js features such as routing, API integration, reusable components, and modern rendering approaches.' },
  { k:'Tw', name:'Tailwind CSS', cat:'Frontend', focus:'Utility-First • Responsive • Modern UI', desc:'Creating clean and responsive interfaces using utility classes, responsive breakpoints, layouts, spacing, typography, animations, and reusable design patterns.' },
  { k:'Ap', name:'APIs', cat:'Backend', focus:'Integration • JSON • Client-Server Communication', desc:'Connecting applications with external and backend services through APIs. Understanding requests, responses, JSON data, HTTP methods, and frontend-backend communication.' },
  { k:'Sq', name:'SQL', cat:'Databases', focus:'Queries • Relational Data • Database Operations', desc:'Working with relational databases using SQL queries, joins, filtering, grouping, constraints, transactions, and CRUD operations.' },
  { k:'DB', name:'Databases', cat:'Databases', focus:'Data Management • Relationships • Normalization', desc:'Understanding database architecture, relational data, primary and foreign keys, relationships, normalization, constraints, transactions, and efficient data organization.' },
  { k:'Gt', name:'Git', cat:'Tools', focus:'Version Control • Branching • Collaboration', desc:'Managing source code and tracking development changes using commits, branches, merges, history, and collaborative version-control workflows.' },
  { k:'GH', name:'GitHub', cat:'Tools', focus:'Repositories • Collaboration • Projects', desc:'Hosting and managing development projects, maintaining repositories, documenting work, collaborating through Git, and showcasing projects as part of a professional developer portfolio.' },
  { k:'VS', name:'VS Code', cat:'Tools', focus:'Development • Debugging • Productivity', desc:'Primary development environment for writing, testing, debugging, and managing programming projects with extensions, terminal integration, source control, and developer tools.' },
  { k:'DS', name:'Data Structures', cat:'Tools', focus:'Algorithms • Problem Solving • Efficiency', desc:'Understanding and implementing arrays, linked lists, stacks, queues, priority queues, trees, binary search trees, graphs, searching, sorting, and algorithmic problem-solving techniques.' },
]
export const projects = [
  { n:'01', title:'WorkPulse', subtitle:'Attendance Analytics',
    desc:'Employee attendance and productivity analytics interface with dashboards, filters, metrics and employee-level insights.',
    tech:['React','Python','Analytics','UI'], image:'/assets/projects/workpulse.jpg',
    github:'https://github.com/YOUR-GITHUB-USERNAME/workpulse', live:'' }, // TODO: Replace with actual GitHub URL, live URL and project screenshot.
  { n:'02', title:'Smart Waste Collection', subtitle:'Smart-city concept',
    desc:'A real-world concept for overflow reporting, complaint tracking, route optimization and collection analytics.',
    tech:['React','Maps','Analytics','Optimization'], image:'/assets/projects/smart-waste-dashboard.png',
    images:['/assets/projects/smart-waste-dashboard.png','/assets/projects/smart-waste-map.png','/assets/projects/smart-waste-report-modal.png'],
    github:'https://github.com/YOUR-GITHUB-USERNAME/smart-waste-collection', live:'' }, // TODO
  { n:'03', title:'Python & DSA Lab', subtitle:'Problem solving',
    desc:'A growing collection of Python problem-solving work covering data structures, algorithms, recursion, queues, trees, graphs and object-oriented programming.',
    tech:['Python','DSA','OOP','Algorithms'], image:'/assets/projects/python-dsa.jpg',
    github:'https://github.com/YOUR-GITHUB-USERNAME/python-dsa', live:'' }, // TODO
  { n:'04', title:'AI Railway Block Planning', subtitle:'Smart India Hackathon',
    desc:'An AI-powered automatic block planning concept for Indian Railways, developed for the Smart India Hackathon internal round. Selected for the Smart India Hackathon internal round.',
    tech:['AI','Optimization','SIH','Problem Solving'], image:'/assets/projects/sih.jpg',
    github:'https://github.com/YOUR-GITHUB-USERNAME/sih-railway', live:'' }, // TODO
]
export const timeline = [
  { date:'2025 — 2028', title:'B.Tech — Computer Science & Engineering', org:'Kishkinda University, Ballari',
    desc:'Currently pursuing Computer Science & Engineering with a strong focus on programming, algorithms, databases and software development.', extra:'CGPA: 9.05' },
  { date:'Ongoing', title:'Java & ADAA – Academic Experience', org:'Kishkinda University',
    desc:'Developed a strong foundation in Java programming and Analysis & Design of Algorithms (ADAA). Practiced object-oriented programming, exception handling, inheritance, abstraction, and problem-solving using Java. Implemented and analyzed searching, sorting, recursion, greedy algorithms, dynamic programming, graph algorithms, Prim’s algorithm, Warshall’s algorithm, Floyd’s algorithm, and subset-sum problems while focusing on time and space complexity.' },
  { date:'2026', title:'Python & DSA Development', org:'Personal Projects',
    desc:'Hands-on practice across Python, OOP, algorithms, data structures and problem solving.' },
  { date:'Ongoing', title:'Web Development', org:'HTML / CSS / JavaScript',
    desc:'Developing responsive and user-friendly web interfaces using HTML, CSS, and JavaScript. Experienced in creating structured web pages, responsive layouts, navigation systems, forms, tables, and interactive UI components. Exploring modern web development practices, API integration, client-side functionality, and full-stack application patterns while focusing on clean design, usability, performance, and maintainable code.' },
  // TODO: add real certifications here later (do not add fake credentials).
]
export const achievements = [
  { value:9.05, decimals:2, label:'CGPA', caption:'Current academic performance in B.Tech CSE.' },
  { value:1, pad:2, label:'SIH Selection', caption:'Selected for the Smart India Hackathon internal round.' },
  { value:3, pad:2, label:'Year CSE', caption:'Currently in the third year of Computer Science & Engineering.' },
  { value:4, pad:2, label:'Portfolio Projects', caption:'Selected projects and concepts spanning analytics, DSA, smart-city systems and AI.' },
]
