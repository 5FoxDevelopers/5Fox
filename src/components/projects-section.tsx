"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ArrowRight, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution with advanced analytics and AI-powered recommendations.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    category: "Web Development",
    link: "https://example-ecommerce.com",
    github: "#",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform with patient management, appointment scheduling, and telemedicine features.",
    tags: ["Next.js", "TypeScript", "MongoDB", "WebRTC"],
    category: "Healthcare",
    link: "",
    github: "#",
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    description: "Real-time financial data visualization and analytics platform for investment firms.",
    tags: ["Vue.js", "Python", "D3.js", "Redis"],
    category: "FinTech",
    link: "https://example-fintech.com",
    github: "#",
  },
  {
    id: 4,
    title: "IoT Monitoring System",
    description: "Industrial IoT platform for real-time monitoring and predictive maintenance of manufacturing equipment.",
    tags: ["React", "Python", "InfluxDB", "Docker"],
    category: "IoT",
    link: "",
    github: "#",
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Interactive online learning platform with video streaming, assessments, and progress tracking.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS S3"],
    category: "Education",
    link: "https://example-lms.com",
    github: "#",
  },
  {
    id: 6,
    title: "Supply Chain Tracker",
    description: "Blockchain-based supply chain tracking system for transparency and authenticity verification.",
    tags: ["React", "Solidity", "Web3", "IPFS"],
    category: "Blockchain",
    link: "",
    github: "#",
  },
]

const categories = ["All", "Web Development", "Healthcare", "FinTech", "IoT", "Education", "Blockchain"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)
  const hasMoreProjects = filteredProjects.length > 3

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Explore our portfolio of successful projects across various industries, showcasing our expertise in
            delivering innovative solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveCategory(category)
                setShowAll(false)
              }}
              className={`transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 overflow-hidden">
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className="flex space-x-1">
                        {project.link ? (
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            className="h-7 w-7 hover:bg-primary/10"
                            asChild
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        ) : (
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>Ongoing</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="px-8 py-3 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              {showAll ? 'Show Less Projects' : 'Show More Projects'}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </Button>
          </motion.div>
        )}


         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">
                  Ready to start your next project?
                </h3>
                <p className="text-muted-foreground">
                  Let's discuss how we can bring your ideas to life with our expertise and proven track record.
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
