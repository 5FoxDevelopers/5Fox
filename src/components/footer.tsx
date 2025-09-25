"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  services: [
    "Web Development",
    "Mobile Development",
    "Cloud Solutions",
    "Cybersecurity",
    "Data Analytics",
    "IT Consulting",
  ],
  company: ["About Us", "Our Team", "Careers", "Blog", "Case Studies", "Contact"],
  resources: ["Documentation", "Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">5</span>
                </div>
                <span className="text-xl font-bold text-foreground">5fox</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Transforming businesses through innovative IT solutions. We're your trusted partner in digital
                transformation and technology excellence.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@5fox.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Silicon Valley, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.6 }}
                  >
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.6 }}
                  >
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
              <p className="text-muted-foreground text-sm">
                Subscribe to our newsletter for the latest tech insights and updates.
              </p>

              <div className="space-y-3">
                <Input type="email" placeholder="Enter your email" className="bg-background/50" />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="py-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-sm text-muted-foreground">© 2025 5fox IT Services. All rights reserved.</div>

          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6 text-sm">
              {footerLinks.resources.slice(2, 5).map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="h-8 w-8 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
