
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Data for the experience item, including a new `technologies` array
const experience = [
  {
    title: "AI/ML Intern",
    company: "TalentXM",
    period: "June 2026 - Present",
    description: [
      "Built AI-powered healthcare automation workflows using Workato Agentic Studio and MCP Skills.",
      "Integrated Availity and Optum REST APIs for claims processing, payer resolution, and denial management.",
      "Developed rule-based automation for denial classification, appeal routing, testing, and deployment.",
      "Collaborated on building scalable AI workflows to streamline healthcare revenue cycle operations."
    ],
    technologies: [
      "Workato",
      "MCP Skills",
      "REST APIs",
      "Availity API",
      "Optum API",
      "Healthcare AI",
      "Automation",
      "Agentic AI"
    ],
  },

  {
    title: "Software Engineer Intern",
    company: "ProdeskIT",
    period: "January 2026 - May 2026",
    description: [
      "Developed REST APIs and backend services using Node.js, Express.js, and MongoDB.",
      "Built data preprocessing pipelines for machine learning workflows.",
      "Optimized database queries and backend APIs to improve system performance.",
      "Collaborated on scalable backend development for AI-powered applications."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Python",
      "Machine Learning",
      "Backend Development"
    ],
  },

  {
    title: "Research Intern",
    company: "Indian Institute of Technology Patna (Under Prof. Joydeep Chandra)",
    period: "June 2025 - September 2025",
    description: [
      "Developed backend services and assessment workflows for an AI-powered soft skills assessment platform.",
      "Designed feature-based assessment logic, question tagging, and automated scoring.",
      "Implemented scalable REST APIs, RBAC, and analytics dashboards.",
      "Built feature-wise student performance evaluation modules for communication and language skills."
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "REST APIs",
      "RBAC",
      "Backend Development"
    ],
  },
]
export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // This effect observes the component and sets `isVisible` to true
  // when it enters the viewport, triggering the animation.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // Stop observing after animation triggers once
        }
      },
      { threshold: 0.2 }, // Trigger animation when 20% of the component is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div ref={sectionRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          {/* Animated Experience Card */}
          {experience.map((item, index) => (
            <Card
              key={`${item.title}-${index}`}
              className={`ml-12 bg-card border-border transition-all duration-700 ease-out group hover:border-primary/50 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              } mb-8 last:mb-0`}
            >
              <CardContent className="p-6">
                {/* Animated Timeline Node */}
                <div
                  className={`absolute -left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background transition-transform duration-500 delay-300 group-hover:scale-110 ${
                    isVisible ? "scale-100" : "scale-0"
                  }`}
                ></div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mt-1 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    {item.period}
                  </div>
                </div>

                <p className="text-primary font-medium mb-3">{item.company}</p>

                <ul className="space-y-2 text-muted-foreground mb-4">
                  {item.description.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Highlighted Technologies Section */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 cursor-default hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}