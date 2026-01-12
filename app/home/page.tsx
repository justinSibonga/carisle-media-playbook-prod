"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, HierarchyIcon, TaskDone01Icon, Book01Icon, TruckIcon, DashboardSpeed01Icon, Message01Icon, UserGroupIcon } from "@hugeicons/core-free-icons";

import { Footer } from "@/components/footer";
import { RightSidebar } from "@/components/right-sidebar";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const quickNavItems = [
  {
    title: "Organizational Chart",
    description: "View our team structure and reporting lines",
    icon: HierarchyIcon,
    href: "/org-chart",
  },
  {
    title: "Service Delivery SOP",
    description: "End-to-end client journey from lead to delivery",
    icon: TruckIcon,
    href: "/playbook/service-delivery",
  },
  {
    title: "Quality Checklists",
    description: "Ensure deliverables meet our standards",
    icon: TaskDone01Icon,
    href: "/playbook/quality-checklists",
  },
  {
    title: "Escalation SOP",
    description: "When and how to escalate issues",
    icon: Book01Icon,
    href: "/playbook/escalation",
  },
  {
    title: "KPI Dictionary",
    description: "Key performance metrics and definitions",
    icon: DashboardSpeed01Icon,
    href: "/playbook/kpi-dictionary",
  },
  {
    title: "Communication Rules",
    description: "Guidelines for Slack, email, and meetings",
    icon: Message01Icon,
    href: "/playbook/communication-rules",
  },
  {
    title: "Decision Rights",
    description: "Who has authority to approve what",
    icon: UserGroupIcon,
    href: "/playbook/decision-rights",
  },
];

export default function HomePage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex min-h-screen bg-background"
    >
      {/* Main Content Area */}
      <div className="flex-1 w-full overflow-x-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-16 space-y-16 md:space-y-24">
          {/* Hero Section */}
          <motion.div id="tour-hero" variants={fadeIn} className="py-8 md:py-14 mt-16 md:mt-24 flex flex-col items-center text-center">
            <span className="text-lg md:text-2xl text-accent font-medium mb-1 inline-block">Welcome to</span>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 mb-4 md:mb-5">
              <Image 
                src="/CMLogo-text.svg" 
                alt="Carisle Media" 
                width={0}
                height={0}
                sizes="100vw"
                className="h-12 md:h-20 w-auto"
                priority
              />
              <span className="text-3xl md:text-5xl tracking-tighter font-bold text-primary">Handbook</span>
            </div>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl px-2">
              Your complete guide to our organization, processes, and standards. Everything you need to deliver exceptional work for our clients.
            </p>
            <Link 
              href="/org-chart"
              className="mt-5 md:mt-6 inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base"
            >
              Getting Started
              <HugeiconsIcon icon={ArrowRight02Icon} className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </motion.div>

          {/* Quick Navigation - Apple Style Carousel */}
          <motion.section id="tour-quick-access" variants={fadeIn} className="relative group/carousel">
            <div className="mb-6 px-1">
              <h2 className="text-2xl font-bold text-foreground">Quick Access</h2>
            </div>
            
            {/* Carousel Container Wrapper */}
            <div className="relative -mx-12 md:-mx-24">
              {/* Carousel Container */}
              <div 
                id="carousel-container"
                className="flex gap-6 overflow-x-auto pb-8 px-12 md:px-24 snap-x snap-proximity hide-scrollbar scroll-smooth carousel-mask"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {/* Invisible Spacer (Dummy Card) to push first card out of gradient zone */}
                <div className="shrink-0 w-[40px] md:w-[170px] snap-start" />
                
                {quickNavItems.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.href} 
                    className="group shrink-0 w-[240px] md:w-[340px] bg-neutral-100 hover:bg-neutral-200 rounded-[24px] md:rounded-[28px] p-6 md:p-8 transition-all duration-300 snap-start flex flex-col justify-between h-[280px] md:h-[340px]"
                  >
                    <div>
                      {/* Icon */}
                      <div className="mb-4 md:mb-6">
                        <HugeiconsIcon icon={item.icon} className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-1.5 md:mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Arrow Icon - Pointing Top Right */}
                    <div className="flex justify-end">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <HugeiconsIcon icon={ArrowRight02Icon} className="w-4 h-4 md:w-5 md:h-5 -rotate-45" strokeWidth={3} />
                      </div>
                    </div>
                  </Link>
                ))}
                {/* Spacer to ensure last item has breathing room */}
                <div className="w-6 shrink-0" />
              </div>

              
              <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none group-hover/carousel:pointer-events-auto">
                <button 
                  onClick={() => {
                    document.getElementById('carousel-container')?.scrollBy({ left: -360, behavior: 'smooth' });
                  }}
                  className="w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-foreground hover:scale-105 transition-all"
                  aria-label="Scroll left"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none group-hover/carousel:pointer-events-auto">
                <button 
                  onClick={() => {
                    document.getElementById('carousel-container')?.scrollBy({ left: 360, behavior: 'smooth' });
                  }}
                  className="w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-foreground hover:scale-105 transition-all"
                  aria-label="Scroll right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.section>

          {/* About This Handbook */}
          <motion.section id="tour-about" variants={fadeIn} className="prose-handbook px-1.5 md:px-0">
            <h2>About This Handbook</h2>
            <p>
              This digital handbook contains all the essential documentation for Carisle Media team members. Here you&apos;ll find our organizational structure, standard operating procedures, quality checklists, and process maps.
            </p>

            <h3>How to use this handbook</h3>
            <ul>
              <li>Navigate using the sidebar on the left</li>
              <li>Click on any section to view detailed documentation</li>
              <li>Use the Operations Playbooks section for all SOPs and checklists</li>
              <li>Refer to Process Maps for visual workflow guides</li>
            </ul>
          </motion.section>

          {/* Footer */}
          <motion.div variants={fadeIn} className="pt-10 px-1.5 md:px-0">
            <div className="divider-fade mb-8" />
            <Footer />
          </motion.div>
        </div>
      </div>
      
      <RightSidebar />
    </motion.div>
  );
}
