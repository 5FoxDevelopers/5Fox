"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Award, Clock, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Clock, value: "24/7", label: "Support" },
  { icon: Target, value: "99%", label: "Success Rate" },
]

export function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
              >
                About 5fox
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance"
              >
                Transforming Businesses Through <span className="text-primary">Innovation</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                At 5fox, we're passionate about leveraging cutting-edge technology to solve complex business challenges.
                With over a decade of experience, we've helped hundreds of companies streamline their operations,
                enhance security, and accelerate growth through innovative IT solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Our team of expert developers, security specialists, and IT consultants work collaboratively to deliver
                tailored solutions that not only meet your current needs but also position your business for future
                success.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">5</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">5fox IT Services</h3>
                      <p className="text-muted-foreground">Your Technology Partner</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Project Success</span>
                      <span className="text-sm font-medium">99%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "99%" } : {}}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Client Satisfaction</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "98%" } : {}}
                        transition={{ delay: 1.2, duration: 1.5 }}
                        className="bg-accent h-2 rounded-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
