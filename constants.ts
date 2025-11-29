import { Product, BlogPost, Testimonial } from './types';

export const SITE_NAME = "Simple HR";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Employee Wellbeing Presentation",
    description: "Enhance your workplace culture with our comprehensive Employee Wellbeing Presentation.",
    fullDescription: "Enhance your workplace culture with our comprehensive Employee Wellbeing Presentation. This ready-to-use presentation covers essential topics like workplace wellness strategy, mental health support, stress management techniques, self-care planning, and mindfulness exercises. Perfect for HR professionals, managers, and team leaders, this resource is designed to promote a healthy, productive, and resilient workforce.",
    price: 4.49,
    category: 'guides',
    image: "https://i.etsystatic.com/38005424/r/il/d61a68/6248772347/il_fullxfull.6248772347_sqpd.jpg",
    features: ["10 Slides", "Ready to use", "Fully Customizable", "Powerpoint & Keynote", "Google Slides Compatible"]
  },
  {
    id: '2',
    name: "Employee Handbook Template",
    description: "The perfect solution for creating a comprehensive, professional, and easily accessible employee handbook.",
    fullDescription: "Introducing our Employee Handbook Template - the perfect solution for creating a comprehensive, professional, and easily accessible employee handbook. This template is designed to help businesses of all sizes to create a clear and effective guide for their employees, covering all the key policies and procedures in a professional and user-friendly format.",
    price: 4.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/35b279/4953422743/il_fullxfull.4953422743_24jp.jpg",
    features: ["10 Pages", "Word & PDF Format", "Welcome Letter Included", "Customizable Policies", "Company Overview Section"]
  },
  {
    id: '3',
    name: "Employee Interview Questions Guide",
    description: "Streamline your recruitment process and ensure consistent, effective interviews.",
    fullDescription: "Streamline your recruitment process and ensure consistent, effective interviews with our comprehensive Employee Interview Guide and Template. This easy-to-use resource includes a customizable interview guide and questionnaire, designed to gather valuable information about job candidates.",
    price: 4.49,
    category: 'kits',
    image: "https://i.etsystatic.com/38005424/r/il/95ebd8/4250262356/il_fullxfull.4250262356_c6zg.jpg",
    features: ["6 Pages", "Questions & Scoring Guide", "Word & PDF Format", "Simple Clean Design", "Fully Editable"]
  },
  {
    id: '4',
    name: "Work Party Games Bundle",
    description: "8-in-1 Team Building Icebreakers to energize your team and break the ice.",
    fullDescription: "Looking for fun work party games to energize your team and break the ice? Our printable games bundle offers a variety of engaging activities perfect for staff parties, happy hours, or team meetings. Includes games like Who Knows the Boss Best, Coworker Bingo, and more.",
    price: 5.49,
    category: 'kits',
    image: "https://i.etsystatic.com/38005424/r/il/c6fb91/6295676939/il_fullxfull.6295676939_rok1.jpg",
    features: ["8 Game Bundle Pack", "2 Answer Keys", "PDF Format", "Team Building Activities", "Instant Download"]
  },
  {
    id: '5',
    name: "The HR Handbook: Topics for Success",
    description: "Unleash the full potential of your HR department with this comprehensive guide.",
    fullDescription: "Unleash the full potential of your HR department with The HR Handbook: Topics for Success. This comprehensive guide covers a wide range of HR topics, including recruitment and selection, employee relations, and training and development. With practical advice and real-world examples, this handbook is an essential resource.",
    price: 5.49,
    category: 'guides',
    image: "https://i.etsystatic.com/38005424/r/il/48b28a/4953455281/il_fullxfull.4953455281_4wng.jpg",
    features: ["27 Pages", "PDF & KPF Formats", "12 Comprehensive Chapters", "Recruitment to Offboarding", "Best Practice Guide"]
  },
  {
    id: '6',
    name: "Employee Mediation Guide & Toolkit",
    description: "Resolve Workplace Conflicts with Confidence and Ease. A toolkit for managers.",
    fullDescription: "Resolve Workplace Conflicts with Confidence and Ease. Are you a line manager or HR professional seeking effective ways to address workplace disputes? The Employee Mediation Toolkit is your go-to resource for managing and resolving employee conflicts. Designed to empower managers at all levels.",
    price: 4.49,
    category: 'kits',
    image: "https://i.etsystatic.com/38005424/r/il/8e3be2/6641458249/il_fullxfull.6641458249_5lo9.jpg",
    features: ["15 Pages Total", "Mediation Scripts", "Action Plan Templates", "Step-by-Step Guide", "Visual Aids"]
  },
  {
    id: '7',
    name: "HR Strategy Presentation",
    description: "Craft a winning HR strategy presentation with ease using this 50+ slide toolkit.",
    fullDescription: "Craft a winning HR strategy presentation with ease – all the content, visuals, and flexibility you need in one downloadable package! Stop wasting time building your HR strategy presentation from scratch. This comprehensive toolkit provides you with 50 customizable slides, packed with essential content.",
    price: 5.49,
    category: 'guides',
    image: "https://i.etsystatic.com/38005424/r/il/de24ba/5968624230/il_fullxfull.5968624230_4ofq.jpg",
    features: ["50 Slides", "100+ Icons & Graphics", "PowerPoint & Google Slides", "Pre-Built Content", "Fully Editable"]
  },
  {
    id: '8',
    name: "Manager Toolkit: Employee Development",
    description: "Comprehensive guide and templates for conducting impactful 1:1 meetings.",
    fullDescription: "Struggling to conduct impactful 1:1 meetings with your team? Wish you could foster stronger relationships, boost employee engagement, and unlock their full potential? This comprehensive guide is your key to unlocking the power of effective 1:1 meetings. Packed with practical tips and actionable strategies.",
    price: 5.49,
    category: 'kits',
    image: "https://i.etsystatic.com/38005424/r/il/9843d0/6039310030/il_fullxfull.6039310030_csi5.jpg",
    features: ["20 Pages Total", "1:1 Meeting Guides", "SMART Goals Template", "Feedback Strategies", "Development Plan Template"]
  },
  {
    id: '9',
    name: "Employee Appreciation 2025 Calendar",
    description: "A Year of Employee Excellence - The perfect gift or tool for HR Professionals.",
    fullDescription: "Transform your workplace with our beautifully designed employee engagement and appreciation calendar. This unique calendar is tailored to help HR teams plan and execute a year full of employee appreciation and engagement activities. Each month highlights different employee engagement initiatives from around the world.",
    price: 6.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/94e7a7/6054957170/il_fullxfull.6054957170_bov4.jpg",
    features: ["2025 Monthly Calendar", "Monthly Engagement Initiatives", "High Quality Photos", "PDF Printable", "A4 & US Letter"]
  },
  {
    id: '10',
    name: "Functions of HR Wall Print",
    description: "Eye-catching wall art illustrating the key functions of Human Resources.",
    fullDescription: "Educate and inform your colleagues and visitors with our fun 'Functions of HR' Wall Print. This eye-catching piece features an illustration of the key functions of Human Resources and an attractive way to showcase the important role of HR in any organization.",
    price: 4.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/2ec0c8/4288291273/il_fullxfull.4288291273_3lym.jpg",
    features: ["High Res JPG", "SVG File Included", "Print-Ready PDF", "3175 x 4490 px", "Instant Download"]
  },
  {
    id: '11',
    name: "HR Definition Print",
    description: "A lighthearted, humorous definition of Human Resources for your office.",
    fullDescription: "Add some humor to your HR department with our HR Definition Wall Print. This lighthearted design features a humorous take on the definition of Human Resources, guaranteed to bring a smile to your coworkers' faces. Perfect for any office or break room.",
    price: 3.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/237732/4249879960/il_fullxfull.4249879960_4972.jpg",
    features: ["High Res JPG", "SVG File", "Print-Ready PDF", "Square Format Available", "Funny Office Decor"]
  },
  {
    id: '12',
    name: "Investigation Report Template",
    description: "A comprehensive solution for investigating workplace incidents and conflicts.",
    fullDescription: "Looking for a comprehensive and professional template to conduct thorough employee relations investigations? Our Employee Relations Investigation Report Template provides a complete solution for investigating workplace incidents and resolving employee conflicts. Designed for HR professionals and internal investigators.",
    price: 4.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/c4daf7/4606790332/il_fullxfull.4606790332_mseb.jpg",
    features: ["7 Pages", "Word & PDF Format", "Investigation Methodology", "Findings & Recommendations", "Legal Considerations Section"]
  },
  {
    id: '13',
    name: "SMART Goals Development Plan",
    description: "Enhance employee engagement with this structured goal-setting framework.",
    fullDescription: "Enhance employee engagement and productivity with Simple HR's Employee SMART Goals Development Plan. Our comprehensive and customizable template is designed to help businesses of all sizes establish a clear and effective goal-setting process. Designed using the widely recognized SMART framework.",
    price: 5.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/b479db/4907654848/il_fullxfull.4907654848_g0rx.jpg",
    features: ["8 Pages", "Goal Setting Guide", "Printable Forms", "Word & PDF Format", "Performance Management Tool"]
  },
  {
    id: '14',
    name: "Public Speaking Course PDF",
    description: "A 7-module professional course to master public speaking and presentation skills.",
    fullDescription: "Stop struggling with nerves or generic advice — this comprehensive, step-by-step public speaking manual gives you everything you need to speak with confidence, clarity, and impact. Perfect for professionals, leaders, and anyone who wants to communicate like a pro.",
    price: 5.49,
    category: 'guides',
    image: "https://i.etsystatic.com/38005424/r/il/8267bb/7336845318/il_fullxfull.7336845318_h442.jpg",
    features: ["30 Pages", "7 Comprehensive Modules", "Practical Exercises", "Communication Frameworks", "PDF Format"]
  },
  {
    id: '15',
    name: "HR Manager Office Print",
    description: "Inspirational and funny quote wall art specifically for HR professionals.",
    fullDescription: "Add some inspiration to your office with our HR Manager Printable Wall Art. This beautifully designed print features a funny quote, specifically chosen for HR professionals. The high-resolution print is easy to download and print, making it a convenient way to decorate your workspace.",
    price: 3.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/2fa1f0/4243820356/il_fullxfull.4243820356_kulf.jpg",
    features: ["High Res JPG", "SVG File", "Print-Ready PDF", "Instant Download", "Office Decor"]
  },
  {
    id: '16',
    name: "Collective Bargaining Agreement",
    description: "Streamline negotiations with this comprehensive CBA template.",
    fullDescription: "Streamline your negotiations and simplify the collective bargaining process with our comprehensive Collective Bargaining Agreement Template. Designed by experienced labor relations professionals, this template covers all the essential elements including wages, benefits, working conditions, and grievance procedures.",
    price: 4.49,
    category: 'policies',
    image: "https://i.etsystatic.com/38005424/r/il/24a85e/4654933487/il_fullxfull.4654933487_4gza.jpg",
    features: ["7 Pages", "Word & PDF Format", "NLRA & FLSA Compliant", "Customizable Clauses", "Signature Sections"]
  },
  {
    id: '17',
    name: "Project Management Planner",
    description: "Stay on top of projects and resources with this digital planner.",
    fullDescription: "Introducing the ultimate project management planner! This digital planner is designed to help you stay on top of your projects, keep track of your resources, and monitor your progress. Features an action plan section, resource status tracker, and project summary dashboards.",
    price: 4.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/cf2e73/4764064933/il_fullxfull.4764064933_q060.jpg",
    features: ["4 Pages", "Action Plan Section", "Resource Tracker", "Project Summary", "PDF & Word Format"]
  },
  {
    id: '18',
    name: "Absence Management Process Pack",
    description: "Complete toolkit for managing employee absence, sickness, and return-to-work.",
    fullDescription: "Make managing employee absences simple and compliant with this editable Word-based HR Absence Management Toolkit. Whether you're in the US, UK, or Canada, this pack gives you everything you need to handle absences professionally. Includes guides, letter templates, and trigger thresholds.",
    price: 5.49,
    category: 'kits',
    image: "https://i.etsystatic.com/38005424/r/il/6c003d/6925960508/il_fullxfull.6925960508_c6eu.jpg",
    features: ["16 Pages", "Manager Cheat Sheets (US/UK/CAN)", "Return to Work Forms", "Trigger Thresholds", "Step-by-Step Guide"]
  },
  {
    id: '19',
    name: "Conflict Resolution & Mediation Kit",
    description: "All-in-one toolkit to address disputes and foster open communication.",
    fullDescription: "Transform workplace conflict into collaboration with this all-in-one Conflict Resolution and Mediation Toolkit. Includes essential templates, step-by-step guides, and a professionally designed Manager Training Presentation on Conflict Resolution to equip leaders with the skills they need.",
    price: 5.49,
    category: 'kits',
    image: "https://i.etsystatic.com/38005424/r/il/8c36a0/6487925923/il_fullxfull.6487925923_q3o4.jpg",
    features: ["13 Page Guide & Forms", "12 Page Training Presentation", "Mediation Templates", "Conflict Assessment Form", "Word & PPT Format"]
  },
  {
    id: '20',
    name: "Recruitment Office Print",
    description: "Modern HR Decor to showcase your commitment to hiring quality talent.",
    fullDescription: "Add a touch of style to your work space or interview room with our unique Recruitment Wall Art. This eye-catching piece features a vibrant and inspiring design, perfect for any HR office or waiting area. Show that your company values creativity in the recruitment process.",
    price: 4.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/c0dea0/4258798658/il_fullxfull.4258798658_31k6.jpg",
    features: ["High Res JPG", "SVG File", "Print-Ready PDF", "Instant Download", "Interview Room Decor"]
  },
  {
    id: '21',
    name: "Cool HR Print",
    description: "Funny 'I'm not regular HR, I'm cool HR' wall art.",
    fullDescription: "Make a statement and show your unique approach to HR with our 'I'm not regular HR, I'm cool HR' quote wall print. The high-quality digital print can be easily downloaded and displayed. Perfect for the modern HR workspace.",
    price: 4.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/0be8bf/4294239915/il_fullxfull.4294239915_9din.jpg",
    features: ["High Res JPG", "SVG File", "Print-Ready PDF", "Instant Download", "Office Decor"]
  },
  {
    id: '22',
    name: "AI in HR Playbook",
    description: "A digital guide for HR professionals to integrate AI into their processes.",
    fullDescription: "Unlock the Power of AI in HR! Are you an HR professional looking to stay ahead in the evolving world of HR tech? The AI in HR Playbook is your go-to guide for integrating AI into your HR processes with confidence. Covers automation, decision making, and employee experience.",
    price: 4.49,
    category: 'guides',
    image: "https://i.etsystatic.com/38005424/r/il/19577f/6646875904/il_fullxfull.6646875904_flxl.jpg",
    features: ["14 Page Playbook", "Actionable AI Strategies", "User-Friendly Guide", "PDF Format", "Future of Work"]
  },
  {
    id: '23',
    name: "Professional Productivity Planner",
    description: "Organize your professional life with goal setting and task management tools.",
    fullDescription: "Introducing the ultimate tool for organizing your professional life - the Professional Planner. Designed with busy professionals in mind, providing structure and flexibility. Includes monthly calendar views, weekly/daily views, goal setting, and project planning sections.",
    price: 4.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/d1380f/4953375557/il_fullxfull.4953375557_7g15.jpg",
    features: ["8 Pages", "Monthly & Weekly Views", "Goal Setting Section", "PDF Format", "Simple Clean Design"]
  },
  {
    id: '24',
    name: "Employee Warning Letter Template",
    description: "Ensure consistent and professional communication during disciplinary action.",
    fullDescription: "Ensure consistent and professional communication with employees during disciplinary action with our Employee Warning Letter Template. This easy-to-use template includes a customizable letter format for addressing various types of performance or behavior issues.",
    price: 3.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/002e08/4570842886/il_fullxfull.4570842886_jkp1.jpg",
    features: ["2 Pages", "Word & PDF Format", "Performance & Behavior", "Clear Instructions", "Fully Customizable"]
  },
  {
    id: '25',
    name: "Respectful Workplace Policy",
    description: "Diversity & Inclusion policy template to create a positive culture.",
    fullDescription: "Introducing our Respectful Workplace Policy template - the perfect solution for creating a comprehensive and inclusive workplace. Covers key elements of diversity and inclusion, non-discrimination policies, and equal opportunities. Written in clear, concise language.",
    price: 4.49,
    category: 'policies',
    image: "https://i.etsystatic.com/38005424/r/il/aaaded/6018641385/il_fullxfull.6018641385_lyp7.jpg",
    features: ["5 Pages", "Diversity & Inclusion", "Word & PDF Format", "Customizable", "Clear Language"]
  },
  {
    id: '26',
    name: "Employee Exit Interview Template",
    description: "Streamline your offboarding with a comprehensive interview questionnaire.",
    fullDescription: "Streamline your employee exit interview process with our comprehensive Employee Exit Interview Template. Includes a customizable questionnaire designed to gather valuable feedback from departing employees on job satisfaction, reasons for leaving, and suggestions.",
    price: 4.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/1b0e17/4294679775/il_fullxfull.4294679775_pcae.jpg",
    features: ["3 Pages", "Comprehensive Questionnaire", "Word & PDF Format", "Simple Design", "Actionable Insights"]
  },
  {
    id: '27',
    name: "New Hire Onboarding Plan",
    description: "A structured approach to orienting new hires with calendars and milestones.",
    fullDescription: "The comprehensive and user-friendly onboarding plan is designed to ensure that every new hire has a smooth and efficient transition. With a customizable calendar, milestones, and a step-by-step guide, our onboarding template provides a structured approach.",
    price: 4.49,
    category: 'kits',
    image: "https://i.etsystatic.com/38005424/r/il/2128b4/4716765610/il_fullxfull.4716765610_6xh0.jpg",
    features: ["5 Pages", "Customizable Calendar", "Goal Tracker", "Word & PDF Format", "Step-by-Step Guide"]
  },
  {
    id: '28',
    name: "Employee Exit Questionnaire",
    description: "Multiple choice survey for efficient exit feedback gathering.",
    fullDescription: "Streamline your employee exit process with our efficient Employee Exit Questionnaire Template. This easy-to-use template is designed to increase completion rates with its simple design and multiple choice questions. Covers job satisfaction and reasons for leaving.",
    price: 2.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/55c002/4939576256/il_fullxfull.4939576256_mn50.jpg",
    features: ["2 Pages", "Multiple Choice Format", "High Completion Rate Design", "PDF Printable", "Simple Layout"]
  },
  {
    id: '29',
    name: "Electronic Communication Policy",
    description: "Protect sensitive info and ensure compliance with digital privacy regulations.",
    fullDescription: "Protect sensitive information and ensure compliance with privacy regulations with our comprehensive Electronic Communication Confidentiality Policy. Includes guidelines for the appropriate use of email, instant messaging, and other digital tools.",
    price: 4.49,
    category: 'policies',
    image: "https://i.etsystatic.com/38005424/r/il/1e7ee5/4229090054/il_fullxfull.4229090054_oklq.jpg",
    features: ["2 Pages", "Data Protection", "Usage Guidelines", "Word & PDF Format", "Fully Editable"]
  },
  {
    id: '30',
    name: "Employee Engagement Survey",
    description: "Survey template and HR Action Plan guide to boost satisfaction.",
    fullDescription: "Transform Your Workplace with Our Employee Engagement Survey Template and HR Action Plan Guide. Boost employee satisfaction, productivity, and retention. Includes a pre-designed survey covering leadership, culture, and growth, plus an HR guide on analyzing results.",
    price: 5.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/9523aa/6493253943/il_fullxfull.6493253943_jj2s.jpg",
    features: ["10 Pages", "Survey & Action Plan", "Analysis Guide", "PDF Printable", "SMART Goals Framework"]
  },
  {
    id: '31',
    name: "Team Building Training Guide",
    description: "Manual for improving communication, collaboration, and problem solving.",
    fullDescription: "Improve communication, collaboration, and problem solving with this comprehensive Team Building manual and guide. Covers conflict resolution, teamwork strategies, and includes case studies and self-reflection sections.",
    price: 4.49,
    category: 'guides',
    image: "https://i.etsystatic.com/38005424/r/il/4d7718/4963072809/il_fullxfull.4963072809_6h3f.jpg",
    features: ["13 Pages", "Case Studies Included", "Self-Reflection Tools", "PDF Format", "Comprehensive Guide"]
  },
  {
    id: '32',
    name: "Health and Safety Policy",
    description: "Ensure compliance with workplace safety regulations and guidelines.",
    fullDescription: "Protect your employees and ensure compliance with health and safety regulations with our comprehensive Health and Safety Policy Template. Covers workplace hazards, emergency procedures, and employee responsibilities.",
    price: 4.49,
    category: 'policies',
    image: "https://i.etsystatic.com/38005424/r/il/884a34/4229020340/il_fullxfull.4229020340_iywf.jpg",
    features: ["1 Page Essential Policy", "Hazard Coverage", "Emergency Procedures", "Word & PDF Format", "Easy to Edit"]
  },
  {
    id: '33',
    name: "Employee Training Template & Matrix",
    description: "Organize training programs and track employee skills progress.",
    fullDescription: "Elevate your employee training program with our comprehensive Employee Training Template and Skills Matrix. Includes a customizable training template for organizing sessions and a skills matrix for tracking employee competencies and progress.",
    price: 5.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/f0f656/4907738530/il_fullxfull.4907738530_p5qp.jpg",
    features: ["5 Pages", "Skills Matrix", "Training Tracker", "Word & PDF Format", "Performance Tool"]
  },
  {
    id: '34',
    name: "Funny Employee Awards (30 Certificates)",
    description: "Witty and fun awards to boost morale (Office DJ, Coffee Connoisseur, etc).",
    fullDescription: "Ready to honor your team with a twist of humor? Introducing our collection of funny employee appreciation awards! Say goodbye to generic recognition. From 'Coffee Connoisseur' to 'Office DJ', our awards add a playful touch to any appreciation event.",
    price: 6.49,
    category: 'kits',
    image: "https://i.etsystatic.com/38005424/r/il/773426/5799623801/il_fullxfull.5799623801_tris.jpg",
    features: ["30 Unique Certificates", "Editable PDF", "Funny Categories", "Instant Download", "Morale Booster"]
  },
  {
    id: '35',
    name: "Employee Orientation Presentation",
    description: "Editable PowerPoint deck for onboarding new hires professionally.",
    fullDescription: "Impress your new hires and streamline the onboarding process with this all-in-one presentation! Designed for efficiency, this editable PowerPoint presentation features captivating graphics and a structured flow covering company culture, values, team structure, and benefits.",
    price: 4.49,
    category: 'guides',
    image: "https://i.etsystatic.com/38005424/r/il/a1aad1/6052179600/il_fullxfull.6052179600_n254.jpg",
    features: ["21 Slides", "PowerPoint Format", "Org Chart Template", "Culture & Values Section", "Fully Editable"]
  },
  {
    id: '36',
    name: "Employee Probation Review",
    description: "Guide and template for conducting fair probation evaluations.",
    fullDescription: "Streamline your employee probation review process with our comprehensive Employee Probation Review Guide and Template. Includes best practices for conducting fair evaluations and a customizable template for documenting progress.",
    price: 4.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/c2392d/4284646981/il_fullxfull.4284646981_7mrg.jpg",
    features: ["4 Pages", "Review Guide", "Assessment Template", "Word & PDF Format", "Progress Tracking"]
  },
  {
    id: '37',
    name: "Employee Self-Care Plan",
    description: "Printable wellness planner for mental health and stress management.",
    fullDescription: "Elevate your well-being with our Employee Self-Care Plan Template. A comprehensive, printable toolkit designed to help you manage stress, maintain mental health, and achieve work-life balance. Includes SMART goal settings and mindfulness tools.",
    price: 5.49,
    category: 'templates',
    image: "https://i.etsystatic.com/38005424/r/il/8a0023/6249344423/il_fullxfull.6249344423_aufa.jpg",
    features: ["30 Pages", "Wellness Journal", "Stress Management Tools", "PDF Printable", "Goal Setting"]
  },
  {
    id: '38',
    name: "Recruitment Mega Bundle",
    description: "The ultimate 5-in-1 resource for hiring and onboarding.",
    fullDescription: "The Recruitment Mega Bundle is the ultimate resource for HR professionals. Includes 5 high-quality templates: Interview Questions, Employee Handbook, New Hire Onboarding Plan, Digital Planner, and Team Building Guide.",
    price: 6.49,
    category: 'kits',
    image: "https://i.etsystatic.com/38005424/r/il/c3af22/5013924446/il_fullxfull.5013924446_kind.jpg",
    features: ["5 Full Templates", "Interview Guide", "Handbook", "Onboarding Plan", "Best Value Bundle"]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "5 Signs Your Employee Handbook is Outdated",
    excerpt: "Workplace cultures shift rapidly. Here is how to know if your core documents need a refresh.",
    content: "An employee handbook is a living document...",
    author: "Simple HR Team",
    date: "Oct 12, 2024",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '2',
    title: "How to Conduct a Stay Interview",
    excerpt: "Don't wait for the exit interview to find out why people leave. Ask them why they stay.",
    content: "Retention is the new recruiting...",
    author: "Simple HR Team",
    date: "Sep 28, 2024",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '3',
    title: "Navigating the New Overtime Rules",
    excerpt: "Understanding the impact of salary thresholds on your bottom line.",
    content: "Changes to the FLSA mean more employees...",
    author: "Simple HR Team",
    date: "Sep 15, 2024",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '4',
    title: "The Unlimited PTO Trap",
    excerpt: "Why unlimited vacation might actually lead to employee burnout if not managed correctly.",
    content: "Unlimited PTO sounds like a perk, but without clear guidelines, employees often take less time off...",
    author: "Simple HR Team",
    date: "Aug 30, 2024",
    category: "Benefits",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '5',
    title: "Managing Toxic High Performers",
    excerpt: "They hit their numbers but destroy the culture. Here is how to handle the 'brilliant jerk'.",
    content: "It is the classic dilemma: the salesperson who brings in millions but makes the support team cry...",
    author: "Simple HR Team",
    date: "Aug 12, 2024",
    category: "Management",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '6',
    title: "Remote Onboarding Checklist",
    excerpt: "How to make new hires feel welcome when they have never met you in person.",
    content: "Remote work requires intentionality. Sending a laptop isn't enough...",
    author: "Simple HR Team",
    date: "Jul 25, 2024",
    category: "Remote Work",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '7',
    title: "Effective 1:1 Meetings",
    excerpt: "Stop treating 1:1s as status updates. Use this structure to drive performance.",
    content: "The 1:1 is the most important meeting on your calendar...",
    author: "Simple HR Team",
    date: "Jul 10, 2024",
    category: "Management",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '8',
    title: "Writing Job Descriptions That Convert",
    excerpt: "Move beyond the laundry list of requirements. Sell the role.",
    content: "A job description is a marketing document. Stop listing duties and start listing impact...",
    author: "Simple HR Team",
    date: "Jun 22, 2024",
    category: "Hiring",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '9',
    title: "Performance Improvement Plans (PIPs)",
    excerpt: "Are they a tool for growth or a formality for firing? How to do them right.",
    content: "PIPs have a bad reputation. But when done correctly, they can actually save a career...",
    author: "Simple HR Team",
    date: "Jun 05, 2024",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '10',
    title: "Holiday Party Liability",
    excerpt: "How to celebrate without a lawsuit. A guide for small business owners.",
    content: "Open bars and office dynamics can be a risky mix. Here are simple steps to reduce liability...",
    author: "Simple HR Team",
    date: "May 18, 2024",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Sarah Jenkins",
    role: "HR Director",
    company: "TechFlow",
    content: "Finally, templates that don't sound robotic. The Employee Handbook saved me weeks of drafting.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '2',
    name: "Michael Chen",
    role: "Founder",
    company: "StartUp Inc",
    content: "We used the Onboarding Kit for our first 5 hires. It made us look like a pro operation from day one.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '3',
    name: "Elena Rodriguez",
    role: "VP of People",
    company: "GrowthCo",
    content: "The termination toolkit ensured we handled a difficult transition with dignity and full legal compliance.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '4',
    name: "David Smith",
    role: "Operations Mgr",
    company: "Logistics Ltd",
    content: "The custom document service is incredible. Getting a tailored policy in 24 hours is unheard of.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const FAQS = [];
