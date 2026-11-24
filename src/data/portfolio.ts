/**
 * All site content lives here. Every statement comes from the resume
 * or from the owner's written clarifications. Edit text here, not in components.
 */

export interface ProjectLink {
  label: string
  href: string
  kind: 'live' | 'code' | 'store'
}

export interface Project {
  id: string
  title: string
  tagline: string
  featured?: boolean
  overview: string
  problem: string
  contribution: string[]
  features: string[]
  stack: string[]
  links: ProjectLink[]
  /** Shown instead of link buttons when there are no public links. */
  noLinksNote?: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Role {
  company: string
  title: string
  location: string
  period: string
  points: string[]
}

export const profile = {
  name: 'Ritesh Gupta',
  title: 'Android & Full-Stack Developer',
  stackLine: ['Kotlin', 'Jetpack Compose', 'React', 'Node.js'],
  intro:
    'I build Android apps, web platforms and the backends behind them. Over 3 years of shipping EdTech products with Kotlin and Jetpack Compose, plus full-stack work in React, Node.js and MongoDB. Before software, I taught Mathematics and Physics for 8 years.',
  location: 'Gurugram, India',
  email: 'riteshguptafifth@gmail.com',
  github: 'https://github.com/rishi-ritesh',
  linkedin: 'https://linkedin.com/in/ritesh-gupta-862810433',
  resumeHref: '/Ritesh_Gupta_Resume.pdf',
  resumeFileName: 'Ritesh_Gupta_Resume.pdf',
  photo: '/ritesh-gupta.jpg',
  openToWork: true,
}

export const stats = [
  { value: '3+', label: 'Years building mobile and web products' },
  { value: '50,000+', label: 'Active students on the EdTech platform I worked on' },
  { value: '2', label: 'Production Android apps owned end to end' },
  { value: '8', label: 'Years teaching Mathematics and Physics' },
]

export const about = {
  lead: 'I came to software from the classroom, and it still shapes how I build.',
  paragraphs: [
    {
      heading: 'The journey',
      body: 'From 2014 to 2023 I taught Mathematics and Physics to students preparing for competitive and board exams, and designed course structures, practice material and mock tests. In March 2023 I moved into software at Pinnacle Civil Services.',
    },
    {
      heading: 'Android',
      body: 'I own Android apps from architecture and UI to Play Store releases and maintenance, using Kotlin, Jetpack Compose, MVVM and Firebase.',
    },
    {
      heading: 'Full-stack',
      body: 'On the web and backend side I work with React, Node.js, Express.js and MongoDB. That includes REST APIs, token-based authentication for mobile clients, and TestPortal, a full-stack examination platform.',
    },
    {
      heading: 'EdTech',
      body: 'Years of teaching gave me a practical feel for exam syllabi, question patterns and how students learn. I apply that to test-preparation software.',
    },
  ],
  approach:
    'I use AI coding assistants, including Claude Code, to help with implementation, debugging and code analysis. I review and integrate every piece of generated code myself.',
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Android & Mobile',
    items: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Material 3', 'XML Layouts', 'Retrofit', 'React Native'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'JavaScript', 'Vite', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JSON', 'Secure Authentication', 'Better Auth'],
  },
  {
    title: 'Databases & Services',
    items: ['MongoDB', 'Room', 'SQLite', 'Firebase Realtime Database', 'Firestore', 'Firebase Auth', 'Cloud Messaging', 'Crashlytics'],
  },
  {
    title: 'Architecture & Engineering',
    items: ['MVVM', 'ViewModel', 'Coroutines', 'Flow', 'LiveData', 'State Management'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Postman', 'Android Studio', 'Gradle', 'Google Play Console', 'Vercel'],
  },
  {
    title: 'AI-assisted Development',
    items: ['AI coding assistants, including Claude Code', 'Implementation support', 'Debugging', 'Code analysis'],
  },
]

export const experience: Role[] = [
  {
    company: 'Pinnacle Civil Services',
    title: 'Full-Stack Android Developer',
    location: 'Gurugram',
    period: 'March 2023 – November 2026',
    points: [
      'Owned end-to-end Android development for two production applications in Kotlin and Jetpack Compose: architecture, UI, deployment, Play Store releases and ongoing maintenance.',
      'Worked on an education and test-preparation platform serving 50,000+ active students, including mock tests and performance analytics.',
      'Designed and built a peer-discovery and messaging module with swipe-based matching, real-time one-to-one chat, gesture-driven UI, presence tracking and message delivery.',
      'Developed REST APIs and backend services with Node.js and Express.js, including secure token-based authentication for mobile clients.',
      'Delivered client products from scratch: a cross-platform matrimony application in React Native and a CRM platform for partner educational institutes.',
      'Integrated Firebase for authentication, real-time data sync, push notifications and crash reporting.',
    ],
  },
  {
    company: 'Self-employed',
    title: 'Independent Educator & Private Tutor',
    location: 'Kanpur',
    period: '2014 – 2023',
    points: [
      'Taught Mathematics and Physics to students preparing for competitive and board examinations.',
      'Designed course structures, practice material and mock tests.',
      'Built a working knowledge of competitive-exam syllabi, question patterns and student learning behaviour, later applied to test-preparation software.',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'testportal',
    title: 'TestPortal',
    tagline: 'Full-stack examination platform',
    featured: true,
    overview:
      'A web-based examination platform with separate student and admin portals, backed by a Node.js and Express.js API.',
    problem:
      'Running exams online needs one system to create tests, deliver them to students and manage the results.',
    contribution: [
      'Built the student portal, the admin portal and the backend.',
      'Implemented authentication with Better Auth and MongoDB.',
      'Used AI coding assistants, including Claude Code, for implementation, debugging and code analysis, and reviewed and integrated the generated code.',
    ],
    features: [
      'Separate Student Portal and Admin Portal',
      'Test creation',
      'Test delivery',
      'Result management',
      'Authentication with Better Auth',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Better Auth'],
    links: [
      { label: 'Student Portal', href: 'https://testportal-frontend-student.vercel.app', kind: 'live' },
      { label: 'Student code', href: 'https://github.com/rishi-ritesh/testportal-frontend-student', kind: 'code' },
      { label: 'Admin Portal', href: 'https://testportal-frontend.vercel.app', kind: 'live' },
      { label: 'Admin code', href: 'https://github.com/rishi-ritesh/testportal-frontend', kind: 'code' },
    ],
  },
  {
    id: 'edtech-android',
    title: 'Test-Preparation & Learning App',
    tagline: 'Android EdTech application',
    overview:
      'An Android exam-preparation app built with Kotlin and Jetpack Compose, on the Play Store.',
    problem:
      'Students preparing for exams need timed practice, a large pool of questions and clear feedback on how they performed.',
    contribution: [
      'Developed the application in Kotlin and Jetpack Compose.',
      'Built the peer-discovery and messaging module: swipe-based matching with real-time chat.',
    ],
    features: [
      'Timed mock tests',
      'Question banks',
      'Result analytics',
      'Peer discovery with swipe-based matching',
      'Real-time one-to-one chat',
      'Firebase integration',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Node.js', 'Firebase'],
    links: [
      {
        label: 'Play Store',
        href: 'https://play.google.com/store/apps/details?id=com.ssccgl.pinnacle.testportal',
        kind: 'store',
      },
    ],
  },
  {
    id: 'matrimony',
    title: 'Matrimony Application',
    tagline: 'Cross-platform mobile app',
    overview:
      'A cross-platform matrimony application built with React Native, delivered from scratch as a client product.',
    problem:
      'Users need a safe, simple way to find compatible profiles, search them and talk to each other.',
    contribution: [
      'Built the cross-platform application with React Native.',
      'Worked with an Express.js and MongoDB backend.',
    ],
    features: ['Profile matching', 'Search and filtering', 'Chat', 'Secure media handling'],
    stack: ['React Native', 'Express.js', 'MongoDB'],
    links: [
      {
        label: 'Play Store',
        href: 'https://play.google.com/store/apps/details?id=com.pinnacle.dulhasarkarimobile',
        kind: 'store',
      },
    ],
  },
  {
    id: 'institute-crm',
    title: 'Institute CRM Platform',
    tagline: 'CRM for partner educational institutes',
    overview: 'A CRM platform for partner educational institutes, delivered from scratch as a client product.',
    problem:
      'Partner institutes need one place to manage inventory, track book shipments and handle piracy checks.',
    contribution: ['Built the CRM capabilities listed below using Kotlin, Node.js and REST APIs.'],
    features: ['Inventory management', 'Book shipment tracking', 'Piracy-check management'],
    stack: ['Kotlin', 'Node.js', 'REST APIs'],
    links: [],
    noLinksNote: 'Private client project. No public links.',
  },
]

export const architecture = {
  intro: 'The main parts of TestPortal and how they connect, at a high level.',
  clients: [
    { name: 'Student Portal', tech: 'React + Vite', note: 'Deployed on Vercel' },
    { name: 'Admin Portal', tech: 'React + Vite', note: 'Deployed on Vercel' },
  ],
  server: { name: 'Backend API', tech: 'Node.js + Express.js' },
  auth: { name: 'Authentication', tech: 'Better Auth' },
  database: { name: 'Database', tech: 'MongoDB' },
}

export const education = {
  degree: 'B.Sc. in Information Technology',
  school: 'Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur',
  year: '2014',
  teaching: {
    title: 'Mathematics & Physics teaching',
    period: '2014 – 2023',
    summary:
      'Eight years of teaching students for competitive and board exams. It gave me strengths that carry into engineering work.',
    strengths: [
      {
        title: 'Clear communication',
        body: 'Explaining hard ideas simply, to students then and to teammates and users now.',
      },
      {
        title: 'Analytical thinking',
        body: 'Breaking problems into steps and checking each one, in maths and in code.',
      },
      {
        title: 'Learning workflows',
        body: 'Knowing exam syllabi, question patterns and how students practise, which guides how I design test-preparation software.',
      },
    ],
  },
}
