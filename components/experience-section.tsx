// import { Card, CardContent } from "@/components/ui/card"
// import { Calendar } from "lucide-react"

// export function ExperienceSection() {
//   return (
//     <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
//           Professional <span className="text-primary">Experience</span>
//         </h2>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>

//           <Card className="ml-12 bg-card border-border">
//             <CardContent className="p-6">
//               <div className="absolute -left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
//                 <h3 className="text-xl font-semibold text-foreground">Full-Stack Developer Intern</h3>
//                 <div className="flex items-center text-muted-foreground text-sm mt-1 sm:mt-0">
//                   <Calendar className="h-4 w-4 mr-1" />
//                   June 2025 - August 2025 (3 Months)
//                 </div>
//               </div>

//               <p className="text-primary font-medium mb-2">Under the guidance of Dr. Joydeep Chandra</p>

//               <ul className="space-y-2 text-muted-foreground">
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Developed and maintained features for a client-facing web application using the MERN stack.
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Collaborated on designing the REST API architecture and database schema with MongoDB.
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Contributed to both frontend (React) and backend (Node.js) components, ensuring seamless integration.
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Participated in code reviews and agile development cycles to deliver high-quality software.
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Data for the experience item, including a new `technologies` array
const experience = {
  title: "AI & Full-Stack Developer Intern",
  company: "Under the guidance of Dr. Joydeep Chandra",
  period: "June 2025 - Present",
  description: [
    "Developed and maintained features for a client-facing web application using the MERN stack.",
    "Collaborated on designing the REST API architecture and database schema with MongoDB.",
    "Contributed to both frontend (React) and backend (Node.js) components, ensuring seamless integration.",
    "Participated in code reviews and agile development cycles to deliver high-quality software.",
  ],
  technologies: ["React", "Node.js", "MongoDB", "Express.js", "MERN Stack", "REST API"],
}

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
          <Card
            className={`ml-12 bg-card border-border transition-all duration-700 ease-out group hover:border-primary/50 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <CardContent className="p-6">
              {/* Animated Timeline Node */}
              <div
                className={`absolute -left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background transition-transform duration-500 delay-300 group-hover:scale-110 ${
                  isVisible ? "scale-100" : "scale-0"
                }`}
              ></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                <div className="flex items-center text-muted-foreground text-sm mt-1 sm:mt-0">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  {experience.period}
                </div>
              </div>

              <p className="text-primary font-medium mb-3">{experience.company}</p>

              <ul className="space-y-2 text-muted-foreground mb-4">
                {experience.description.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Highlighted Technologies Section */}
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
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
        </div>
      </div>
    </section>
  )
}