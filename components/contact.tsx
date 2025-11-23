"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setLoading(false);
                toast({
                    title: "Message Sent 🎉",
                    description:
                        "Thanks for reaching out. We’ll contact you soon!",
                });

                setFormData({ name: "", email: "", message: "" });
            } else {
                setLoading(false);
                toast({
                    variant: "destructive",
                    title: "Failed to Send ❌",
                    description: "Something went wrong, please try again.",
                });
            }
        } catch (error) {
            setLoading(false);
            toast({
                variant: "destructive",
                title: "Error 🚨",
                description: "Unable to send message. Check your network.",
            });
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 px-4 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Let's Work{" "}
                        <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how we can help
                        bring your vision to life.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                        {
                            icon: Mail,
                            title: "Email",
                            value: "devstudio@gmail.com",
                        },
                        {
                            icon: Phone,
                            title: "Phone",
                            value: "+91 7470557582",
                        },
                        {
                            icon: MapPin,
                            title: "Location",
                            value: "India",
                        },
                    ].map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <div
                                key={index}
                                className="glass-effect rounded-2xl p-8 text-center"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center mx-auto mb-4">
                                    <Icon className="text-accent w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">
                                    {contact.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {contact.value}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-2xl mx-auto w-full">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Message
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                                placeholder="Tell us about your project..."
                                rows={5}
                                required
                            />
                        </div>
                        {loading ? (
                            <Button
                                type="submit"
                                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base cursor-not-allowed active:scale-95 transition-transform"
                            >
                                <Loader2 className="w-4 h-4 animate-spin" />
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base cursor-pointer active:scale-95 transition-transform"
                            >
                                Send Message
                            </Button>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
