"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Work", href: "#work" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed w-full top-0 z-50 px-4 py-6 md:px-8 md:py-8">
            <div className="max-w-7xl mx-auto">
                <nav className="glass-effect rounded-2xl px-6 md:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 ">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500" />
                        <span className="font-bold text-lg text-foreground hover:cursor-pointer">
                            DevStudio
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <Button
                        onClick={() => setIsOpen(!isOpen)}
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="glass-effect rounded-2xl mt-4 p-6 md:hidden flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
