export interface Course {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  duration: string
  fee: number
  categories: string[]  // ← changed from category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  isFeatured: boolean
  imageUrl: string
  highlights: string[]
  curriculum: { module: string; topics: string[] }[]
  outcomes: string[]
  eligibility: string
}

export const COURSES: Course[] = [
  {
    slug: 'cca',
    title: 'Certificate in Computer Application',
    shortTitle: 'CCA',
    tagline: 'Essential computer skills for everyday professional use',
    description:
      'A foundational certificate program covering computer basics, operating systems, MS Office, and internet skills. Perfect for beginners looking to build essential computer literacy for office and professional use.',
    duration: '3 Months',
    fee: 2800,
    categories: ['Certificate', 'Office Tools'],
    level: 'Beginner',
    isFeatured: true,
    imageUrl: '/static/courses/cca.webp',
    highlights: [
      'Computer fundamentals from scratch',
      'MS Office — Word, Excel, PowerPoint',
      'Operating system concepts',
      'Internet browsing & email handling',
      'DBMS concepts using FoxPro',
    ],
    curriculum: [
      {
        module: 'Computer Fundamentals',
        topics: [
          'Introduction to computers',
          'Concept of Operating System: MS-DOS',
          'Windows & GUI Concept',
        ],
      },
      {
        module: 'Office Applications',
        topics: ['MS Word', 'MS Excel', 'MS PowerPoint'],
      },
      {
        module: 'Database & Internet',
        topics: ['DBMS Concept using FoxPro', 'Internet Browsing', 'E-mail Handling'],
      },
    ],
    outcomes: [
      'Use computers confidently for office work',
      'Create documents, spreadsheets and presentations',
      'Handle email and internet professionally',
      'Understand basic database concepts',
    ],
    eligibility: 'No prior computer knowledge required. Open to all.',
  },

  {
    slug: 'coa',
    title: 'Certificate in Office Accounting',
    shortTitle: 'COA',
    tagline: 'Office and accounting skills for the modern workplace',
    description:
      'A practical certificate program combining computer fundamentals, MS Office, and Tally accounting. Ideal for students seeking office administration and accounting roles.',
    duration: '3 Months',
    fee: 2800,
    categories: ['Certificate', 'Accounting', 'Office Tools'],
    level: 'Beginner',
    isFeatured: false,
    imageUrl: '/static/courses/coa.webp',
    highlights: [
      'Computer fundamentals',
      'MS Office — Word, Excel, PowerPoint',
      'Tally accounting software',
      'Windows & GUI concepts',
      'Operating system basics',
    ],
    curriculum: [
      {
        module: 'Computer Fundamentals',
        topics: [
          'Introduction to computers',
          'Concept of Operating System: MS-DOS',
          'Windows & GUI Concept',
        ],
      },
      {
        module: 'Office Applications',
        topics: ['MS Word', 'MS Excel', 'MS PowerPoint'],
      },
      {
        module: 'Accounting',
        topics: ['Tally fundamentals', 'Basic accounting concepts'],
      },
    ],
    outcomes: [
      'Handle office administration tasks',
      'Manage accounts using Tally',
      'Create professional documents and reports',
      'Work confidently in office environments',
    ],
    eligibility: 'No prior computer knowledge required. Open to all.',
  },

  {
    slug: 'dtp',
    title: 'Desk Top Publishing',
    shortTitle: 'DTP',
    tagline: 'Creative design and publishing for print and digital media',
    description:
      'A specialized course in desktop publishing covering graphic design tools like CorelDraw, Adobe Photoshop, and Page Maker. Includes bilingual (Assamese & Hindi) support for regional publishing needs.',
    duration: '4 Months',
    fee: 3400,
    categories: ['Certificate', 'Design', 'Office Tools'],
    level: 'Beginner',
    isFeatured: true,
    imageUrl: '/static/courses/dtp.webp',
    highlights: [
      'CorelDraw graphic design',
      'Adobe Photoshop image editing',
      'Page Maker for publishing',
      'Bilingual support — Assamese & Hindi',
      'MS Word for documentation',
    ],
    curriculum: [
      {
        module: 'Computer Fundamentals',
        topics: [
          'Introduction to computers',
          'Concept of Operating System: MS-DOS',
          'Windows & GUI Concept',
        ],
      },
      {
        module: 'Design Tools',
        topics: ['CorelDraw', 'Adobe Photoshop', 'Paint', 'Page Maker'],
      },
      {
        module: 'Publishing & Documentation',
        topics: ['MS Word', 'Bi-Lingual typing — Assamese & Hindi'],
      },
    ],
    outcomes: [
      'Design professional graphics and layouts',
      'Edit and retouch images using Photoshop',
      'Create print-ready publications',
      'Work in printing, publishing, and media industries',
    ],
    eligibility: 'No prior computer knowledge required. Open to all.',
  },

  {
    slug: 'dca',
    title: 'Diploma in Computer Application',
    shortTitle: 'DCA',
    tagline: 'A complete diploma for a strong foundation in IT',
    description:
      'A comprehensive 6-month diploma covering computer fundamentals, MS Office, database management, web page designing, and programming basics. One of the most popular courses for students seeking IT careers.',
    duration: '6 Months',
    fee: 4600,
    categories: ['Diploma', 'Programming', 'Office Tools', 'Development'],
    level: 'Beginner',
    isFeatured: false,
    imageUrl: '/static/courses/dca.webp',
    highlights: [
      'Computer Fundamentals',
      'Operating System — MS-DOS',
      'Windows & GUI Concept',
      'MS Office — Word, Excel, PowerPoint',
      'DBMS using FoxPro (Programming)',
      'Database Designing with MS-Access',
      'Web Page Designing — HTML & FrontPage',
      'Programming with BASIC Language',
      'Internet Browsing & Email Handling',
    ],
    curriculum: [
      {
        module: 'Computer Fundamentals',
        topics: [
          'Introduction to computers',
          'Concept of Operating System: MS-DOS',
          'Windows & GUI Concept',
        ],
      },
      {
        module: 'Office & Database',
        topics: [
          'MS Office — Word, Excel, PowerPoint',
          'DBMS Concept using FoxPro (Programming)',
          'Database Designing with MS-Access',
        ],
      },
      {
        module: 'Web & Programming',
        topics: [
          'Web Page Designing — HTML & FrontPage',
          'Programming Concept with BASIC Language',
          'Internet Browsing & E-mail Handling',
        ],
      },
    ],
    outcomes: [
      'Work confidently in IT and office environments',
      'Design basic web pages',
      'Manage databases professionally',
      'Write basic programs in BASIC language',
    ],
    eligibility: 'Class 10 pass or equivalent. No prior computer knowledge required.',
  },

  {
    slug: 'pgdca',
    title: 'P.G. Diploma in Computer Application',
    shortTitle: 'PGDCA',
    tagline: 'Post-graduate level IT diploma for advanced career opportunities',
    description:
      'A thorough 12-month post-graduate diploma covering advanced programming, web development, database management, and application design. Ideal for graduates seeking professional IT roles.',
    duration: '12 Months',
    fee: 8200,
    categories: ['PG Diploma', 'Programming', 'Office Tools', 'Development', 'Diploma'],
    level: 'Intermediate',
    isFeatured: true,
    imageUrl: '/static/courses/pgdca.webp',
    highlights: [
      'Computer Fundamentals',
      'Operating System — MS-DOS',
      'Windows & GUI Concept',
      'MS Office — Word, Excel, PowerPoint',
      'DBMS using FoxPro (Programming)',
      'Database Designing with MS-Access',
      'Web Page Designing — HTML & FrontPage',
      'Programming with BASIC & C Language',
      'Application Designing with Visual Basic',
      'Internet Browsing & Email Handling',
    ],
    curriculum: [
      {
        module: 'Computer Fundamentals',
        topics: [
          'Introduction to computers',
          'Concept of Operating System: MS-DOS',
          'Windows & GUI Concept',
          'MS Office — Word, Excel, PowerPoint',
        ],
      },
      {
        module: 'Database & Programming',
        topics: [
          'DBMS Concept using FoxPro (Programming)',
          'Database Designing with MS-Access',
          'Programming with BASIC & C Language',
          'Application Designing with Visual Basic',
        ],
      },
      {
        module: 'Web & Internet',
        topics: [
          'Web Page Designing — HTML & FrontPage',
          'Internet Browsing & E-mail Handling',
        ],
      },
    ],
    outcomes: [
      'Develop desktop applications using Visual Basic',
      'Design and manage professional databases',
      'Build web pages using HTML',
      'Work in software development and IT management roles',
    ],
    eligibility: 'Graduation required. Basic computer knowledge recommended.',
  },

  {
    slug: 'web-design',
    title: 'Web Design & Development',
    shortTitle: 'Web Design',
    tagline: 'Build beautiful, modern websites that work everywhere',
    description:
      'A practical, project-driven course covering modern web development from scratch. Learn HTML, CSS, JavaScript, and responsive design — then build real websites for your portfolio. Includes WordPress, Drupal CMS, and an introduction to React/Angular for students ready to go further.',
    duration: '4 Months',
    fee: 8000,
    categories: ['Development', 'Design', 'Programming'],
    level: 'Beginner',
    isFeatured: true,
    imageUrl: '/static/courses/web-design.webp',
    highlights: [
      'Build 3 real websites for your portfolio',
      'HTML5, CSS3 & JavaScript',
      'Responsive & mobile-first design',
      'WordPress & Drupal CMS included',
      'React/Angular starter module',
    ],
    curriculum: [
      {
        module: 'HTML & CSS',
        topics: ['HTML5 structure & semantics', 'CSS3 styling & layouts', 'Flexbox & Grid', 'Responsive design'],
      },
      {
        module: 'JavaScript',
        topics: ['JS fundamentals', 'DOM manipulation', 'Forms & validation', 'Basic animations'],
      },
      {
        module: 'CMS — WordPress & Drupal',
        topics: [
          'WordPress setup, themes & plugins',
          'Page builders & WooCommerce basics',
          'Drupal introduction & content management',
          'Choosing the right CMS for a project',
        ],
      },
      {
        module: 'Modern Frameworks Starter',
        topics: [
          'Introduction to React & Angular',
          'Components & data binding basics',
          'When and why to use a framework',
          'Resources to continue learning',
        ],
      },
      {
        module: 'Deployment',
        topics: ['Domain & hosting setup', 'Going live with your website', 'Building a freelance portfolio'],
      },
    ],
    outcomes: [
      'Build and deploy professional websites',
      'Manage content with WordPress and Drupal',
      'Understand React/Angular fundamentals',
      'Work as a freelance web designer',
      'Apply for junior web developer roles',
    ],
    eligibility: '10th pass or above. Basic computer skills required.',
  },

  {
    slug: 'tally-gst',
    title: 'Tally Prime with GST',
    shortTitle: 'Tally + GST',
    tagline: 'The accounting skill every business needs',
    description:
      "Master Tally Prime — India's most widely used accounting software — with complete GST filing and compliance. Essential for finance students, small business owners, and anyone pursuing accounting roles.",
    duration: '2 Months',
    fee: 4000,
    categories: ['Accounting', 'Office Tools'],
    level: 'Beginner',
    isFeatured: false,
    imageUrl: '/static/courses/accounting.webp',
    highlights: [
      'Tally Prime latest version',
      'Full GST return filing',
      'Payroll management',
      'Bank reconciliation',
      'Most in-demand accounting skill in Assam',
    ],
    curriculum: [
      {
        module: 'Accounting Basics',
        topics: ['Principles of accounting', 'Double-entry bookkeeping', 'Ledgers and journals', 'Trial balance'],
      },
      {
        module: 'Tally Prime',
        topics: ['Company creation & setup', 'Voucher entries', 'Inventory management', 'Reports & MIS'],
      },
      {
        module: 'GST Compliance',
        topics: ['GST concepts & slabs', 'GSTR-1, GSTR-3B filing', 'Input tax credit', 'E-way bills'],
      },
    ],
    outcomes: [
      'Manage complete accounts for any business',
      'File GST returns independently',
      'Work as an accounts executive or bookkeeper',
      'Support small businesses in your community',
    ],
    eligibility: '12th pass (Commerce preferred but not mandatory).',
  },
]

export const CATEGORIES = Array.from(
  new Set(COURSES.flatMap((c) => c.categories))
).sort()

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug)
}

export function getFeaturedCourses(): Course[] {
  return COURSES.filter((c) => c.isFeatured)
}

export function getCoursesByCategory(category: string): Course[] {
  return COURSES.filter((c) => c.categories.includes(category))
}