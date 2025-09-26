"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Award, Clock, Target, ArrowRight, CheckCircle, Lightbulb, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  { icon: Users, value: "10+", label: "Team Members" },
  { icon: Award, value: "20+", label: "Projects Completed" },
  { icon: Clock, value: "24/7", label: "Support" },
  { icon: Target, value: "99%", label: "Success Rate" },
]

const features = [
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade security protocols" },
  { icon: Lightbulb, title: "Innovation First", desc: "Cutting-edge technology solutions" },
  { icon: CheckCircle, title: "Proven Results", desc: "Track record of successful projects" },
]

export function IntroSection() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20" ref={ref}>
          {/* Left column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                About 5fox
              </Badge>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
                Transforming Businesses Through{" "}
                <span className="text-primary">Innovation</span>
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At 5fox, we're passionate about leveraging cutting-edge technology to solve complex business challenges.
                  With over a decade of experience, we've helped hundreds of companies streamline their operations,
                  enhance security, and accelerate growth through innovative IT solutions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team of expert developers, security specialists, and IT consultants work collaboratively to deliver
                  tailored solutions that not only meet your current needs but also position your business for future success.
                </p>
              </div>

              {/* <motion.div variants={itemVariants}>
                <Button 
                  asChild
                  size="lg"
                  className="group"
                >
                  <motion.a 
                    href="#contact" 
                    className="inline-flex items-center space-x-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </Button>
              </motion.div> */}
            </motion.div>
          </motion.div>

          {/* Right column - Features */}
          <motion.div
            ref={featuresRef}
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <Card className="p-6 hover:border-primary/30 transition-all duration-300 group bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary text-primary-foreground rounded-xl group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 hover:border-primary/30 transition-all duration-300 group bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0 text-center">
                  <div className="mb-4 inline-block">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
