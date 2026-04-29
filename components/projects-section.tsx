"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { motion, easeOut } from "framer-motion" // Import motion and easeOut from framer-motion

const projects = [
  // {
  //   title: "Full-Stack ORM Platform",
  //   description:
  //     "A comprehensive platform for real-time brand monitoring and sentiment analysis, built with a web scraping engine and a dynamic analytics dashboard.",
  //   technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Web Scraping", "REST APIs", "JWT"],
  //   links: [
  //     { label: "Frontend", url: "https://github.com/NayanKarIITP/ORM_Frontend" },
  //     { label: "Backend", url: "https://github.com/NayanKarIITP/ORM_Backend" },
  //   ],
  // },
  {
    title: "DocIQ — Multimodal RAG System",
    description:
      "A powerful multimodal Retrieval-Augmented Generation (RAG) system that processes text, images, and tables using advanced embeddings, vector search, and LLM fine-tuning for high-accuracy responses.",
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Qdrant",
      "Gemini API",
      "Docker",
      "LoRA",
      "DPO",
      "RAG",
      "LLMs"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/NayanKarIITP/DocIQ-/" }
    ],
  },

  {
    title: "AI Career Copilot",
    description:
      "An AI-powered career assistant that analyzes resumes, tracks behavioral signals, and provides real-time interview feedback using computer vision and machine learning techniques.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Gemini API",
      "MongoDB",
      "Machine Learning"
    ],
    links: [
      { label: "Frontend", url: "https://github.com/NayanKarIITP/CarrierCopilot_Frontend" },
      { label: "Backend", url: "https://github.com/NayanKarIITP/CarrierCopilot" },
      { label: "Live Demo", url: "https://carrier-copilot.vercel.app/" },
    ],
  },

  {
    title: "Financial Sentiment Stock Predictor",
    description:
      "An end-to-end machine learning system that predicts stock price movement using financial news sentiment and technical indicators, with explainability and real-time dashboard integration.",
    technologies: [
      "Python",
      "XGBoost",
      "FinBERT",
      "FastAPI",
      "Streamlit",
      "MLflow",
      "SHAP"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/NayanKarIITP/financial-sentiment-predictor" }
    ],
  },
  {
    title: "TechTribe — Developer Social Platform",
    description:
      "A social platform for developers to connect, collaborate on projects, and chat in real-time about technical skills.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Web Sockets"],
    links: [
      { label: "Web App", url: "https://github.com/NayanKarIITP/DevTinde_Web" },
      { label: "Server", url: "https://github.com/NayanKarIITP/devTinder" },
      { label: "Live Demo", url: "https://techtribe-delta.vercel.app/" },
    ],
  },
  {
    title: "Movie Recommender System",
    description:
      "A machine learning model that suggests movies to users based on their viewing history and content-based filtering.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    links: [{ label: "GitHub", url: "https://github.com/NayanKarIITP/Movie-Recommender-System_Ml" }],
  },
  {
    title: "E-Commerce Profitability Prediction",
    description:
      "A data-driven model to predict the profitability of e-commerce products using various features and machine learning algorithms.",
    technologies: ["Python", "NumPy", "Pandas", "Machine Learning"],
    links: [{ label: "GitHub", url: "https://github.com/NayanKarIITP/E-Commerce_Profitability_Prediction" }],
  },
  {
    title: "Hospital Management System",
    description:
      "A console-based application for managing patient records, appointments, and hospital resources, focusing on efficient data handling.",
    technologies: ["C++", "Data Structures"],
    links: [{ label: "GitHub", url: "https://github.com/NayanKarIITP/Hospital-Management" }],
  },
]

// Animation variants for the main grid container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger the animation of individual project cards
      delayChildren: 0.2,
    },
  },
}

// Animation variants for each project card
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut, // Use the imported easeOut function
    },
  },
}

// Animation variants for technology tags
const techTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easeOut, // Use the imported easeOut function
    },
  },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Animate when 10% of the grid is visible
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -5, // Lift effect
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 0 30px rgba(100, 255, 218, 0.2)", // Enhanced glow shadow
                transition: { duration: 0.2 },
              }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={techTagVariants} // Apply animation to each tag
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.links.map((link) => (
                        <motion.div key={link.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" variant="outline" className="text-xs bg-transparent" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3.5 w-3.5 mr-1" /> {/* Slightly larger icon */}
                              {link.label}
                            </a>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {/* === START: NEW SECTION === */}
        <motion.div
          className="text-center mt-16" // Added margin-top for spacing
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Want to See More?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Check out my GitHub profile for a full list of my projects, contributions, and coding activity.
          </p>
          <Button asChild size="lg">
            <a href="https://github.com/NayanKarIITP" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Explore More on GitHub
            </a>
          </Button>
        </motion.div>
        {/* === END: NEW SECTION === */}
      </div>
    </section>
  )
}