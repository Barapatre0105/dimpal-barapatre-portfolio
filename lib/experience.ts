export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  location: string;
  type: string;
  detailsTitle: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    year: "Jan 2026 – Present",
    role: "Data Science Trainer",
    company: "JSSAV Edu. Pvt. Ltd.",
    location: "Nagpur, India",
    type: "Full-Time · 8+ Months",
    detailsTitle: "Teaching & Mentoring & AI Solutions Developer",
    bullets: [
      "Delivered instructor-led training in Python, Machine Learning, Deep Learning, NLP, Transformers, and Generative AI.",
      "Mentored 1000+ students and guided them in building real-world AI solutions including LLMs, RAG applications, and AI chatbots.",
      "Designed structured learning paths and hands-on projects to bridge the gap between theory and industry requirements."
    ]
  },
  {
    id: "exp-2",
    year: "Aug 2024 – Oct 2025",
    role: "Junior Data Scientist & Project Mentor",
    company: "Affordable AI Technology",
    location: "Nagpur, India",
    type: "Full-Time · 1 yr 3 mos",
    detailsTitle: "AI Solutions & Mentorship",
    bullets: [
      "Led client-based AI projects involving NLP and time series forecasting.",
      "Designed and deployed an AI-powered healthcare chatbot to automate query handling.",
      "Mentored new employees on machine learning deployment workflows."
    ]
  },
  {
    id: "exp-3",
    year: "Aug 2023 – Mar 2024",
    role: "Data Analytics Intern",
    company: "Softronix Software Services Pvt. Ltd.",
    location: "Nagpur, India",
    type: "Full-Time · 8 Months",
    detailsTitle: "Data Pipeline & Analytics",
    bullets: [
      "Automated product data extraction using Selenium and BeautifulSoup, reducing manual effort by 90%.",
      "Designed a Flask-based data pipeline for automated data ingestion and preprocessing.",
      "Worked on data cleaning, analysis, and visualization for business insights."
    ]
  }
];
