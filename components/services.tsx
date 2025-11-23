"use client"

import { Code2, Smartphone, Palette, Zap, Shield, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "High-performance web applications with modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions for iOS and Android.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast load times and smooth, responsive experiences.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security to protect your data and users.",
  },
  {
    icon: TrendingUp,
    title: "Analytics",
    description: "Data-driven insights to measure success and optimize growth.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-accent w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
