export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "01",
    category: "Programming & Machine Learning",
    description: "Developing robust algorithms and predictive models to extract patterns and solve complex problems.",
    skills: ["Python", "SQL", "Scikit-learn", "Random Forest", "XGBoost", "Logistic Regression", "Decision Trees", "Pandas", "NumPy"]
  },
  {
    id: "02",
    category: "AI & Natural Language Processing",
    description: "Building intelligent agents and NLP systems that understand text and automate workflows.",
    skills: ["Artificial Intelligence", "NLP", "Generative AI", "LangChain", "AI Agents", "Semantic Search", "Tokenization", "Lemmatization"]
  },
  {
    id: "03",
    category: "Data Science & Visualization",
    description: "Transforming raw data into actionable insights through robust analysis and interactive dashboards.",
    skills: ["EDA", "Feature Engineering", "Power BI", "Tableau", "MySQL", "PostgreSQL", "FastAPI", "Streamlit", "REST APIs"]
  }
];
