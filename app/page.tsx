"use client";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className="w-full overflow-hidden">
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </main>
    );
}
