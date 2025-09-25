"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Lead Architect",
    image: "/portrait-of-a-woman--professional--smiling.jpg",
    resume: "/resumes/jane-doe-resume.pdf",
  },
  {
    name: "John Smith",
    role: "Head of Development",
    image: "/portrait-of-a-man--professional--smiling.jpg",
    resume: "/resumes/john-smith-resume.pdf",
  },
  {
    name: "Emily White",
    role: "UI/UX Designer",
    image: "/portrait-of-a-woman--creative--smiling.jpg",
    resume: "/resumes/emily-white-resume.pdf",
  },
  {
    name: "David Green",
    role: "Cloud Engineer",
    image: "/portrait-of-a-man--technical--smiling.jpg",
    resume: "/resumes/david-green-resume.pdf",
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Meet Our <span className="text-primary">Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We are a passionate group of professionals dedicated to delivering exceptional IT solutions.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              className="bg-card border border-border/50 rounded-lg p-6 flex flex-col items-center text-center shadow-sm transition-all duration-300"
            >
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full object-cover mb-4 border-2 border-primary/50"
              />
              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href={member.resume} download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
