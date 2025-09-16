// import { Card, CardContent } from "@/components/ui/card"
// import { Code, Globe, Server, Database, Brain, GitBranch } from "lucide-react"

// const skillCategories = [
//   {
//     title: "Languages",
//     icon: Code,
//     skills: ["Python", "C++", "JavaScript"],
//   },
//   {
//     title: "Frontend",
//     icon: Globe,
//     skills: ["React", "Next.js", "HTML5", "CSS3", "UI/UX"],
//   },
//   {
//     title: "Backend",
//     icon: Server,
//     skills: ["Node.js", "Express.js"],
//   },
//   {
//     title: "Databases",
//     icon: Database,
//     skills: ["MongoDB"],
//   },
//   {
//     title: "Data Science & ML",
//     icon: Brain,
//     skills: ["Machine Learning", "Deep Learning", "NumPy", "Pandas", "Matplotlib"],
//   },
//   {
//     title: "Core Skills",
//     icon: GitBranch,
//     skills: ["Data Structures & Algorithms", "REST APIs", "Web Sockets", "Git"],
//   },
// ]

// export function SkillsSection() {
//   return (
//     <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
//           Technical <span className="text-primary">Skills</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillCategories.map((category, index) => {
//             const IconComponent = category.icon
//             return (
//               <Card
//                 key={index}
//                 className="bg-card/20 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
//               >
//                 <CardContent className="p-6">
//                   <div className="flex items-center mb-6">
//                     <IconComponent className="h-8 w-8 text-primary mr-3" />
//                     <h3 className="text-xl font-semibold text-white">{category.title}</h3>
//                   </div>
//                   <div className="space-y-2">
//                     {category.skills.map((skill, skillIndex) => (
//                       <div
//                         key={skillIndex}
//                         className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
//                       >
//                         <div className="w-2 h-2 bg-primary rounded-full"></div>
//                         <span className="text-white/90 font-medium">{skill}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain, Server, Globe, Cpu } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C++", "JavaScript"],
  },
  {
    title: "Data Science & ML",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "NumPy", "Pandas", "SciPy", "Matplotlib"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "HTML", "CSS", "WebSockets"],
  },
  {
    title: "Core CS & Design",
    icon: Cpu,
    skills: ["Data Structures & Algorithms (C++)", "UI/UX Design"],
  },
]

// Animation variants for the main container to stagger children
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut", // use a valid string easing
    },
  },
}

// Animation variants for individual skill items within a card
const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <Card className="bg-card/20 border-primary/20 hover:border-primary/50 transition-colors duration-300 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <IconComponent className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    </div>
                    <motion.div
                      className="space-y-2"
                      // This creates a nested stagger effect for the skills inside each card
                      variants={gridContainerVariants}
                    >
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          className="flex items-center space-x-3 p-2 rounded-lg"
                          variants={skillItemVariants}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-white/90 font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}