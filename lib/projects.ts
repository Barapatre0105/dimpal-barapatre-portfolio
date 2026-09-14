export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    title: "RAG-Powered Organizational QA Assistant",
    category: "RAG",
    description: "A CPU-optimized Retrieval-Augmented Generation (RAG) assistant designed for organizational QA. Built to efficiently process and query internal documents without requiring expensive GPU infrastructure.",
    technologies: ["RAG", "LangChain", "LLM", "Vector DB"],
    githubUrl: "https://github.com/mangeshsam/RAG-Powered-Organizational-QA-Assistant-CPU-Optimized-",
    demoUrl: "#"
  },
  {
    title: "Generative AI Hub",
    category: "LLM",
    description: "A comprehensive collection of Generative AI applications and experiments, showcasing advanced prompt engineering, model integration, and creative AI solutions.",
    technologies: ["Generative AI", "Transformers", "LLM", "Python"],
    githubUrl: "https://github.com/mangeshsam/Genrative-AI",
    demoUrl: "#"
  },
  {
    title: "AI Healthcare Chatbot",
    category: "LLM",
    description: "Developed an intelligent healthcare assistant using NLP and transformer-based architecture. Deployed using FastAPI for real-time interaction and integrated a database for conversation logging.",
    technologies: ["FastAPI", "NLP", "Transformers", "LLM", "Python"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Fashion Item Classification",
    category: "Computer Vision",
    description: "Developed a deep learning model using Convolutional Neural Networks (CNN) to classify fashion images from the Fashion MNIST dataset, achieving 92% test accuracy.",
    technologies: ["TensorFlow", "Keras", "CNN", "Python"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Sentiment Analysis on E-commerce Reviews",
    category: "Deep Learning",
    description: "Developed an LSTM-based deep learning model to classify product reviews, achieving 92.5% test accuracy. Integrated the model with a Flask web app for real-time predictions.",
    technologies: ["LSTM", "TensorFlow", "Flask", "Python"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Flipkart Product Feedback Analysis",
    category: "Data & NLP",
    description: "Scraped 5,000+ product reviews from Flipkart using Selenium and BeautifulSoup. Performed sentiment analysis using LSTM to determine product perception and satisfaction levels.",
    technologies: ["Selenium", "BeautifulSoup", "LSTM", "Python"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Image Dataset Acquisition & Analysis",
    category: "Data Engineering",
    description: "Developed an automated image scraper using Selenium and BeautifulSoup to collect and curate high-resolution image datasets tailored to specific Google search queries.",
    technologies: ["Selenium", "Pandas", "Python", "Data Automation"],
    githubUrl: "#",
    demoUrl: "#"
  }
];
