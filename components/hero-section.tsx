// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
// import { useState, useEffect } from "react"

// export function HeroSection() {
//   const [showTyping, setShowTyping] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => setShowTyping(true), 500)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
//     >
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
//         <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"></div>
//         <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-1000"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping delay-500"></div>
//         <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
//         <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-primary rounded-full animate-ping delay-300"></div>
//       </div>

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
//         <div className="text-left">
//           <h1 className="text-6xl sm:text-7xl font-bold mb-6">
//             {showTyping ? (
//               <span className="typing-animation inline-block">Nayan Kar</span>
//             ) : (
//               <span className="text-white">Nayan Kar</span>
//             )}
//           </h1>

//           <h2 className="text-2xl sm:text-3xl text-primary mb-8 font-semibold">Software Engineer & Data Scientist</h2>

//           <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed">
//             I design and build high-performance software and intelligent data models. As a passionate innovator from
//             IIT, I architect elegant solutions for complex challenges, bridging the gap between cutting-edge code and
//             insightful data.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 mb-8">
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 bg-transparent"
//               asChild
//             >
//               <a href="#projects">
//                 Explore My Work
//                 <ArrowDown className="ml-2 h-5 w-5" />
//               </a>
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-2 border-white text-white hover:bg-white hover:text-background text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 bg-transparent"
//               asChild
//             >
//               <a href="/IIT_Patna_Resume_Final.pdf" target="_blank" rel="noreferrer">
//                 <Download className="mr-2 h-5 w-5" />
//                 Download Resume
//               </a>
//             </Button>
//           </div>
//         </div>

//         <div className="flex justify-center lg:justify-end">
//           <div className="relative">
//             <div className="w-80 h-80 rounded-full border-4 border-primary overflow-hidden glow-effect hover:scale-105 transition-all duration-300">
//               <img
//                 src="/NK.png"
//                 alt="Nayan Kar - Professional Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-8">
//         <a
//           href="https://github.com/NayanKarIITP"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white/70 hover:text-primary transition-all duration-300 transform hover:scale-125"
//         >
//           <Github className="h-6 w-6" />
//           <span className="sr-only">GitHub</span>
//         </a>
//         <a
//           href="https://linkedin.com/in/nayan-kar-8221392a8"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white/70 hover:text-primary transition-all duration-300 transform hover:scale-125"
//         >
//           <Linkedin className="h-6 w-6" />
//           <span className="sr-only">LinkedIn</span>
//         </a>
//         <a
//           href="mailto:nayan101kar@gmail.com"
//           className="text-white/70 hover:text-primary transition-all duration-300 transform hover:scale-125"
//         >
//           <Mail className="h-6 w-6" />
//           <span className="sr-only">Email</span>
//         </a>
//       </div>
//     </section>
//   )
// }




"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, easeOut } from "framer-motion" // Import motion and easeOut from framer-motion

export default function HeroSection() {
const [showTyping, setShowTyping] = useState(false)

useEffect(() => {
// A simple delay to trigger the CSS typing animation
const timer = setTimeout(() => setShowTyping(true), 500)
return () => clearTimeout(timer)
}, [])

const scrollToProjects = () => {
document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
}

// Animation variants for Framer Motion
const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.3,
},
},
}

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

const socialVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
}

return (
<section
id="hero"
className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
>
{/* Animated background particles */}
<div className="absolute inset-0 overflow-hidden -z-10">
<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
<div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"></div>
<div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-1000"></div>
<div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping delay-500"></div>
<div className="absolute top-1/2 left-1/6 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
<div className="absolute top-3/4 right-1/6 w-2 h-2 bg-primary rounded-full animate-ping delay-300"></div>
</div>

  <motion.div
    className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Left Content */}
    <div className="text-left">
      <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl font-bold mb-6">
        {showTyping ? (
          <span className="typing-animation inline-block">Nayan Kar</span>
        ) : (
          // Fallback for when animation is not yet active
          <span className="text-white opacity-0">Nayan Kar</span>
        )}
      </motion.h1>

      <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl text-primary mb-8 font-semibold">
        Aspiring Software Engineer & AI/ML Engineer
      </motion.h2>

      <motion.p variants={itemVariants} className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed">
As an aspiring Software and AI/ML Engineer from IIT, I'm passionate about building high-performance software and intelligent data models. I thrive on architecting elegant solutions for complex challenges, aiming to bridge the gap between cutting-edge code and insightful data.


      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-8">
        <Button
          size="lg"
          variant="outline"
          onClick={scrollToProjects}
          className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 bg-transparent"
        >
          Explore My Work
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-white text-white hover:bg-white hover:text-background text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 bg-transparent"
          asChild
        >
          <a href="/IIT_Patna_Resume_Final.pdf" target="_blank" rel="noreferrer">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </Button>
      </motion.div>
    </div>

    {/* Right Content - Profile Picture */}
    <div className="flex justify-center lg:justify-end">
      <motion.div variants={itemVariants} className="relative">
        <div className="w-80 h-80 rounded-full border-4 border-primary overflow-hidden glow-effect hover:scale-105 transition-all duration-300">
          <img
            src="/NK.png"
            alt="Nayan Kar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>
    </div>
  </motion.div>

  {/* Social Links at the bottom */}
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-8"
    variants={socialVariants}
    initial="hidden"
    animate="visible"
  >
    <a
      href="[https://github.com/NayanKarIITP](https://github.com/NayanKarIITP)"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/70 hover:text-primary transition-all duration-300 transform hover:scale-125"
    >
      <Github className="h-6 w-6" />
      <span className="sr-only">GitHub</span>
    </a>
    <a
      href="[https://linkedin.com/in/nayan-kar-8221392a8](https://linkedin.com/in/nayan-kar-8221392a8)"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/70 hover:text-primary transition-all duration-300 transform hover:scale-125"
    >
      <Linkedin className="h-6 w-6" />
      <span className="sr-only">LinkedIn</span>
    </a>
    <a
      href="mailto:nayan101kar@gmail.com"
      className="text-white/70 hover:text-primary transition-all duration-300 transform hover:scale-125"
    >
      <Mail className="h-6 w-6" />
      <span className="sr-only">Email</span>
    </a>
  </motion.div>
</section>
)
}