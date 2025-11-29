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
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800",
    features: ["10 Slides", "Ready to use", "Fully Customizable", "Powerpoint & Keynote", "Google Slides Compatible"]
  },
  {
    id: '2',
    name: "Employee Handbook Template",
    description: "The perfect solution for creating a comprehensive, professional, and easily accessible employee handbook.",
    fullDescription: "Introducing our Employee Handbook Template - the perfect solution for creating a comprehensive, professional, and easily accessible employee handbook. This template is designed to help businesses of all sizes to create a clear and effective guide for their employees, covering all the key policies and procedures in a professional and user-friendly format.",
    price: 4.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    features: ["10 Pages", "Word & PDF Format", "Welcome Letter Included", "Customizable Policies", "Company Overview Section"]
  },
  {
    id: '3',
    name: "Employee Interview Questions Guide",
    description: "Streamline your recruitment process and ensure consistent, effective interviews.",
    fullDescription: "Streamline your recruitment process and ensure consistent, effective interviews with our comprehensive Employee Interview Guide and Template. This easy-to-use resource includes a customizable interview guide and questionnaire, designed to gather valuable information about job candidates.",
    price: 4.49,
    category: 'kits',
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    features: ["6 Pages", "Questions & Scoring Guide", "Word & PDF Format", "Simple Clean Design", "Fully Editable"]
  },
  {
    id: '4',
    name: "Work Party Games Bundle",
    description: "8-in-1 Team Building Icebreakers to energize your team and break the ice.",
    fullDescription: "Looking for fun work party games to energize your team and break the ice? Our printable games bundle offers a variety of engaging activities perfect for staff parties, happy hours, or team meetings. Includes games like Who Knows the Boss Best, Coworker Bingo, and more.",
    price: 5.49,
    category: 'kits',
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    features: ["8 Game Bundle Pack", "2 Answer Keys", "PDF Format", "Team Building Activities", "Instant Download"]
  },
  {
    id: '5',
    name: "The HR Handbook: Topics for Success",
    description: "Unleash the full potential of your HR department with this comprehensive guide.",
    fullDescription: "Unleash the full potential of your HR department with The HR Handbook: Topics for Success. This comprehensive guide covers a wide range of HR topics, including recruitment and selection, employee relations, and training and development. With practical advice and real-world examples, this handbook is an essential resource.",
    price: 5.49,
    category: 'guides',
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800",
    features: ["27 Pages", "PDF & KPF Formats", "12 Comprehensive Chapters", "Recruitment to Offboarding", "Best Practice Guide"]
  },
  {
    id: '6',
    name: "Employee Mediation Guide & Toolkit",
    description: "Resolve Workplace Conflicts with Confidence and Ease. A toolkit for managers.",
    fullDescription: "Resolve Workplace Conflicts with Confidence and Ease. Are you a line manager or HR professional seeking effective ways to address workplace disputes? The Employee Mediation Toolkit is your go-to resource for managing and resolving employee conflicts. Designed to empower managers at all levels.",
    price: 4.49,
    category: 'kits',
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    features: ["15 Pages Total", "Mediation Scripts", "Action Plan Templates", "Step-by-Step Guide", "Visual Aids"]
  },
  {
    id: '7',
    name: "HR Strategy Presentation",
    description: "Craft a winning HR strategy presentation with ease using this 50+ slide toolkit.",
    fullDescription: "Craft a winning HR strategy presentation with ease – all the content, visuals, and flexibility you need in one downloadable package! Stop wasting time building your HR strategy presentation from scratch. This comprehensive toolkit provides you with 50 customizable slides, packed with essential content.",
    price: 5.49,
    category: 'guides',
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    features: ["50 Slides", "100+ Icons & Graphics", "PowerPoint & Google Slides", "Pre-Built Content", "Fully Editable"]
  },
  {
    id: '8',
    name: "Manager Toolkit: Employee Development",
    description: "Comprehensive guide and templates for conducting impactful 1:1 meetings.",
    fullDescription: "Struggling to conduct impactful 1:1 meetings with your team? Wish you could foster stronger relationships, boost employee engagement, and unlock their full potential? This comprehensive guide is your key to unlocking the power of effective 1:1 meetings. Packed with practical tips and actionable strategies.",
    price: 5.49,
    category: 'kits',
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f11d?auto=format&fit=crop&q=80&w=800",
    features: ["20 Pages Total", "1:1 Meeting Guides", "SMART Goals Template", "Feedback Strategies", "Development Plan Template"]
  },
  {
    id: '9',
    name: "Employee Appreciation 2025 Calendar",
    description: "A Year of Employee Excellence - The perfect gift or tool for HR Professionals.",
    fullDescription: "Transform your workplace with our beautifully designed employee engagement and appreciation calendar. This unique calendar is tailored to help HR teams plan and execute a year full of employee appreciation and engagement activities. Each month highlights different employee engagement initiatives from around the world.",
    price: 6.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    features: ["2025 Monthly Calendar", "Monthly Engagement Initiatives", "High Quality Photos", "PDF Printable", "A4 & US Letter"]
  },
  {
    id: '10',
    name: "Functions of HR Wall Print",
    description: "Eye-catching wall art illustrating the key functions of Human Resources.",
    fullDescription: "Educate and inform your colleagues and visitors with our fun 'Functions of HR' Wall Print. This eye-catching piece features an illustration of the key functions of Human Resources and an attractive way to showcase the important role of HR in any organization.",
    price: 4.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800",
    features: ["High Res JPG", "SVG File Included", "Print-Ready PDF", "3175 x 4490 px", "Instant Download"]
  },
  {
    id: '11',
    name: "HR Definition Print",
    description: "A lighthearted, humorous definition of Human Resources for your office.",
    fullDescription: "Add some humor to your HR department with our HR Definition Wall Print. This lighthearted design features a humorous take on the definition of Human Resources, guaranteed to bring a smile to your coworkers' faces. Perfect for any office or break room.",
    price: 3.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    features: ["High Res JPG", "SVG File", "Print-Ready PDF", "Square Format Available", "Funny Office Decor"]
  },
  {
    id: '12',
    name: "Investigation Report Template",
    description: "A comprehensive solution for investigating workplace incidents and conflicts.",
    fullDescription: "Looking for a comprehensive and professional template to conduct thorough employee relations investigations? Our Employee Relations Investigation Report Template provides a complete solution for investigating workplace incidents and resolving employee conflicts. Designed for HR professionals and internal investigators.",
    price: 4.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    features: ["7 Pages", "Word & PDF Format", "Investigation Methodology", "Findings & Recommendations", "Legal Considerations Section"]
  },
  {
    id: '13',
    name: "SMART Goals Development Plan",
    description: "Enhance employee engagement with this structured goal-setting framework.",
    fullDescription: "Enhance employee engagement and productivity with Simple HR's Employee SMART Goals Development Plan. Our comprehensive and customizable template is designed to help businesses of all sizes establish a clear and effective goal-setting process. Designed using the widely recognized SMART framework.",
    price: 5.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    features: ["8 Pages", "Goal Setting Guide", "Printable Forms", "Word & PDF Format", "Performance Management Tool"]
  },
  {
    id: '14',
    name: "Public Speaking Course PDF",
    description: "A 7-module professional course to master public speaking and presentation skills.",
    fullDescription: "Stop struggling with nerves or generic advice — this comprehensive, step-by-step public speaking manual gives you everything you need to speak with confidence, clarity, and impact. Perfect for professionals, leaders, and anyone who wants to communicate like a pro.",
    price: 5.49,
    category: 'guides',
    image: "https://images.unsplash.com/photo-1475721027760-4416318349b4?auto=format&fit=crop&q=80&w=800",
    features: ["30 Pages", "7 Comprehensive Modules", "Practical Exercises", "Communication Frameworks", "PDF Format"]
  },
  {
    id: '15',
    name: "HR Manager Office Print",
    description: "Inspirational and funny quote wall art specifically for HR professionals.",
    fullDescription: "Add some inspiration to your office with our HR Manager Printable Wall Art. This beautifully designed print features a funny quote, specifically chosen for HR professionals. The high-resolution print is easy to download and print, making it a convenient way to decorate your workspace.",
    price: 3.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    features: ["High Res JPG", "SVG File", "Print-Ready PDF", "Instant Download", "Office Decor"]
  },
  {
    id: '16',
    name: "Collective Bargaining Agreement",
    description: "Streamline negotiations with this comprehensive CBA template.",
    fullDescription: "Streamline your negotiations and simplify the collective bargaining process with our comprehensive Collective Bargaining Agreement Template. Designed by experienced labor relations professionals, this template covers all the essential elements including wages, benefits, working conditions, and grievance procedures.",
    price: 4.49,
    category: 'policies',
    image: "https://images.unsplash.com/photo-1554224155-9ffd4cb55560?auto=format&fit=crop&q=80&w=800",
    features: ["7 Pages", "Word & PDF Format", "NLRA & FLSA Compliant", "Customizable Clauses", "Signature Sections"]
  },
  {
    id: '17',
    name: "Project Management Planner",
    description: "Stay on top of projects and resources with this digital planner.",
    fullDescription: "Introducing the ultimate project management planner! This digital planner is designed to help you stay on top of your projects, keep track of your resources, and monitor your progress. Features an action plan section, resource status tracker, and project summary dashboards.",
    price: 4.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    features: ["4 Pages", "Action Plan Section", "Resource Tracker", "Project Summary", "PDF & Word Format"]
  },
  {
    id: '18',
    name: "Absence Management Process Pack",
    description: "Complete toolkit for managing employee absence, sickness, and return-to-work.",
    fullDescription: "Make managing employee absences simple and compliant with this editable Word-based HR Absence Management Toolkit. Whether you're in the US, UK, or Canada, this pack gives you everything you need to handle absences professionally. Includes guides, letter templates, and trigger thresholds.",
    price: 5.49,
    category: 'kits',
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=800",
    features: ["16 Pages", "Manager Cheat Sheets (US/UK/CAN)", "Return to Work Forms", "Trigger Thresholds", "Step-by-Step Guide"]
  },
  {
    id: '19',
    name: "Conflict Resolution & Mediation Kit",
    description: "All-in-one toolkit to address disputes and foster open communication.",
    fullDescription: "Transform workplace conflict into collaboration with this all-in-one Conflict Resolution and Mediation Toolkit. Includes essential templates, step-by-step guides, and a professionally designed Manager Training Presentation on Conflict Resolution to equip leaders with the skills they need.",
    price: 5.49,
    category: 'kits',
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    features: ["13 Page Guide & Forms", "12 Page Training Presentation", "Mediation Templates", "Conflict Assessment Form", "Word & PPT Format"]
  },
  {
    id: '20',
    name: "Recruitment Office Print",
    description: "Modern HR Decor to showcase your commitment to hiring quality talent.",
    fullDescription: "Add a touch of style to your work space or interview room with our unique Recruitment Wall Art. This eye-catching piece features a vibrant and inspiring design, perfect for any HR office or waiting area. Show that your company values creativity in the recruitment process.",
    price: 4.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    features: ["High Res JPG", "SVG File", "Print-Ready PDF", "Instant Download", "Interview Room Decor"]
  },
  {
    id: '21',
    name: "Cool HR Print",
    description: "Funny 'I'm not regular HR, I'm cool HR' wall art.",
    fullDescription: "Make a statement and show your unique approach to HR with our 'I'm not regular HR, I'm cool HR' quote wall print. The high-quality digital print can be easily downloaded and displayed. Perfect for the modern HR workspace.",
    price: 4.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    features: ["High Res JPG", "SVG File", "Print-Ready PDF", "Instant Download", "Office Decor"]
  },
  {
    id: '22',
    name: "AI in HR Playbook",
    description: "A digital guide for HR professionals to integrate AI into their processes.",
    fullDescription: "Unlock the Power of AI in HR! Are you an HR professional looking to stay ahead in the evolving world of HR tech? The AI in HR Playbook is your go-to guide for integrating AI into your HR processes with confidence. Covers automation, decision making, and employee experience.",
    price: 4.49,
    category: 'guides',
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    features: ["14 Page Playbook", "Actionable AI Strategies", "User-Friendly Guide", "PDF Format", "Future of Work"]
  },
  {
    id: '23',
    name: "Professional Productivity Planner",
    description: "Organize your professional life with goal setting and task management tools.",
    fullDescription: "Introducing the ultimate tool for organizing your professional life - the Professional Planner. Designed with busy professionals in mind, providing structure and flexibility. Includes monthly calendar views, weekly/daily views, goal setting, and project planning sections.",
    price: 4.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1506784926709-22f1ec754fcf?auto=format&fit=crop&q=80&w=800",
    features: ["8 Pages", "Monthly & Weekly Views", "Goal Setting Section", "PDF Format", "Simple Clean Design"]
  },
  {
    id: '24',
    name: "Employee Warning Letter Template",
    description: "Ensure consistent and professional communication during disciplinary action.",
    fullDescription: "Ensure consistent and professional communication with employees during disciplinary action with our Employee Warning Letter Template. This easy-to-use template includes a customizable letter format for addressing various types of performance or behavior issues.",
    price: 3.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1554224154-260327c00c19?auto=format&fit=crop&q=80&w=800",
    features: ["2 Pages", "Word & PDF Format", "Performance & Behavior", "Clear Instructions", "Fully Customizable"]
  },
  {
    id: '25',
    name: "Respectful Workplace Policy",
    description: "Diversity & Inclusion policy template to create a positive culture.",
    fullDescription: "Introducing our Respectful Workplace Policy template - the perfect solution for creating a comprehensive and inclusive workplace. Covers key elements of diversity and inclusion, non-discrimination policies, and equal opportunities. Written in clear, concise language.",
    price: 4.49,
    category: 'policies',
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800",
    features: ["5 Pages", "Diversity & Inclusion", "Word & PDF Format", "Customizable", "Clear Language"]
  },
  {
    id: '26',
    name: "Employee Exit Interview Template",
    description: "Streamline your offboarding with a comprehensive interview questionnaire.",
    fullDescription: "Streamline your employee exit interview process with our comprehensive Employee Exit Interview Template. Includes a customizable questionnaire designed to gather valuable feedback from departing employees on job satisfaction, reasons for leaving, and suggestions.",
    price: 4.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    features: ["3 Pages", "Comprehensive Questionnaire", "Word & PDF Format", "Simple Design", "Actionable Insights"]
  },
  {
    id: '27',
    name: "New Hire Onboarding Plan",
    description: "A structured approach to orienting new hires with calendars and milestones.",
    fullDescription: "The comprehensive and user-friendly onboarding plan is designed to ensure that every new hire has a smooth and efficient transition. With a customizable calendar, milestones, and a step-by-step guide, our onboarding template provides a structured approach.",
    price: 4.49,
    category: 'kits',
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    features: ["5 Pages", "Customizable Calendar", "Goal Tracker", "Word & PDF Format", "Step-by-Step Guide"]
  },
  {
    id: '28',
    name: "Employee Exit Questionnaire",
    description: "Multiple choice survey for efficient exit feedback gathering.",
    fullDescription: "Streamline your employee exit process with our efficient Employee Exit Questionnaire Template. This easy-to-use template is designed to increase completion rates with its simple design and multiple choice questions. Covers job satisfaction and reasons for leaving.",
    price: 2.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    features: ["2 Pages", "Multiple Choice Format", "High Completion Rate Design", "PDF Printable", "Simple Layout"]
  },
  {
    id: '29',
    name: "Electronic Communication Policy",
    description: "Protect sensitive info and ensure compliance with digital privacy regulations.",
    fullDescription: "Protect sensitive information and ensure compliance with privacy regulations with our comprehensive Electronic Communication Confidentiality Policy. Includes guidelines for the appropriate use of email, instant messaging, and other digital tools.",
    price: 4.49,
    category: 'policies',
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
    features: ["2 Pages", "Data Protection", "Usage Guidelines", "Word & PDF Format", "Fully Editable"]
  },
  {
    id: '30',
    name: "Employee Engagement Survey",
    description: "Survey template and HR Action Plan guide to boost satisfaction.",
    fullDescription: "Transform Your Workplace with Our Employee Engagement Survey Template and HR Action Plan Guide. Boost employee satisfaction, productivity, and retention. Includes a pre-designed survey covering leadership, culture, and growth, plus an HR guide on analyzing results.",
    price: 5.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800",
    features: ["10 Pages", "Survey & Action Plan", "Analysis Guide", "PDF Printable", "SMART Goals Framework"]
  },
  {
    id: '31',
    name: "Team Building Training Guide",
    description: "Manual for improving communication, collaboration, and problem solving.",
    fullDescription: "Improve communication, collaboration, and problem solving with this comprehensive Team Building manual and guide. Covers conflict resolution, teamwork strategies, and includes case studies and self-reflection sections.",
    price: 4.49,
    category: 'guides',
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    features: ["13 Pages", "Case Studies Included", "Self-Reflection Tools", "PDF Format", "Comprehensive Guide"]
  },
  {
    id: '32',
    name: "Health and Safety Policy",
    description: "Ensure compliance with workplace safety regulations and guidelines.",
    fullDescription: "Protect your employees and ensure compliance with health and safety regulations with our comprehensive Health and Safety Policy Template. Covers workplace hazards, emergency procedures, and employee responsibilities.",
    price: 4.49,
    category: 'policies',
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800",
    features: ["1 Page Essential Policy", "Hazard Coverage", "Emergency Procedures", "Word & PDF Format", "Easy to Edit"]
  },
  {
    id: '33',
    name: "Employee Training Template & Matrix",
    description: "Organize training programs and track employee skills progress.",
    fullDescription: "Elevate your employee training program with our comprehensive Employee Training Template and Skills Matrix. Includes a customizable training template for organizing sessions and a skills matrix for tracking employee competencies and progress.",
    price: 5.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    features: ["5 Pages", "Skills Matrix", "Training Tracker", "Word & PDF Format", "Performance Tool"]
  },
  {
    id: '34',
    name: "Funny Employee Awards (30 Certificates)",
    description: "Witty and fun awards to boost morale (Office DJ, Coffee Connoisseur, etc).",
    fullDescription: "Ready to honor your team with a twist of humor? Introducing our collection of funny employee appreciation awards! Say goodbye to generic recognition. From 'Coffee Connoisseur' to 'Office DJ', our awards add a playful touch to any appreciation event.",
    price: 6.49,
    category: 'kits',
    image: "https://images.unsplash.com/photo-1565514020176-db9377484d85?auto=format&fit=crop&q=80&w=800",
    features: ["30 Unique Certificates", "Editable PDF", "Funny Categories", "Instant Download", "Morale Booster"]
  },
  {
    id: '35',
    name: "Employee Orientation Presentation",
    description: "Editable PowerPoint deck for onboarding new hires professionally.",
    fullDescription: "Impress your new hires and streamline the onboarding process with this all-in-one presentation! Designed for efficiency, this editable PowerPoint presentation features captivating graphics and a structured flow covering company culture, values, team structure, and benefits.",
    price: 4.49,
    category: 'guides',
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800",
    features: ["21 Slides", "PowerPoint Format", "Org Chart Template", "Culture & Values Section", "Fully Editable"]
  },
  {
    id: '36',
    name: "Employee Probation Review",
    description: "Guide and template for conducting fair probation evaluations.",
    fullDescription: "Streamline your employee probation review process with our comprehensive Employee Probation Review Guide and Template. Includes best practices for conducting fair evaluations and a customizable template for documenting progress.",
    price: 4.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=800",
    features: ["4 Pages", "Review Guide", "Assessment Template", "Word & PDF Format", "Progress Tracking"]
  },
  {
    id: '37',
    name: "Employee Self-Care Plan",
    description: "Printable wellness planner for mental health and stress management.",
    fullDescription: "Elevate your well-being with our Employee Self-Care Plan Template. A comprehensive, printable toolkit designed to help you manage stress, maintain mental health, and achieve work-life balance. Includes SMART goal settings and mindfulness tools.",
    price: 5.49,
    category: 'templates',
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800",
    features: ["30 Pages", "Wellness Journal", "Stress Management Tools", "PDF Printable", "Goal Setting"]
  },
  {
    id: '38',
    name: "Recruitment Mega Bundle",
    description: "The ultimate 5-in-1 resource for hiring and onboarding.",
    fullDescription: "The Recruitment Mega Bundle is the ultimate resource for HR professionals. Includes 5 high-quality templates: Interview Questions, Employee Handbook, New Hire Onboarding Plan, Digital Planner, and Team Building Guide.",
    price: 6.49,
    category: 'kits',
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=800",
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

export const FAQS = [
  {
    category: "General",
    questions: [
      {
        q: "What format do the templates come in?",
        a: "All our documents are provided in Microsoft Word (.docx) and PDF formats. They are fully editable and compatible with Google Docs and Pages."
      },
      {
        q: "Are these documents legally compliant?",
        a: "Our templates are drafted based on general best practices and US/Canadian labor standards. However, we are not a law firm. We recommend having any final legal documents reviewed by a qualified attorney in your specific jurisdiction."
      },
      {
        q: "Can I use these for multiple clients?",
        a: "Your purchase includes a single-user license, meaning you can use it for your own business. If you are a consultant wishing to use these for multiple clients, please contact us for a commercial license."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "How do I access my files?",
        a: "Immediately after purchase, you will receive an email with a secure download link. You can also download them directly from the checkout confirmation page."
      },
      {
        q: "Do I need special software?",
        a: "No special software is needed. You can open and edit the Word files with Microsoft Word, Google Docs (free), or Apple Pages."
      }
    ]
  },
  {
    category: "Support",
    questions: [
      {
        q: "What if I need help customizing a document?",
        a: "We offer a Custom Document Service where our HR pros can tailor any template to your specific needs. Contact us for a quote."
      },
      {
        q: "Do you offer refunds?",
        a: "Due to the digital nature of our products, all sales are final. However, if you have any issues with a file, please contact support and we will resolve it immediately."
      }
    ]
  }
];