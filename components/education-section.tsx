"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import { motion, easeOut } from "framer-motion"

// Animation variants for the main container to stagger its children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

// Animation variants for individual items sliding in
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut, // use the imported easing function
    },
  },
}

export function EducationSection() {
  return (
    <motion.section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          <span className="text-primary">Education</span>
        </motion.h2>

        <motion.div className="space-y-6" variants={containerVariants}>
          {/* Main Degree Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-card border-border hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <motion.div
                    animate={{ y: [0, -4, 0] }} // Gentle bobbing animation
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Bachelor of Science in Computer Science and Data Analytics
                    </h3>
                    <p className="text-primary font-medium mb-2">Indian Institute of Technology (IIT Patna)</p>
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm"
                      variants={containerVariants} // Nested stagger for the scores
                    >
                      <motion.div className="flex items-center" variants={itemVariants}>
                        <Award className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Current SPI: </span>
                        <span className="font-semibold text-foreground ml-1">9.75</span>
                      </motion.div>
                      <motion.div className="flex items-center" variants={itemVariants}>
                        <Award className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">CGPA: </span>
                        <span className="font-semibold text-foreground ml-1">8.21</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Secondary Education Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Higher Secondary Education</h4>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Score: </span>
                    <span className="font-semibold text-foreground ml-1">88.9%</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Secondary Education</h4>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Score: </span>
                    <span className="font-semibold text-foreground ml-1">83%</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}