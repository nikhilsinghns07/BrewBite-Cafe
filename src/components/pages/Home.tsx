"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CategorySection } from "@/components/ui/category-section";
import { products, categories, heroImage } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Cozy Cafe Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
              Savor the{" "}
              <span className="text-primary-foreground italic">Moment</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
              Experience artisanal coffee and gourmet comfort food in a space
              designed for relaxation. Welcome to your new favorite spot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg"
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 rounded-full px-8 h-14 text-lg"
              >
                Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar - Floating */}
      <div className="container mx-auto px-4 relative z-20 -mt-8 mb-12">
        <div className="max-w-2xl mx-auto bg-card rounded-full shadow-lg p-2 flex items-center border border-border/50 backdrop-blur-sm">
          <div className="pl-4 text-muted-foreground">
            <Search size={20} />
          </div>
          <Input
            type="text"
            placeholder="Search for coffee, sandwiches, treats..."
            className="border-none shadow-none focus-visible:ring-0 bg-transparent text-lg h-12 text-shadow-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="rounded-full px-6">Search</Button>
        </div>
      </div>

      {/* Products Section */}
      <CategorySection categories={categories} products={filteredProducts} />

      {/* Featured Banner */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 space-y-6">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/80 mb-2">
              New Arrival
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Seasonal Pumpkin Spice Latte
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fall in love with our limited-time blend of espresso, steamed
              milk, and warming spices. Topped with whipped cream and a dusting
              of cinnamon.
            </p>
            <Button size="lg" className="rounded-full">
              Try It Today
            </Button>
          </div>
          <div className="flex-1 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <img
                src={products[0].image}
                alt="Seasonal Special"
                className="relative z-10 object-cover w-full h-full rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
