// "use client"

// import React, { useState } from "react"

// export function ContactSection() {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   // State for submission status and feedback
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [statusMessage, setStatusMessage] = useState("")
//   const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

//   // API endpoint from your backend
//   const API_ENDPOINT = "http://localhost:5000/api/messages"

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setStatusMessage("")
//     setIsSuccess(null)

//     try {
//       const response = await fetch(API_ENDPOINT, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         // Handle server-side validation errors or other issues
//         throw new Error(result.msg || "Something went wrong.")
//       }

//       // Handle success with the new, unique message
//       setIsSuccess(true)
//       setStatusMessage("Thank you for reaching out! I've received your message and will get back to you shortly.")
//       // Reset form on success
//       setFormData({ name: "", email: "", message: "" })
//     } catch (error: any) {
//       // Handle fetch errors or errors thrown from the response
//       setIsSuccess(false)
//       setStatusMessage(error.message || "Failed to send message. Please try again later.")
//     } finally {
//       // Re-enable the button after the process is complete
//       setIsSubmitting(false)
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   return (
//     <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//             Get In <span className="text-blue-500">Touch</span>
//           </h2>
//           <p className="text-lg text-gray-400">Feel free to message me!</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Contact Information */}
//           <div className="space-y-6">
//             <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <span className="text-blue-500">📞</span>
//                     <span className="text-gray-400">+91 9832254860</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <span className="text-blue-500">✉️</span>
//                     <span className="text-gray-400">nayan101kar@gmail.com</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md">
//                <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-6 text-white">Connect With Me</h3>
//                 <div className="flex space-x-4">
//                   <a href="https://github.com/NayanKarIITP" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700">
//                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
//                       GitHub
//                   </a>
//                   <a href="https://linkedin.com/in/nayankar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
//                       LinkedIn
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md">
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-white">Send Message</h3>
//             </div>
//             <div className="p-6 pt-0">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//                 />
//                 <button type="submit" className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50" disabled={isSubmitting}>
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
//                       Send Message
//                     </>
//                   )}
//                 </button>
//                 {/* Submission Status Message */}
//                 {statusMessage && (
//                   <div
//                     className={`flex items-center text-sm p-3 rounded-md ${
//                       isSuccess ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
//                     }`}
//                   >
//                     <span className="h-4 w-4 mr-2">{isSuccess ? '✓' : '✗'}</span>
//                     {statusMessage}
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// --- Helper Components for Icons ---
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
// --- End of Icon Components ---

const contactLinks = [
  { icon: PhoneIcon, href: "tel:+919832254860", label: "Phone", color: "#64ffda" },
  { icon: MailIcon, href: "mailto:nayan101kar@gmail.com", label: "Email", color: "#00bfff" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/nayan-kar-8221392a8", label: "LinkedIn", color: "#dc2626" },
  { icon: GithubIcon, href: "https://github.com/NayanKarIITP", label: "GitHub", color: "#f59e0b" },
]

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

const orbiterItemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as "spring", stiffness: 300, damping: 20 } },
}

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as "spring", stiffness: 300, damping: 25 } },
  exit: { opacity: 0, scale: 0.9, y: 20 },
}

export default function ContactSection() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const animationFrameId = useRef<number>()
  const [rotation, setRotation] = useState(0)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
  const API_ENDPOINT = "http://localhost:5000/api/messages"

  useEffect(() => {
    const animate = () => {
      const speed = hoveredIcon ? 0.2 : 0.03
      setRotation((prev) => (prev + speed) % 360)
      animationFrameId.current = requestAnimationFrame(animate)
    }
    animationFrameId.current = requestAnimationFrame(animate)
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [hoveredIcon])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setIsSuccess(null);

    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.msg || "Something went wrong.");
        }

        setIsSuccess(true);
        setStatusMessage("Thank you for reaching out! I've received your message and will get back to you shortly.");
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          setShowContactForm(false);
          setStatusMessage("");
        }, 2000);

    } catch (error: any) {
        setIsSuccess(false);
        setStatusMessage(error.message || "Failed to send message.");
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <motion.section
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-900 text-white"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-teal-300 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-400">Ready to collaborate on something amazing?</p>
        </motion.div>

        <motion.div
          className="relative flex flex-col items-center mb-16"
          variants={containerVariants}
        >
          <div className="relative w-80 h-80">
            <motion.button
              onClick={() => setShowContactForm(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-500/10 border border-teal-500/30 rounded-full flex flex-col items-center justify-center text-teal-300 z-10"
              style={{ boxShadow: `0 0 30px rgba(100, 255, 218, 0.2)` }}
              variants={orbiterItemVariants}
              whileHover={{ scale: 1.1, boxShadow: `0 0 40px rgba(100, 255, 218, 0.4)` }}
              whileTap={{ scale: 0.95 }}
            >
              <SendIcon />
              <span className="text-sm font-semibold mt-1">Send Message</span>
            </motion.button>

            {contactLinks.map((contact, index) => {
              const angle = index * 90 + rotation
              const radius = 130
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius
              const IconComponent = contact.icon

              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 left-1/2 w-12 h-12 flex items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${contact.color}20`,
                    border: `1px solid ${contact.color}40`,
                  }}
                  animate={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                  variants={orbiterItemVariants}
                  whileHover={{ scale: 1.2, boxShadow: `0 0 20px ${contact.color}60` }}
                  onMouseEnter={() => setHoveredIcon(contact.label)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <IconComponent />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showContactForm && (
          <motion.div
            className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center p-4"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="relative max-w-md w-full bg-gray-800/80 border border-gray-700 rounded-2xl shadow-2xl p-8"
              variants={modalContentVariants}
              // The exit variant is inherited from the parent AnimatePresence context
            >
              <motion.div
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants} // Stagger form elements
              >
                <motion.div variants={itemVariants} className="text-center mb-2">
                  <h3 className="text-2xl font-bold text-teal-300 mb-2">Get In Touch</h3>
                  <p className="text-gray-400">Let's discuss your next project</p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.input
                    name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    variants={itemVariants}
                  />
                  <motion.input
                    name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    variants={itemVariants}
                  />
                  <motion.textarea
                    name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required rows={4}
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                    variants={itemVariants}
                  />
                  <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                    <motion.button type="button" onClick={() => setShowContactForm(false)}
                      className="flex-1 py-3 px-4 bg-transparent border border-gray-600 text-gray-300 rounded-lg"
                      whileHover={{ backgroundColor: '#374151' }} whileTap={{ scale: 0.95 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button type="submit"
                      className="flex-1 py-3 px-4 bg-teal-500 text-gray-900 font-bold rounded-lg disabled:opacity-50 flex items-center justify-center"
                      disabled={isSubmitting} whileHover={{ backgroundColor: '#14b8a6' }} whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : "Send Message"}
                    </motion.button>
                  </motion.div>
                  {statusMessage && (
                    <motion.div
                      className={`text-center p-3 rounded-lg text-sm ${isSuccess ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    >
                      {statusMessage}
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}