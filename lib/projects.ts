export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Classified Research & Data Library Portal",
    description: "A centralized research and data management platform with automated pipelines and Generative AI integration.",
    category: "LLM / AI Agents",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Generative AI", "LangChain", "AI Agents", "React.js"],
    githubUrl: "https://github.com/Barapatre0105",
    demoUrl: "#",
    highlights: [
      "Developed a centralized research and data management platform using Python, FastAPI, PostgreSQL, React.js, and REST APIs.",
      "Built automated data processing pipelines using Python and Pandas to transform scraped and Excel data into structured datasets.",
      "Integrated Generative AI, LangChain, Gemini, and ChromaDB to support market insights, competitor analysis, feature recommendations, and semantic search capabilities."
    ]
  },
  {
    id: "2",
    title: "Bank Churn Prediction and Customer Data Analysis",
    description: "Machine learning pipeline to predict customer churn based on historical bank customer records.",
    category: "Machine Learning",
    technologies: ["Python", "Machine Learning", "EDA", "Feature Engineering", "XGBoost", "Random Forest"],
    githubUrl: "https://github.com/Barapatre0105",
    demoUrl: "#",
    highlights: [
      "Analyzed 10,000+ bank customer records to identify key customer churn indicators.",
      "Built and compared Logistic Regression, Decision Tree, Random Forest, and XGBoost classification models.",
      "Performed hyperparameter tuning and model evaluation, achieving 87% accuracy and a 0.91 AUC-ROC score.",
      "Applied SMOTE and feature engineering to improve minority-class recall by 18%."
    ]
  },
  {
    id: "3",
    title: "Sentiment Analysis of Amazon Alexa Reviews",
    description: "NLP-based sentiment classification model deployed with Streamlit for real-time review analysis.",
    category: "NLP",
    technologies: ["Python", "NLP", "Machine Learning", "Random Forest", "XGBoost", "Streamlit"],
    githubUrl: "https://github.com/Barapatre0105/Sentiment-Analysis-of-Amazon-Alexa-Reviews",
    demoUrl: "#",
    highlights: [
      "Developed an NLP-based sentiment classification model achieving 97% accuracy using Random Forest and XGBoost algorithms.",
      "Processed 3,000+ customer reviews using tokenization, lemmatization, text cleaning, and feature extraction.",
      "Performed EDA and feature engineering to improve model performance and prediction accuracy.",
      "Deployed the trained machine learning model using Streamlit for real-time sentiment analysis."
    ]
  },
  {
    id: "4",
    title: "COVID-19 Data Insights Dashboard",
    description: "Interactive data visualization dashboard analyzing COVID-19 trends and KPIs.",
    category: "Data Analysis",
    technologies: ["Power BI", "Tableau", "Data Analysis", "EDA"],
    githubUrl: "https://github.com/Barapatre0105/COVID-19-Data-Insights-Dashboard",
    demoUrl: "#",
    highlights: [
      "Developed interactive dashboards analyzing COVID-19 case trends, recoveries, fatalities, and regional growth patterns using 200K+ data points.",
      "Performed trend analysis and KPI reporting to transform complex data into actionable insights."
    ]
  },
  {
    id: "5",
    title: "Music Store Data Analysis",
    description: "Relational database analysis to generate actionable business insights for a music store.",
    category: "Data Analysis",
    technologies: ["MySQL", "SQL", "Data Analysis"],
    githubUrl: "https://github.com/Barapatre0105/Music-Store-Data-Analysis",
    demoUrl: "#",
    highlights: [
      "Designed and analyzed relational databases and wrote optimized SQL queries.",
      "Analyzed revenue trends, customer behavior, and product performance to generate actionable business insights."
    ]
  },
  {
    id: "6",
    title: "Wine Quality Prediction Using Machine Learning",
    description: "Machine learning model to predict wine quality based on physicochemical tests and attributes.",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Analysis", "Random Forest"],
    githubUrl: "https://github.com/Barapatre0105/Wine-Quality-Prediction-Using-Machine-Learning",
    demoUrl: "#",
    highlights: [
      "Conducted exploratory data analysis (EDA) on wine datasets to identify correlations between chemical properties and quality ratings.",
      "Developed and evaluated multiple classification models including Random Forest and Logistic Regression.",
      "Performed feature engineering and scaling to optimize model accuracy and reduce overfitting.",
      "Achieved high predictive accuracy, allowing for automated quality assessment."
    ]
  }
];
