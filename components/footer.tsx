"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500" />
                            <span className="font-bold text-lg">DevStudio</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Crafting digital experiences that inspire and
                            engage.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">
                            Services
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Mobile Apps
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    UI/UX Design
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">
                            Follow Us
                        </h4>
                        <div className="flex gap-4">
                            <a
                                target="_blank"
                                href="https://www.github.com/Amitpandey992"
                                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/amit7582"
                                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                target="_blank"
                                href="https://x.com/Amitpandey992"
                                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} DevStudio. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <a
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Terms
                        </a>
                        <a
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
