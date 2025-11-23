"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        description:
            "A modern e-commerce platform with real-time inventory and payment integration.",
        image: "/ecommerce.png",
        link: "https://www.ranisabysword.com",
        button: "View Case Study",
    },
    {
        title: "Fitness Mobile App",
        category: "Mobile Development",
        description:
            "Cross-platform fitness tracking app with AI-powered workout recommendations.",
        image: "/gym.jpg",
        link: "#",
        button: "Comming Soon",
    },
    {
        title: "Event Management System",
        category: "Web Development",
        description:
            "Comprehensive event management system with scheduling, ticketing, attendee tracking with admin dashboard.",
        image: "/event.jpg",
        link: "https://event-management-webapp-client.onrender.com/",
        button: "View Case Study",
    },
];

export default function Portfolio() {
    return (
        <section id="work" className="py-20 md:py-32 px-4 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our latest work and see how we transform ideas
                        into reality
                    </p>
                </div>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group"
                        >
                            <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                                <div className="space-y-4 order-2 md:order-1">
                                    <p className="text-sm font-medium text-accent uppercase tracking-wider">
                                        {project.category}
                                    </p>
                                    <h3 className="text-3xl font-bold text-foreground">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                    <Button
                                        onClick={() =>
                                            window.open(project.link, "_blank")
                                        }
                                        className="mt-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 group/btn hover:cursor-pointer"
                                    >
                                        {project.button}
                                        <ArrowRight
                                            className=" group-hover/btn:translate-x-1 transition-transform"
                                            size={18}
                                        />
                                    </Button>
                                </div>

                                <div className="order-1 md:order-2 rounded-xl overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
