"use client";

import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DocPager } from "@/components/doc-pager";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
  }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function BrandPage() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="max-w-4xl mx-auto"
    >
      <Breadcrumbs />
      
      <motion.header variants={fadeIn} className="mb-16 pb-10 border-b border-border/40">
        <span className="badge-accent mb-6 inline-block">Identity</span>
        <h1 className="text-foreground mb-6">Brand Guidelines</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
          Defining the visual and verbal identity of Carisle Media.
        </p>
      </motion.header>

      <div className="prose-handbook">
        <motion.section variants={fadeIn} id="logo" className="handbook-section">
          <h2>Our Logo</h2>
          <p>
            The Carisle Media logo is our most recognizable asset. It serves as the primary visual identifier 
            of our brand. It should be used consistently and correctly in all communications to maintain brand integrity.
          </p>
          <div className="my-10 glass-card p-16 flex items-center justify-center">
            <h3 className="text-4xl md:text-5xl font-semibold text-primary m-0! border-b-0! tracking-tight">
              Carisle<span className="text-accent">.</span>Media
            </h3>
          </div>
          <h3>Clear Space</h3>
          <p>
            Always maintain clear space around the logo to ensure visibility and impact. The clear space is defined 
            by the height of the &quot;C&quot; in &quot;Carisle&quot;. No other graphic elements should infringe upon this space.
          </p>
        </motion.section>

        <motion.section variants={fadeIn} id="typography" className="handbook-section">
          <h2>Typography</h2>
          <p>
            Typography plays a crucial role in our brand identity, conveying our tone—professional, modern, and accessible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
            <div className="card-float">
              <span className="badge-accent mb-4">Headings</span>
              <p className="text-4xl font-semibold text-foreground mt-4" style={{ fontFamily: 'var(--font-jakarta)' }}>
                Jakarta Sans
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Used for H1, H2, and major callouts. Modern and geometric.
              </p>
            </div>
            <div className="card-float">
              <span className="badge-accent mb-4">Body & UI</span>
              <p className="text-4xl font-semibold text-foreground mt-4" style={{ fontFamily: 'var(--font-dm)' }}>
                DM Sans
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Used for body text, navigation, and UI elements. Clean and legible.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn} id="colors" className="handbook-section">
          <h2>Color Palette</h2>
          <p>
            Our color palette reflects our commitment to clarity and creativity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-10 not-prose">
            {[
              { name: "Primary (Teal)", color: "bg-primary", hex: "#194D58" },
              { name: "Accent (Amber)", color: "bg-accent", hex: "#F28C2E" },
              { name: "Muted", color: "bg-muted border border-border", hex: "#F5F7F8" },
              { name: "Background", color: "bg-background border border-border", hex: "#FAFCFD" },
            ].map((item, idx) => (
              <div key={idx} className="group space-y-3">
                <div 
                  className={`h-28 rounded-2xl ${item.color} shadow-sm transition-transform duration-300 group-hover:scale-105`}
                />
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{item.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <motion.div variants={fadeIn}>
        <DocPager 
          prev={{ title: "Mission & Values", href: "/mission" }}
          next={{ title: "Editorial Standards", href: "/editorial" }}
        />
      </motion.div>
    </motion.div>
  );
}
