// ============================================================
// PROJECT DATA
// Edit this file to update project information.
// Do NOT invent URLs, metrics, or deployment details.
// ============================================================

export const featuredProjects = [
  {
    id: "ai-legal-guardian",
    name: "AI Legal Guardian",
    tagline: "AI-powered contract risk analysis and clause explanation tool",
    category: "AI Application",
    categoryColor: "ai",
    description:
      "Built a working AI-powered legal contract analysis application using Streamlit and GPT-4o. Users can upload contracts to receive risk assessments, clause-level explanations, and redrafting suggestions. Includes an interactive chat interface and Hindi language support. Built for the HCL GUVI Career Carnival contract-analysis challenge.",
    disclaimer:
      "This is an AI-powered analysis tool, not a legal advice system. It has not undergone professional legal validation.",
    technologies: ["Python", "Streamlit", "OpenAI API", "Generative AI", "Git"],
    githubUrl: "https://github.com/Pragadeesh-D/ai-legal-guardian",
    liveUrl: null, // No confirmed public deployment — do not display Live Demo button
    featured: true,
    context: "HCL GUVI Career Carnival 2026",
    features: [
      "Contract risk assessment",
      "Clause-level explanations",
      "Interactive contract chat",
      "AI-assisted clause redrafting templates",
      "Hindi language support",
    ],
    overview:
      "An AI-powered legal contract analysis application that helps users understand contracts they receive — identifying potential risks and explaining legal clauses in plain language.",
    problem:
      "Legal contracts are dense, jargon-heavy documents that most people find difficult to understand without specialist knowledge. Clause-level risk identification is time-consuming even for professionals.",
    goal: "Build a practical AI application that makes contract analysis accessible — helping users understand what they are signing by surfacing risks and explaining clauses in plain English (and Hindi).",
    approach:
      "Used Streamlit to build a fast, interactive frontend. Integrated GPT-4o via the OpenAI API for natural language understanding and generation. Designed prompt chains to produce structured risk assessments and clause explanations. Added a conversational chat interface so users can ask follow-up questions about specific clauses.",
    architecture:
      "User uploads contract (PDF/text) → Streamlit frontend processes and sends to backend → OpenAI API generates risk analysis, clause explanations, and redraft suggestions → Results displayed in structured UI with interactive chat.",
    challenges: [
      "Designing effective prompts that produce structured, consistent risk assessments across diverse contract types",
      "Handling varied contract formats and extracting meaningful clause boundaries",
      "Balancing response verbosity vs. clarity for non-legal users",
      "Adding multilingual support (Hindi) without losing analytical accuracy",
    ],
    results:
      "Successfully built a functional prototype that demonstrates end-to-end AI-powered contract analysis. The application correctly identifies common risk clauses and generates plain-language explanations across a range of contract types tested during development.",
    type: "featured",
  },
  {
    id: "bugops-ai",
    name: "BugOps AI",
    tagline:
      "AI-assisted engineering operations platform for bug management and release readiness",
    category: "Web Application",
    categoryColor: "web",
    description:
      "Built an AI-assisted Engineering Operations platform designed to support bug management, engineering analysis, and release readiness workflows. Features defect lifecycle management with AI-powered classification, priority recommendations, severity analysis, and an AI Commander for workspace-level engineering insights.",
    disclaimer:
      "This is a hackathon/educational prototype. Application workflows and data are simulated or mocked. This is not a production SaaS platform.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "REST APIs",
      "AI API integrations",
      "LocalStorage",
    ],
    githubUrl: "https://github.com/Pragadeesh-D/bugops-ai",
    liveUrl: null, // No confirmed public deployment
    featured: true,
    context: "Solo Hackathon Project",
    features: [
      "Defect creation and lifecycle management",
      "Severity, priority, ownership and status tracking",
      "AI-assisted bug classification",
      "AI priority recommendations and severity analysis",
      "Engineering reasoning with confidence scoring",
      "Release readiness dashboard",
      "Engineering health metrics",
      "AI Commander for workspace-level analysis",
    ],
    overview:
      "An AI-assisted Engineering Operations platform that combines traditional bug tracking with AI-powered analysis to surface engineering insights and support release readiness decisions.",
    problem:
      "Engineering teams managing large backlogs often lack automated tooling to intelligently classify, prioritise, and assess bugs — resulting in manual overhead and inconsistent release readiness evaluation.",
    goal: "Build a prototype platform that demonstrates how AI can assist in bug classification, priority analysis, and engineering health monitoring — as a solo hackathon project.",
    approach:
      "Built a fully client-side application using vanilla HTML, CSS, and JavaScript with LocalStorage for persistence. Integrated AI API endpoints for classification and reasoning features. Designed a dashboard-first UI to surface engineering health metrics at a glance.",
    architecture:
      "Frontend: HTML/CSS/JavaScript single-page interface → LocalStorage for data persistence → AI API integration for classification and recommendations → Dashboard views for release readiness and engineering health.",
    challenges: [
      "Designing a coherent data model for defect lifecycle state management in a client-side-only architecture",
      "Integrating AI API calls in a way that degrades gracefully without a backend",
      "Building a credible engineering dashboard UI that communicates health metrics clearly",
      "Completing a complex multi-feature prototype under hackathon time constraints",
    ],
    results:
      "Successfully delivered a working prototype demonstrating AI-assisted bug classification, priority recommendations, and a release readiness dashboard. Built solo within hackathon constraints.",
    type: "featured",
  },
  {
    id: "eb-smart-meter",
    name: "AI-Powered EB Smart Meter Monitoring System",
    tagline:
      "Simulation-based electricity monitoring system with ML forecasting and anomaly detection",
    category: "Academic Project",
    categoryColor: "academic",
    description:
      "Built an AI-powered electricity monitoring and management system for domestic EB meters as a final-year academic project. Combines IoT simulation, time-series data storage, machine learning, and deep learning for consumption forecasting, anomaly detection, and billing estimation. All hardware interaction is simulated — no physical smart-meter deployment.",
    disclaimer:
      "Academic simulation-based project. Does not involve real electrical hardware deployment or physical smart-meter integration.",
    technologies: [
      "Python",
      "Flask",
      "TensorFlow",
      "Scikit-learn",
      "PostgreSQL",
      "TimescaleDB",
      "Mosquitto MQTT",
      "Docker",
    ],
    githubUrl:
      "https://github.com/Pragadeesh-D/AI-Powered-EB-Smart-Meter-FYP",
    liveUrl: null,
    featured: true,
    context: "Final Year Academic Project (FYP)",
    features: [
      "Electricity consumption monitoring and tracking",
      "Billing estimation",
      "Simulated meter control",
      "LSTM-based short-term consumption forecasting",
      "Isolation Forest anomaly detection",
      "Overload and voltage spike/drop monitoring",
      "TimescaleDB time-series data storage",
      "MQTT communication (Mosquitto)",
      "Docker-based infrastructure setup",
    ],
    overview:
      "A simulation-based academic project that models an AI-powered electricity monitoring system for domestic EB meters. The system integrates time-series storage, ML forecasting, and anomaly detection in a Dockerised architecture.",
    problem:
      "Traditional electricity meters provide limited feedback to consumers about their usage patterns. Anomalies such as voltage spikes or unusual consumption often go undetected until billing disputes arise.",
    goal: "Design and implement a simulation-based system that demonstrates how AI/ML techniques (LSTM forecasting, Isolation Forest anomaly detection) can enhance electricity monitoring for domestic meters — as an academic final-year project.",
    approach:
      "Simulated IoT data generation via MQTT. Used TimescaleDB (PostgreSQL extension) for time-series storage. Built LSTM models for short-term consumption forecasting. Applied Isolation Forest for anomaly detection on consumption data. Flask backend exposes API endpoints. Docker Compose orchestrates all services.",
    architecture:
      "IoT Simulator → MQTT Broker (Mosquitto) → Flask Backend → TimescaleDB (PostgreSQL + TimescaleDB) → ML Models (LSTM + Isolation Forest) → Frontend Dashboard. All services containerised with Docker Compose.",
    challenges: [
      "Designing realistic IoT data simulation that mimics domestic usage patterns",
      "Configuring TimescaleDB with appropriate hypertables for time-series queries",
      "Training and tuning LSTM models on simulated consumption data",
      "Orchestrating multiple services (MQTT, Flask, PostgreSQL, ML) with Docker Compose",
    ],
    results:
      "Successfully implemented a functional simulation demonstrating LSTM-based consumption forecasting and Isolation Forest anomaly detection in a Dockerised environment. The system correctly identified simulated anomaly events in test data.",
    type: "featured",
  },
];

export const dataProjects = [
  {
    id: "shopanalyze",
    name: "ShopAnalyze: E-Commerce Performance",
    tagline: "Revenue driver analysis and customer buying pattern insights",
    category: "Data Analytics",
    categoryColor: "data",
    description:
      "Analysed e-commerce sales data to identify revenue drivers, understand customer buying patterns, and surface actionable insights. Used SQL for data extraction and analysis, Power BI for interactive dashboards, and Excel for data preparation.",
    technologies: ["SQL", "Power BI", "Excel", "Python"],
    githubUrl:
      "https://github.com/Pragadeesh-D/Data-Analytics-Portfolio/tree/main/Ecommerce-Sales-Analysis",
    readmeUrl:
      "https://github.com/Pragadeesh-D/Data-Analytics-Portfolio/blob/main/Ecommerce-Sales-Analysis/README.md",
    liveUrl: null,
    featured: false,
    focus: [
      "E-commerce performance analysis",
      "Revenue driver identification",
      "Customer buying pattern analysis",
      "SQL-based data analysis",
      "Power BI dashboard",
    ],
    type: "data",
  },
  {
    id: "netflix-analysis",
    name: "Netflix: Content Strategy Analysis",
    tagline:
      "Exploring content trends, genre patterns, and global distribution across 8,000+ titles",
    category: "Data Analytics",
    categoryColor: "data",
    description:
      "Performed exploratory data analysis on Netflix's content catalog (8,000+ rows of metadata) to identify content strategy patterns. Analysed movies vs. TV shows distribution, genre trends, and geographic content patterns using Python, Pandas, and data visualisation libraries.",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
    githubUrl:
      "https://github.com/Pragadeesh-D/Data-Analytics-Portfolio/tree/main/Netflix-Data-Analysis",
    readmeUrl:
      "https://github.com/Pragadeesh-D/Data-Analytics-Portfolio/blob/main/Netflix-Data-Analysis/README.md",
    liveUrl: null,
    featured: false,
    focus: [
      "Content catalog analysis",
      "Movies vs. TV shows distribution",
      "Genre trend analysis",
      "Geographic content patterns",
      "Exploratory data analysis",
      "Data visualisation",
    ],
    type: "data",
  },
  {
    id: "roadsafe",
    name: "RoadSafe: UK Accident Risk Analysis",
    tagline:
      "Accident severity, regional patterns, and seasonal trends across 1.4M records",
    category: "Data Analytics",
    categoryColor: "data",
    description:
      "Analysed 1.4 million UK road accident records to surface accident severity patterns, identify high-risk regions, and detect seasonal trends. Used Python/Pandas for data processing and Power BI for interactive reporting and visualisation.",
    technologies: [
      "Python",
      "Pandas",
      "Power BI",
      "Data Visualisation",
      "Data Analysis",
    ],
    githubUrl:
      "https://github.com/Pragadeesh-D/Data-Analytics-Portfolio/tree/main/Road-Accident-Data-Analysis",
    readmeUrl:
      "https://github.com/Pragadeesh-D/Data-Analytics-Portfolio/blob/main/Road-Accident-Data-Analysis/README.md",
    liveUrl: null,
    featured: false,
    focus: [
      "Large-scale data analysis (1.4M records)",
      "Accident severity classification",
      "Regional pattern analysis",
      "Seasonal trend detection",
      "Power BI automated reporting",
    ],
    type: "data",
  },
];

export const internshipProjects = [
  {
    id: "number-guessing-game",
    name: "Number Guessing Game",
    description:
      "Console-based Java game with random number generation, user input handling, and attempt tracking.",
    technologies: ["Java", "OOP"],
  },
  {
    id: "student-grade-calculator",
    name: "Student Grade Calculator",
    description:
      "Calculates student grades from input marks with validation, average computation, and letter-grade assignment.",
    technologies: ["Java", "OOP"],
  },
  {
    id: "atm-interface",
    name: "ATM Interface",
    description:
      "Simulated ATM system with account balance management, deposit, withdrawal, and PIN validation.",
    technologies: ["Java", "OOP", "Collections"],
  },
  {
    id: "currency-converter",
    name: "Currency Converter",
    description:
      "Converts between currencies using exchange rates, with input validation and formatted output.",
    technologies: ["Java", "OOP"],
  },
  {
    id: "student-management-system",
    name: "Student Management System",
    description:
      "CRUD operations for student records with file-based persistence and collection-based in-memory storage.",
    technologies: ["Java", "OOP", "Collections", "File I/O"],
  },
];

// Helper: get all projects for routing
export const allProjects = [...featuredProjects, ...dataProjects];
