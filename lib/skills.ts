export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "01",
    category: "Generative AI & LLM Engineering",
    description: "Build and deploy AI-powered applications with LLMs, RAG and agents.",
    skills: [
      "Generative AI", "LLMs", "RAG",
      "AI Agents", "LangChain", "LangGraph",
      "Prompt Engineering", "Embeddings",
      "Vector Databases", "Hugging Face",
      "LLM APIs"
    ]
  },
  {
    id: "02",
    category: "Machine Learning, Deep Learning, NLP & Data Science",
    description: "From data preparation to advanced AI models, combining machine learning, deep learning and NLP for intelligent solutions.",
    skills: [
      "Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost",
      "Random Forest", "K-Means", "DBSCAN", "EDA",
      "Feature Engineering", "Data Preprocessing", "Statistics",
      "Machine Learning", "Deep Learning", "NLP", "Transformers",
      "Sentence Transformers", "LSTM", "Text Embeddings",
      "Semantic Search", "Text Classification", "Sequence Modeling",
      "CNN", "MLP", "TensorFlow", "Keras"
    ]
  },
  {
    id: "03",
    category: "Data & Business Analytics",
    description: "Work with structured data and create meaningful analytics solutions.",
    skills: [
      "SQL", "MySQL", "PostgreSQL",
      "SQLite", "Data Modeling",
      "Power BI", "Tableau",
      "Advanced Excel", "DAX",
      "Power Query", "Data Analytics",
      "Business Analytics"
    ]
  }
];
