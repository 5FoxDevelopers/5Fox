"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Database,
  Smartphone,
  BarChart3,
  Server,
  Layers,
  Globe,
} from "lucide-react"

// You'll need to install react-icons: npm install react-icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiPython,
  SiMysql,
  SiPowers,
  SiTableau,
} from "react-icons/si"

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Modern web interfaces & user experiences",
    icon: Code2,
    skills: [
      { name: "React.js", icon: SiReact, lightColor: "#61DAFB", darkColor: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, lightColor: "#000000", darkColor: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, lightColor: "#3178C6", darkColor: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, lightColor: "#F7DF1E", darkColor: "#F7DF1E" },
      { name: "TailwindCSS", icon: SiTailwindcss, lightColor: "#06B6D4", darkColor: "#06B6D4" },
      { name: "Material UI", icon: SiMui, lightColor: "#007FFF", darkColor: "#007FFF" },
    ],
  },
  {
    title: "Backend Development",
    description: "Robust server-side solutions & APIs",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, lightColor: "#339933", darkColor: "#339933" },
      { name: "Express.js", icon: SiExpress, lightColor: "#000000", darkColor: "#FFFFFF" },
      { name: "Django", icon: SiDjango, lightColor: "#092E20", darkColor: "#0C4B33" },
      { name: "PostgreSQL", icon: SiPostgresql, lightColor: "#336791", darkColor: "#336791" },
      { name: "MongoDB", icon: SiMongodb, lightColor: "#47A248", darkColor: "#47A248" },
      { name: "Firebase", icon: SiFirebase, lightColor: "#FFCA28", darkColor: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, lightColor: "#3ECF8E", darkColor: "#3ECF8E" },
      { name: "Prisma ORM", icon: SiPrisma, lightColor: "#2D3748", darkColor: "#68D391" },
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform & native mobile apps",
    icon: Smartphone,
    skills: [
      { name: "React Native", icon: SiReact, lightColor: "#61DAFB", darkColor: "#61DAFB" },
      { name: "Flutter", icon: SiFlutter, lightColor: "#02569B", darkColor: "#02569B" },
      { name: "Kotlin", icon: SiKotlin, lightColor: "#7F52FF", darkColor: "#7F52FF" },
      { name: "Swift", icon: SiSwift, lightColor: "#FA7343", darkColor: "#FA7343" },
    ],
  },
  {
    title: "Data & Analytics",
    description: "Data visualization & business intelligence",
    icon: BarChart3,
    skills: [
      { name: "Python", icon: SiPython, lightColor: "#3776AB", darkColor: "#3776AB" },
      { name: "SQL", icon: SiMysql, lightColor: "#4479A1", darkColor: "#4479A1" },
      { name: "Power BI", icon: SiPowers, lightColor: "#F2C811", darkColor: "#F2C811" },
      { name: "Tableau", icon: SiTableau, lightColor: "#E97627", darkColor: "#E97627" },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-20"
        >
          <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-4 py-2">
            <Layers className="w-4 h-4 mr-2" />
            Our Expertise
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-balance leading-tight">
            Technologies We <span className="text-primary">Master</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our team stays at the forefront of technology, continuously learning and mastering 
            the latest tools and frameworks to deliver cutting-edge solutions that drive business success.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div key={category.title} variants={categoryVariants}>
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 group overflow-hidden relative">
                  {/* Consistent Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-0 relative z-10">
                    {/* Category Header */}
                    <div className="flex items-start space-x-4 mb-8">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                        <CategoryIcon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon
                        return (
                          <motion.div
                            key={skill.name}
                            variants={skillVariants}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -5,
                              transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group/skill"
                          >
                            <Card className="p-4 bg-background/80 backdrop-blur-sm border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                              <CardContent className="p-0 text-center space-y-3">
                                <div className="flex justify-center">
                                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover/skill:bg-primary/20 group-hover/skill:scale-110 transition-all duration-300">
                                    <SkillIcon 
                                      className="w-6 h-6 transition-transform duration-300 dark:hidden" 
                                      style={{ color: skill.lightColor }}
                                    />
                                    <SkillIcon 
                                      className="w-6 h-6 transition-transform duration-300 hidden dark:block" 
                                      style={{ color: skill.darkColor }}
                                    />
                                  </div>
                                </div>
                                <h4 className="text-sm font-semibold text-foreground group-hover/skill:text-primary transition-colors duration-300">
                                  {skill.name}
                                </h4>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )
                      })}
                    </div>
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
