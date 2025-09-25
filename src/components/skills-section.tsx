"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  HeartIcon as ReactIcon,
  Type,
  MailMinus as Tailwind,
  Fuel as Vue,
  Code as Node,
  BathIcon as Python,
  Database,
  BarChart as PowerBI,
  PieChart as Tableau,
  Network,
  Smartphone,
  Palette,
  Shield,
  Braces as Django,
  SmartphoneCharging as Kotlin,
  Badge as Swift,
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React/Next.js", icon: ReactIcon },
      { name: "TypeScript", icon: Type },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Vue.js", icon: Vue },
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: Node },
      { name: "Django", icon: Django },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
    ],
  },
  {
    title: "Mobile Technologies",
    skills: [
      { name: "React Native", icon: Smartphone },
      { name: "Flutter", icon: Palette },
      { name: "Kotlin", icon: Kotlin },
      { name: "Swift", icon: Swift },
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: "Python", icon: Python },
      { name: "SQL", icon: Database },
      { name: "Power BI", icon: PowerBI },
      { name: "Tableau", icon: Tableau },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Technologies We <span className="text-primary">Master</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Our team stays at the forefront of technology, continuously learning
            and mastering the latest tools and frameworks to deliver
            cutting-edge solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                        duration: 0.6,
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center justify-center p-4 bg-card/50 rounded-lg border border-border/30 text-center shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-primary mb-2" />
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
