export interface Experience {
  id: string;
  year: string;
  type: string;
  role: string;
  company: string;
  location: string;
  detailsTitle: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    year: "May 2026 – Present",
    type: "Full Time",
    role: "Software Engineer",
    company: "Sambhav AI & Tech Services",
    location: "Nagpur, India",
    detailsTitle: "Key Responsibilities & Achievements",
    bullets: [
      "Worked on Python development, web scraping, data processing, API integration, and database management across Logistics, Data Library, Real Estate, and UAE Classifieds projects.",
      "Developed and maintained backend/frontend workflows, UI/UX, data synchronization, authentication/OTP, and application deployment.",
      "Performed data validation, competitor research, workflow design, API research, and document verification analysis.",
      "Followed Agile/SDLC practices, including requirement analysis, testing, client communication, MOM/JDR preparation, and project documentation."
    ]
  },
  {
    id: "2",
    year: "July 2025 – January 2026",
    type: "Full Time",
    role: "Data Analyst",
    company: "Yess Infotech",
    location: "Pune, India",
    detailsTitle: "Key Responsibilities & Achievements",
    bullets: [
      "Performed data cleaning, transformation, exploratory data analysis, and visualization on 100K+ row datasets using Python, Pandas, NumPy, and MySQL.",
      "Developed optimized SQL queries for data extraction, filtering, aggregation, and multi-table joins to support data analysis and business reporting.",
      "Developed interactive COVID-19 dashboards using Power BI and Tableau, analyzing 200K+ data points across 15+ regions.",
      "Built a Mobile Sales Dashboard for Motorola, analyzing 500+ product SKUs, regional revenue, product performance, and monthly sales KPIs, reducing insight turnaround time by 30%.",
      "Designed structured Excel dashboards using Pivot Tables, dynamic charts, and slicers to enable self-service reporting for business stakeholders."
    ]
  },
  {
    id: "3",
    year: "July 2024 – January 2025",
    type: "Internship",
    role: "Data Analyst Intern",
    company: "Accenture",
    location: "Nagpur, India",
    detailsTitle: "Key Responsibilities & Achievements",
    bullets: [
      "Processed and cleaned 5M+ social media records using Python, Pandas, and SQL to identify high-performing content categories, engagement patterns, and operational bottlenecks.",
      "Built and evaluated Machine Learning models using Random Forest and XGBoost to forecast engagement trends, improving reporting accuracy by 30%.",
      "Applied data preprocessing, feature engineering, and model evaluation techniques to improve machine learning pipeline performance.",
      "Performed exploratory data analysis to identify patterns, trends, and actionable insights from large-scale datasets.",
      "Developed interactive Power BI dashboards and KPI reports to support leadership-level decision-making and business strategy."
    ]
  }
];
