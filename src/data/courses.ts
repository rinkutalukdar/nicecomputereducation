import { tr } from "framer-motion/client"

export interface Course {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  duration: string
  fee: number
  category: string
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
    slug: 'dtp',
    title: 'Desktop Publishing',
    shortTitle: 'DTP',
    tagline: 'Design professional print and digital graphics',
    description:
      'A practical desktop publishing course covering graphic design, page layout, image editing, and bilingual typing. Learn industry-standard tools like CorelDRAW, Photoshop, and PageMaker to create posters, brochures, banners, and publications.',
    duration: '4 Months',
    fee: 2500,
    category: 'Design',
    level: 'Beginner',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    highlights: [
      'Learn CorelDRAW & Photoshop',
      'Bilingual typing (Assamese & Hindi)',
      'Poster & brochure designing',
      'Hands-on practical training',
      'Print-ready design skills',
    ],
    curriculum: [
      {
        module: 'Computer Fundamentals',
        topics: [
          'Introduction to computers',
          'MS-DOS & Windows concepts',
          'GUI environment basics',
        ],
      },
      {
        module: 'Design & Publishing Tools',
        topics: [
          'MS Word basics',
          'PageMaker layout design',
          'CorelDRAW graphics design',
          'Paint tools & editing',
        ],
      },
      {
        module: 'Image Editing & Typing',
        topics: [
          'Adobe Photoshop basics',
          'Photo editing & retouching',
          'Assamese & Hindi typing',
          'Print design projects',
        ],
      },
    ],
    outcomes: [
      'Design posters, banners, and brochures',
      'Work in DTP and print media industries',
      'Edit and enhance images professionally',
      'Create bilingual digital content',
    ],
    eligibility: '10th pass or above. No prior design experience required.',
  },

  {
    slug: 'cca',
    title: 'Certificate in Computer Applications',
    shortTitle: 'CCA',
    tagline: 'Build strong computer fundamentals for everyday work',
    description:
      'A beginner-friendly computer application course covering operating systems, MS Office, database concepts, and internet usage. Ideal for students, office workers, and beginners entering the digital world.',
    duration: '3 Months',
    fee: 2000,
    category: 'Certificate',
    level: 'Beginner',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    highlights: [
      'Complete MS Office training',
      'Database concepts with FoxPro',
      'Internet & email handling',
      'Office productivity skills',
      'Beginner-friendly curriculum',
    ],
    curriculum: [
      {
        module: 'Computer Fundamentals',
        topics: [
          'Basics of computers',
          'MS-DOS & Windows',
          'GUI concepts & file handling',
        ],
      },
      {
        module: 'MS Office',
        topics: [
          'MS Word',
          'MS Excel',
          'MS PowerPoint',
        ],
      },
      {
        module: 'Database & Internet',
        topics: [
          'DBMS concepts using FoxPro',
          'Internet browsing',
          'Email handling',
          'Online communication basics',
        ],
      },
    ],
    outcomes: [
      'Use office applications efficiently',
      'Handle internet and email professionally',
      'Understand basic database concepts',
      'Qualify for office assistant roles',
    ],
    eligibility: '10th pass or above.',
  },

  {
    slug: 'coa',
    title: 'Certificate in Office Automation',
    shortTitle: 'COA',
    tagline: 'Master office productivity and accounting basics',
    description:
      'A job-oriented office automation course covering computer fundamentals, MS Office applications, and Tally accounting software. Ideal for students seeking office administration and accounting roles.',
    duration: '3 Months',
    fee: 2000,
    category: 'Office Tools',
    level: 'Beginner',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    highlights: [
      'MS Office complete training',
      'Tally accounting basics',
      'Office automation skills',
      'Hands-on practical sessions',
      'Job-oriented curriculum',
    ],
    curriculum: [
      {
        module: 'Computer Fundamentals',
        topics: [
          'Introduction to computers',
          'MS-DOS & Windows',
          'GUI concepts',
        ],
      },
      {
        module: 'MS Office',
        topics: [
          'MS Word',
          'MS Excel',
          'MS PowerPoint',
        ],
      },
      {
        module: 'Accounting with Tally',
        topics: [
          'Introduction to Tally',
          'Voucher entries',
          'Basic accounting concepts',
          'Reports & ledgers',
        ],
      },
    ],
    outcomes: [
      'Perform office administration tasks',
      'Create professional documents and reports',
      'Manage basic accounts in Tally',
      'Apply for office executive roles',
    ],
    eligibility: '10th pass or above.',
  },

  {
    slug: 'apgdca',
    title: 'Advanced Post Graduate Diploma in Computer Applications',
    shortTitle: 'APGDCA',
    tagline: 'Advanced professional IT training for future-ready careers',
    description:
      'A comprehensive advanced diploma program covering programming, web development, databases, networking, multimedia, accounting, and software application development. Designed for students seeking advanced IT and software careers.',
    duration: '18 Months',
    fee: 9500,
    category: 'Advanced Diploma',
    level: 'Advanced',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80',
    highlights: [
      'Java & Visual Basic programming',
      'SQL Server & database design',
      'Web development with HTML & DHTML',
      'Networking & multimedia training',
      'Tally and accounting included',
    ],
    curriculum: [
      {
        module: 'Computer Fundamentals & Office Tools',
        topics: [
          'MS-DOS & Windows',
          'MS Office applications',
          'Internet & email handling',
        ],
      },
      {
        module: 'Programming & Databases',
        topics: [
          'FoxPro programming',
          'SQL Server & RDBMS concepts',
          'Visual Basic application design',
          'Java programming',
        ],
      },
      {
        module: 'Web & Networking',
        topics: [
          'HTML & DHTML',
          'JavaScript & VBScript',
          'FrontPage web design',
          'Networking fundamentals',
        ],
      },
      {
        module: 'Multimedia & Accounting',
        topics: [
          'Multimedia concepts',
          'Tally accounting',
          'Project work',
          'Practical lab sessions',
        ],
      },
    ],
    outcomes: [
      'Develop software applications',
      'Build dynamic websites',
      'Manage professional databases',
      'Work in software, networking, or office automation roles',
    ],
    eligibility: 'Graduation preferred. Basic computer knowledge recommended.',
  },

  {
    slug: 'pgdca-classic',
    title: 'Post Graduate Diploma in Computer Applications',
    shortTitle: 'PGDCA',
    tagline: 'Comprehensive professional training in software and applications',
    description:
      'A professional diploma course covering programming, database management, web development, networking, and office applications. Designed for graduates aiming for careers in IT, software development, and computer operations.',
    duration: '12 Months',
    fee: 6500,
    category: 'PG Diploma',
    level: 'Advanced',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&q=80',
    highlights: [
      'Programming with BASIC & C',
      'SQL Server database management',
      'Visual Basic application development',
      'Networking & multimedia concepts',
      'Comprehensive practical training',
    ],
    curriculum: [
      {
        module: 'Computer Fundamentals',
        topics: [
          'MS-DOS & Windows concepts',
          'MS Office applications',
          'Internet & email handling',
        ],
      },
      {
        module: 'Programming & Databases',
        topics: [
          'FoxPro programming',
          'BASIC programming',
          'C programming language',
          'MS Access & SQL Server',
        ],
      },
      {
        module: 'Web Development',
        topics: [
          'HTML & FrontPage',
          'Web page designing',
          'Database integration basics',
        ],
      },
      {
        module: 'Application Development & Networking',
        topics: [
          'Visual Basic application design',
          'Networking fundamentals',
          'Multimedia concepts',
          'Project work',
        ],
      },
    ],
    outcomes: [
      'Develop software and desktop applications',
      'Design databases and manage records',
      'Create professional websites',
      'Qualify for IT and software-related jobs',
    ],
    eligibility: 'Graduation required.',
  },
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    shortTitle: 'Web Design',
    tagline: 'Build beautiful websites that work everywhere',
    description:
      'A practical, project-driven course covering modern web development from scratch. Learn HTML, CSS, JavaScript, and responsive design — then build real websites for your portfolio. Includes WordPress for non-coders.',
    duration: '4 Months',
    fee: 8000,
    category: 'Development',
    level: 'Beginner',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    highlights: [
      'Build 3 real websites for your portfolio',
      'HTML5, CSS3 & JavaScript',
      'Responsive & mobile-first design',
      'WordPress CMS included',
      'Freelancing guidance',
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
        module: 'WordPress & Deployment',
        topics: ['WordPress setup & themes', 'Plugins & page builders', 'Domain & hosting', 'Going live'],
      },
    ],
    outcomes: [
      'Build and deploy professional websites',
      'Work as a freelance web designer',
      'Create WordPress sites for clients',
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
      'Master Tally Prime — India\'s most widely used accounting software — with complete GST filing and compliance. Essential for finance students, small business owners, and anyone pursuing accounting roles.',
    duration: '2 Months',
    fee: 4000,
    category: 'Accounting',
    level: 'Beginner',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
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

// export const COURSES: Course[] = [
//   {
//     slug: 'dca',
//     title: 'Diploma in Computer Applications',
//     shortTitle: 'DCA',
//     tagline: 'Your first step into the world of computers',
//     description:
//       'A foundational 3-month program covering everything from computer basics to MS Office suite and internet essentials. Designed for students and working professionals who want to start their digital journey with confidence.',
//     duration: '3 Months',
//     fee: 3500,
//     category: 'Certificate',
//     level: 'Beginner',
//     isFeatured: true,
//     imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
//     highlights: [
//       'Government-recognised certification',
//       'Daily hands-on lab sessions',
//       'MS Office: Word, Excel, PowerPoint',
//       'Internet & email skills',
//       'Typing speed improvement',
//     ],
//     curriculum: [
//       {
//         module: 'Computer Fundamentals',
//         topics: ['Introduction to computers', 'Hardware & peripherals', 'Operating systems (Windows)', 'File management'],
//       },
//       {
//         module: 'Microsoft Office',
//         topics: ['MS Word — documents & formatting', 'MS Excel — spreadsheets & formulas', 'MS PowerPoint — presentations'],
//       },
//       {
//         module: 'Internet & Communication',
//         topics: ['Internet browsing & safety', 'Email (Gmail, Outlook)', 'Online forms & portals', 'Digital payments basics'],
//       },
//     ],
//     outcomes: [
//       'Operate computers confidently',
//       'Create professional documents and spreadsheets',
//       'Use internet tools for work and study',
//       'Qualify for data entry and office assistant roles',
//     ],
//     eligibility: '10th pass or above. No prior computer knowledge required.',
//   },
//   {
//     slug: 'adca',
//     title: 'Advanced Diploma in Computer Applications',
//     shortTitle: 'ADCA',
//     tagline: 'Level up your computer skills for the modern workplace',
//     description:
//       'A comprehensive 6-month program that combines DCA fundamentals with advanced topics including programming basics, database management, and web fundamentals. The most popular course for job seekers in Northeast India.',
//     duration: '6 Months',
//     fee: 6500,
//     category: 'Diploma',
//     level: 'Intermediate',
//     isFeatured: true,
//     imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
//     highlights: [
//       'Most popular & job-oriented course',
//       'Covers DCA + advanced topics',
//       'Introduction to programming',
//       'Database management basics',
//       'Web design fundamentals',
//     ],
//     curriculum: [
//       {
//         module: 'Computer Fundamentals + MS Office',
//         topics: ['Full DCA curriculum', 'Advanced Excel formulas', 'Excel charts & pivot tables'],
//       },
//       {
//         module: 'Programming Basics',
//         topics: ['Introduction to C / Python', 'Basic logic and problem solving', 'Simple programs and projects'],
//       },
//       {
//         module: 'Web & Database',
//         topics: ['HTML & CSS basics', 'Introduction to databases', 'MS Access / simple SQL queries'],
//       },
//       {
//         module: 'DTP & Graphics',
//         topics: ['PageMaker / CorelDRAW basics', 'Creating flyers and brochures', 'Print design fundamentals'],
//       },
//     ],
//     outcomes: [
//       'Apply for government and private sector IT jobs',
//       'Work as a computer operator or office executive',
//       'Build basic websites and graphics',
//       'Manage databases and spreadsheets at a professional level',
//     ],
//     eligibility: '10th pass or above. Basic computer knowledge preferred.',
//   },
//   {
//     slug: 'pgdca',
//     title: 'Post Graduate Diploma in Computer Applications',
//     shortTitle: 'PGDCA',
//     tagline: 'Graduate-level computing for serious professionals',
//     description:
//       'A rigorous 1-year post-graduate diploma covering the full spectrum of computer science — from programming and software engineering to networking and project management. Ideal for graduates looking to switch into IT.',
//     duration: '1 Year',
//     fee: 12000,
//     category: 'PG Diploma',
//     level: 'Advanced',
//     isFeatured: true,
//     imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
//     highlights: [
//       'University-equivalent PG diploma',
//       'Full software development lifecycle',
//       'Networking & cybersecurity basics',
//       'Live project in final semester',
//       'Placement assistance included',
//     ],
//     curriculum: [
//       {
//         module: 'Semester 1',
//         topics: ['Programming in C & C++', 'Data structures', 'Operating systems', 'Computer organisation'],
//       },
//       {
//         module: 'Semester 2',
//         topics: ['Java programming', 'Database management (SQL)', 'Software engineering', 'Computer networks'],
//       },
//       {
//         module: 'Semester 3 (Project)',
//         topics: ['Web application development', 'Project management', 'Live industry project', 'Viva & presentation'],
//       },
//     ],
//     outcomes: [
//       'Work as a software developer or system analyst',
//       'Pursue MCA or higher studies',
//       'Qualify for government IT department positions',
//       'Lead small development teams',
//     ],
//     eligibility: 'Graduation (any stream) required.',
//   },
//   {
//     slug: 'web-design',
//     title: 'Web Design & Development',
//     shortTitle: 'Web Design',
//     tagline: 'Build beautiful websites that work everywhere',
//     description:
//       'A practical, project-driven course covering modern web development from scratch. Learn HTML, CSS, JavaScript, and responsive design — then build real websites for your portfolio. Includes WordPress for non-coders.',
//     duration: '4 Months',
//     fee: 8000,
//     category: 'Development',
//     level: 'Beginner',
//     isFeatured: true,
//     imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
//     highlights: [
//       'Build 3 real websites for your portfolio',
//       'HTML5, CSS3 & JavaScript',
//       'Responsive & mobile-first design',
//       'WordPress CMS included',
//       'Freelancing guidance',
//     ],
//     curriculum: [
//       {
//         module: 'HTML & CSS',
//         topics: ['HTML5 structure & semantics', 'CSS3 styling & layouts', 'Flexbox & Grid', 'Responsive design'],
//       },
//       {
//         module: 'JavaScript',
//         topics: ['JS fundamentals', 'DOM manipulation', 'Forms & validation', 'Basic animations'],
//       },
//       {
//         module: 'WordPress & Deployment',
//         topics: ['WordPress setup & themes', 'Plugins & page builders', 'Domain & hosting', 'Going live'],
//       },
//     ],
//     outcomes: [
//       'Build and deploy professional websites',
//       'Work as a freelance web designer',
//       'Create WordPress sites for clients',
//       'Apply for junior web developer roles',
//     ],
//     eligibility: '10th pass or above. Basic computer skills required.',
//   },
//   {
//     slug: 'tally-gst',
//     title: 'Tally Prime with GST',
//     shortTitle: 'Tally + GST',
//     tagline: 'The accounting skill every business needs',
//     description:
//       'Master Tally Prime — India\'s most widely used accounting software — with complete GST filing and compliance. Essential for finance students, small business owners, and anyone pursuing accounting roles.',
//     duration: '2 Months',
//     fee: 4000,
//     category: 'Accounting',
//     level: 'Beginner',
//     isFeatured: true,
//     imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
//     highlights: [
//       'Tally Prime latest version',
//       'Full GST return filing',
//       'Payroll management',
//       'Bank reconciliation',
//       'Most in-demand accounting skill in Assam',
//     ],
//     curriculum: [
//       {
//         module: 'Accounting Basics',
//         topics: ['Principles of accounting', 'Double-entry bookkeeping', 'Ledgers and journals', 'Trial balance'],
//       },
//       {
//         module: 'Tally Prime',
//         topics: ['Company creation & setup', 'Voucher entries', 'Inventory management', 'Reports & MIS'],
//       },
//       {
//         module: 'GST Compliance',
//         topics: ['GST concepts & slabs', 'GSTR-1, GSTR-3B filing', 'Input tax credit', 'E-way bills'],
//       },
//     ],
//     outcomes: [
//       'Manage complete accounts for any business',
//       'File GST returns independently',
//       'Work as an accounts executive or bookkeeper',
//       'Support small businesses in your community',
//     ],
//     eligibility: '12th pass (Commerce preferred but not mandatory).',
//   },
//   {
//     slug: 'digital-marketing',
//     title: 'Digital Marketing',
//     shortTitle: 'Digital Marketing',
//     tagline: 'Grow any business online — yours or your client\'s',
//     description:
//       'A comprehensive digital marketing course covering SEO, social media marketing, Google Ads, email marketing, and analytics. Learn to run profitable campaigns and build an in-demand career in the digital economy.',
//     duration: '3 Months',
//     fee: 7000,
//     category: 'Marketing',
//     level: 'Beginner',
//     isFeatured: true,
//     imageUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80',
//     highlights: [
//       'Run real Google & Facebook Ads',
//       'SEO — rank on Google',
//       'Social media management',
//       'Email marketing campaigns',
//       'Google Analytics certification prep',
//     ],
//     curriculum: [
//       {
//         module: 'SEO & Content',
//         topics: ['Keyword research', 'On-page & off-page SEO', 'Content marketing strategy', 'Blog writing basics'],
//       },
//       {
//         module: 'Social Media & Ads',
//         topics: ['Instagram & Facebook marketing', 'Google Ads (Search & Display)', 'Meta Ads Manager', 'Campaign budgeting'],
//       },
//       {
//         module: 'Email & Analytics',
//         topics: ['Email marketing tools', 'Mailchimp campaigns', 'Google Analytics 4', 'Reporting & insights'],
//       },
//     ],
//     outcomes: [
//       'Manage digital marketing for businesses',
//       'Run profitable paid ad campaigns',
//       'Grow social media accounts organically',
//       'Freelance as a digital marketing consultant',
//     ],
//     eligibility: '12th pass or above. No technical background required.',
//   },
//   {
//     slug: 'graphic-design',
//     title: 'Graphic Design',
//     shortTitle: 'Graphic Design',
//     tagline: 'Create visuals that communicate and captivate',
//     description:
//       'Learn graphic design from the ground up using Photoshop, Illustrator, and Canva. Build a professional portfolio with real-world projects — logos, social media creatives, brochures, and brand identity kits.',
//     duration: '3 Months',
//     fee: 6000,
//     category: 'Design',
//     level: 'Beginner',
//     isFeatured: false,
//     imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
//     highlights: [
//       'Adobe Photoshop & Illustrator',
//       'Canva for quick design',
//       'Logo & brand identity design',
//       'Social media creative templates',
//       'Portfolio of 10+ real projects',
//     ],
//     curriculum: [
//       {
//         module: 'Design Fundamentals',
//         topics: ['Colour theory & typography', 'Layout & composition', 'Design thinking process'],
//       },
//       {
//         module: 'Photoshop',
//         topics: ['Photo editing & retouching', 'Layer management', 'Poster & banner design'],
//       },
//       {
//         module: 'Illustrator & Canva',
//         topics: ['Vector graphics & logos', 'Infographic design', 'Social media templates', 'Print-ready exports'],
//       },
//     ],
//     outcomes: [
//       'Design logos, banners, and marketing materials',
//       'Work as a freelance graphic designer',
//       'Support marketing teams with visuals',
//       'Create a strong design portfolio',
//     ],
//     eligibility: '10th pass or above. Creative interest is a plus.',
//   },
//   {
//     slug: 'python-programming',
//     title: 'Python Programming',
//     shortTitle: 'Python',
//     tagline: 'The most in-demand programming language of the decade',
//     description:
//       'A practical Python programming course starting from absolute basics and going up to data analysis and simple automation. Perfect for students who want to enter software development, data science, or AI.',
//     duration: '4 Months',
//     fee: 9000,
//     category: 'Programming',
//     level: 'Beginner',
//     isFeatured: false,
//     imageUrl: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&q=80',
//     highlights: [
//       'Python 3 — latest version',
//       'Build 5 real automation projects',
//       'Data analysis with Pandas basics',
//       'Introduction to AI/ML concepts',
//       'GitHub portfolio setup',
//     ],
//     curriculum: [
//       {
//         module: 'Python Basics',
//         topics: ['Variables, data types, operators', 'Conditionals & loops', 'Functions & modules', 'File handling'],
//       },
//       {
//         module: 'Object-Oriented Python',
//         topics: ['Classes & objects', 'Inheritance & polymorphism', 'Exception handling', 'Libraries & packages'],
//       },
//       {
//         module: 'Practical Python',
//         topics: ['Web scraping basics', 'Data analysis with Pandas', 'Automation scripts', 'Mini projects'],
//       },
//     ],
//     outcomes: [
//       'Write Python programs independently',
//       'Automate repetitive tasks',
//       'Analyse data with Python',
//       'Build foundation for AI/ML learning',
//     ],
//     eligibility: '12th pass or above. Interest in problem-solving recommended.',
//   },
//   {
//     slug: 'hardware-networking',
//     title: 'Hardware & Networking',
//     shortTitle: 'Hardware & Networking',
//     tagline: 'Build, repair, and connect the computers of tomorrow',
//     description:
//       'Hands-on training in computer hardware assembly, troubleshooting, and network setup. This practical course prepares you for technician roles, IT support jobs, and home/office network management.',
//     duration: '3 Months',
//     fee: 6500,
//     category: 'Technical',
//     level: 'Beginner',
//     isFeatured: false,
//     imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
//     highlights: [
//       'Hands-on hardware lab daily',
//       'Assemble & disassemble PCs',
//       'LAN / WiFi network setup',
//       'Troubleshooting & repair skills',
//       'CompTIA A+ exam preparation',
//     ],
//     curriculum: [
//       {
//         module: 'Computer Hardware',
//         topics: ['PC components & assembly', 'BIOS & OS installation', 'Peripheral setup', 'Hardware troubleshooting'],
//       },
//       {
//         module: 'Networking Fundamentals',
//         topics: ['OSI model & TCP/IP', 'IP addressing & subnetting', 'LAN setup & cable crimping', 'WiFi configuration'],
//       },
//       {
//         module: 'Maintenance & Support',
//         topics: ['Preventive maintenance', 'Virus removal & security', 'Data backup & recovery', 'Customer service skills'],
//       },
//     ],
//     outcomes: [
//       'Assemble and repair computers',
//       'Set up home and office networks',
//       'Work as an IT support technician',
//       'Start your own computer repair business',
//     ],
//     eligibility: '10th pass or above. Technical curiosity is helpful.',
//   },
//   {
//     slug: 'ms-office-advanced',
//     title: 'Advanced MS Office & MIS',
//     shortTitle: 'MS Office Advanced',
//     tagline: 'Master Excel, Word & PowerPoint at a professional level',
//     description:
//       'Go beyond the basics with advanced Excel formulas, pivot tables, macros, and VBA automation. Combined with professional Word and PowerPoint skills, this course prepares you for MIS executive and data analyst roles.',
//     duration: '2 Months',
//     fee: 4500,
//     category: 'Office Tools',
//     level: 'Intermediate',
//     isFeatured: false,
//     imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
//     highlights: [
//       'Advanced Excel & pivot tables',
//       'Excel Macros & VBA basics',
//       'Professional report writing in Word',
//       'Executive-level PowerPoint presentations',
//       'MIS reporting techniques',
//     ],
//     curriculum: [
//       {
//         module: 'Advanced Excel',
//         topics: ['VLOOKUP, HLOOKUP, INDEX-MATCH', 'Pivot tables & charts', 'Conditional formatting', 'Data validation & dashboards'],
//       },
//       {
//         module: 'Macros & Automation',
//         topics: ['Recording macros', 'Basic VBA programming', 'Automating repetitive tasks', 'Custom functions'],
//       },
//       {
//         module: 'Word & PowerPoint Pro',
//         topics: ['Mail merge & templates', 'Track changes & reviewing', 'Executive presentation design', 'Slide master & themes'],
//       },
//     ],
//     outcomes: [
//       'Handle complex data analysis in Excel',
//       'Automate office tasks with macros',
//       'Create executive-level presentations',
//       'Work as an MIS executive or data analyst',
//     ],
//     eligibility: 'Basic computer knowledge required. DCA or equivalent preferred.',
//   },
// ]

export const CATEGORIES = Array.from(new Set(COURSES.map((c) => c.category)))

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug)
}

export function getFeaturedCourses(): Course[] {
  return COURSES.filter((c) => c.isFeatured)
}

export function getCoursesByCategory(category: string): Course[] {
  return COURSES.filter((c) => c.category === category)
}
