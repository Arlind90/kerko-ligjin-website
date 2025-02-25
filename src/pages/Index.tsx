
import { motion } from "framer-motion";
import { ArrowRight, Search, Database, Users, Globe, Check, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#" },
    { label: "Features", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return <div className="min-h-screen bg-background-light">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-display text-2xl font-bold text-secondary">Kërko Ligjin</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost">{item.label}</Button>
            ))}
            <Button>Get Started</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto text-center">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Revolutionizing Legal Research
            </span>
            <h1 className="mt-8 font-display text-5xl sm:text-6xl font-bold text-secondary leading-tight">
              Seamless Access to Albanian Court Decisions
            </h1>
            <p className="mt-6 text-xl text-secondary-light">
              Advanced search capabilities for Constitutional Court, High Court, and more. Making legal research efficient and accessible.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" className="gap-2">
                Start Searching <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-secondary">Key Features</h2>
            <p className="mt-4 text-lg text-secondary-light max-w-2xl mx-auto">
              Our platform combines advanced technology with user-friendly design to revolutionize legal research.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: Search,
            title: "Advanced Search",
            description: "Complex searches based on legal concepts, case types, and court levels."
          }, {
            icon: Database,
            title: "Automated Collection",
            description: "Daily automated download and processing of court decisions."
          }, {
            icon: Globe,
            title: "Regional Coverage",
            description: "Support for Albania, Kosovo, North Macedonia, and Montenegro."
          }].map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="p-6 rounded-xl bg-background-light border border-gray-100 hover:border-primary/20 transition-colors">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
                <p className="text-secondary-light">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">The Problem</span>
              <h2 className="mt-6 font-display text-4xl font-bold text-secondary leading-tight">
                Current Legal Research is Inefficient
              </h2>
              <p className="mt-4 text-lg text-secondary-light">
                The existing digital infrastructure for accessing Albanian court decisions is severely lacking, making legal research time-consuming and difficult.
              </p>
              <ul className="mt-8 space-y-4">
                {["Limited search functionality", "Manual document downloads required", "No search engine for First Instance Courts", "Poor user experience"].map((item, index) => <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-secondary-light">{item}</span>
                  </li>)}
              </ul>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" alt="Legal Research" className="w-full h-full object-cover mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="order-2 lg:order-1">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Legal Research Platform" className="w-full h-full object-cover mix-blend-overlay" />
              </div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="order-1 lg:order-2">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Our Solution
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-secondary leading-tight">
                Automated Legal Research Platform
              </h2>
              <p className="mt-4 text-lg text-secondary-light">
                Kërko Ligjin automates the daily download of court decisions, processes and categorizes them, making them readily available through an intuitive search engine.
              </p>
              <ul className="mt-8 space-y-4">
                {["Automated daily download of court decisions", "Advanced search based on legal concepts and case types", "User-friendly interface with direct result previews", "Support for Albania, Kosovo, North Macedonia, and Montenegro"].map((item, index) => <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-secondary-light">{item}</span>
                  </li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-secondary">Who We Serve</h2>
            <p className="mt-4 text-lg text-secondary-light max-w-2xl mx-auto">
              Our platform is designed for everyone who needs access to Albanian legal documents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: Users,
            title: "Legal Professionals",
            count: "2,000+"
          }, {
            icon: Users,
            title: "Law Students",
            count: "5,000+"
          }, {
            icon: Users,
            title: "Academics",
            count: "1,000+"
          }, {
            icon: Users,
            title: "General Public",
            count: "10,000+"
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center p-6">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="font-display text-3xl font-bold text-primary mb-2">{item.count}</p>
                <h3 className="text-lg font-medium text-secondary">{item.title}</h3>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Get In Touch
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-secondary">
                Ready to Transform Your Legal Research?
              </h2>
              <p className="mt-4 text-lg text-secondary-light">
                Contact us to learn more about how Kërko Ligjin can help you streamline your legal research process.
              </p>
              <div className="mt-10">
                <Button size="lg" className="gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-8 text-secondary-light">
                <p>Sokrat Gjermeni</p>
                <p>Attorney at Law</p>
                <p className="mt-2">
                  <a href="mailto:sokrat@avgjermeni.com" className="text-primary hover:underline">
                    sokrat@avgjermeni.com
                  </a>
                </p>
                <p>
                  <a href="tel:+355692745109" className="text-primary hover:underline">
                    +355 692 745 109
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};

export default Index;
