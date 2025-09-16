// export function AboutSection() {
//   return (
//     <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
//           About <span className="text-primary">Me</span>
//         </h2>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="text-lg text-white/90 leading-relaxed">
//             <p className="mb-6">
//               I'm a Computer Science and Data Analytics student at the Indian Institute of Technology, driven by a
//               passion for building things that matter. From architecting scalable backend systems to developing machine
//               learning models that uncover hidden truths, I am committed to a journey of continuous learning and
//               innovation.
//             </p>
//             <p>
//               My work is defined by precision, performance, and a deep curiosity for what's possible at the intersection
//               of software engineering and data science.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
//               <div className="w-3 h-3 bg-primary rounded-full"></div>
//               <span className="text-white font-medium text-lg">Clean Code</span>
//             </div>
//             <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
//               <div className="w-3 h-3 bg-primary rounded-full"></div>
//               <span className="text-white font-medium text-lg">Scalable Architecture</span>
//             </div>
//             <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
//               <div className="w-3 h-3 bg-primary rounded-full"></div>
//               <span className="text-white font-medium text-lg">Data-Driven Decisions</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




"use client"

import { motion, easeOut } from "framer-motion"

// Data for the principles to keep the JSX clean
const principles = ["Clean Code", "Scalable Architecture", "Data-Driven Decisions"]

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
}

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      // These props trigger the animation when the section scrolls into view
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animate once, when 30% of the section is visible
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Animated text and a new decorative orb */}
          <motion.div variants={itemVariants} className="relative text-lg text-white/90 leading-relaxed">
            {/* Animated background orb for visual flair */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <p className="mb-6">
              I'm a Computer Science and Data Analytics student at the Indian Institute of Technology, driven by a
              passion for building things that matter. From architecting scalable backend systems to developing machine
              learning models that uncover hidden truths, I am committed to a journey of continuous learning and
              innovation.
            </p>
            <p>
              My work is defined by precision, performance, and a deep curiosity for what's possible at the intersection
              of software engineering and data science.
            </p>
          </motion.div>

          {/* Right Side: Staggered and interactive principles list */}
          <motion.div variants={containerVariants} className="space-y-4">
            {principles.map((text) => (
              <motion.div
                key={text}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 5 }} // Interactive hover effect
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-primary/10 border border-primary/20 cursor-pointer"
              >
                <motion.div
                  className="w-3 h-3 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-white font-medium text-lg">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}