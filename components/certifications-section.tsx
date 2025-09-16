"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase as Certificate } from "lucide-react"
import { motion, easeInOut } from "framer-motion"

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    description: "Foundational knowledge of AI and Machine Learning services on Oracle Cloud Infrastructure (OCI).",
  },
  {
    title: "Decode C++ with DSA",
    issuer: "Physics Wallah",
    description: "In-depth course on Data Structures and Algorithms using the C++ programming language.",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    description: "Comprehensive course covering supervised and unsupervised learning algorithms.",
  },
]

// Animation variants for the grid container to stagger the cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Animation variants for each individual card
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeInOut, // use the imported easing function
    },
  },
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary">Certifications</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.04 }} // Lift and scale on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <motion.div
                      animate={{ rotate: [-3, 3, -3] }} // Gentle wobble animation
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Certificate className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground text-base leading-tight">{cert.title}</h3>
                      <p className="text-primary text-sm font-medium mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}