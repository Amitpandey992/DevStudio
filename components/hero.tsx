"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto z-10 text-center space-y-8">
                <div className="inline-block glass-effect rounded-full px-6 py-2 mb-8">
                    <p className="text-sm font-medium text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text dark:from-blue-400 dark:to-cyan-400">
                        ✨ Welcome to DevStudio
                    </p>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
                    <span className="gradient-text">Immersive Digital</span>
                    <br />
                    <span className="text-foreground">Experiences</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
                    We craft cutting-edge web and mobile applications that
                    combine stunning design with powerful functionality. From
                    concept to launch, we bring your vision to life.
                </p>

                <div className=" flex justify-center items-center hover:cursor-pointer">
                    <div className="hover:cursor-pointer flex justify-center items-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 gap-3">
                        <Phone className="" size={20} />
                        <button className="text-base  hover:cursor-pointer">
                            Book a Call
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
