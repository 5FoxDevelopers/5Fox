"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, Phone, MapPin, Send, Clock, Users, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { db } from "@/lib/firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  company: z.string().optional(),
  subject: z.string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  contactMethod: z.enum(["email", "phone", "both"], {
    message: "Please select a preferred contact method",
  }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    value: "5foxdevelopers@gmail.com",
    link: "mailto:5foxdevelopers@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us", 
    description: "Speak with our team",
    value: "+91 84375 16789",
    link: "tel:+918437516789",
  },
]

const contactMethods = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" }, 
  { value: "both", label: "Both" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const dbRef = collection(db, "contacts")
  const { executeRecaptcha } = useGoogleReCaptcha()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  })

  // Watch message length for character counter
  const messageLength = watch("message")?.length || 0

  const onSubmit = async (data: ContactFormData) => {
    try {
      if (!executeRecaptcha) {
        toast.error("reCAPTCHA not available. Please try again.")
        return
      }

      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha('contact_form_submit')
      
      if (!recaptchaToken) {
        toast.error("reCAPTCHA verification failed. Please try again.")
        return
      }

      // Here you should verify the token on your backend
      // For now, we'll proceed with the form submission
      const response = await addDoc(dbRef, {
        name: data.name,
        email: data.email,
        company: data.company || "",
        subject: data.subject,
        message: data.message,
        contactMethod: data.contactMethod,
        timestamp: Timestamp.now(),
        recaptchaToken: recaptchaToken, // Store token for backend verification
      })

      if (response.id) {
        setIsSubmitted(true)
        reset()
        toast.success("Message sent successfully! We'll get back to you soon.")
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
      console.error('Form submission error:', error)
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Ready to Start Your <span className="text-primary">Project?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Let's discuss how we can help transform your business with innovative IT solutions. Our team is ready to
            bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    "Send us a message"
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Thank you for reaching out!</p>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="John Doe"
                          className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && (
                          <p id="name-error" role="alert" className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="john@example.com"
                          className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                          <p id="email-error" role="alert" className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company (Optional)
                      </Label>
                      <Input
                        id="company"
                        {...register("company")}
                        placeholder="Your Company Name"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        placeholder="What can we help you with?"
                        className={errors.subject ? "border-red-500 focus-visible:ring-red-500" : ""}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                        aria-invalid={errors.subject ? "true" : "false"}
                      />
                      {errors.subject && (
                        <p id="subject-error" role="alert" className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Preferred Contact Method *</Label>
                      <div className="flex gap-4">
                        {contactMethods.map((method) => (
                          <div key={method.value} className="flex items-center space-x-2">
                            <input
                              {...register("contactMethod")}
                              type="radio"
                              value={method.value}
                              id={`contact-${method.value}`}
                              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                            />
                            <Label 
                              htmlFor={`contact-${method.value}`}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {method.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                      {errors.contactMethod && (
                        <p role="alert" className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.contactMethod.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium flex justify-between">
                        <span>Message *</span>
                        <span className={`text-xs ${messageLength > 900 ? 'text-red-600' : 'text-muted-foreground'}`}>
                          {messageLength}/1000
                        </span>
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                        rows={6}
                        className={errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        aria-invalid={errors.message ? "true" : "false"}
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || !executeRecaptcha}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    {/* reCAPTCHA notice */}
                    <p className="text-xs text-muted-foreground text-center">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <a 
                        href="https://policies.google.com/privacy" 
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a 
                        href="https://policies.google.com/terms" 
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                      </a>{" "}
                      apply.
                    </p>

                    {/* Form Footer */}
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </a>
                      .
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                          <a
                            href={info.link}
                            className="text-sm text-primary hover:text-primary/80 transition-colors font-medium inline-flex items-center gap-1"
                            aria-label={`${info.title}: ${info.value}`}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}