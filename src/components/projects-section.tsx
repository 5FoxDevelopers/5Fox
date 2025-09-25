"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution with advanced analytics and AI-powered recommendations.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    category: "Web Development",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare platform with patient management, appointment scheduling, and telemedicine features.",
    image: "/healthcare-management-dashboard.png",
    tags: ["Next.js", "TypeScript", "MongoDB", "WebRTC"],
    category: "Healthcare",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    description: "Real-time financial data visualization and analytics platform for investment firms.",
    image: "/financial-analytics-dashboard.png",
    tags: ["Vue.js", "Python", "D3.js", "Redis"],
    category: "FinTech",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "IoT Monitoring System",
    description:
      "Industrial IoT platform for real-time monitoring and predictive maintenance of manufacturing equipment.",
    image: "/iot-monitoring-dashboard.jpg",
    tags: ["React", "Python", "InfluxDB", "Docker"],
    category: "IoT",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Interactive online learning platform with video streaming, assessments, and progress tracking.",
    image: "/learning-management-system.png",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS S3"],
    category: "Education",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Supply Chain Tracker",
    description: "Blockchain-based supply chain tracking system for transparency and authenticity verification.",
    image: "/supply-chain-tracking-dashboard.jpg",
    tags: ["React", "Solidity", "Web3", "IPFS"],
    category: "Blockchain",
    link: "#",
    github: "#",
  },
]

const categories = ["All", "Web Development", "Healthcare", "FinTech", "IoT", "Education", "Blockchain"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

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
              onClick={() => setActiveCategory(category)}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
