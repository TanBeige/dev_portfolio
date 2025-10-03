import Head from "next/head";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ImpactMetrics from "../components/ImpactMetrics";
import Tools from "../components/Tools";
import WorkExperience from "../components/WorkExperience";
import PersonalProjects from "../components/PersonalProjects";
import Contact from "../components/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tan Arin",
  jobTitle: "Frontend Engineering Leader",
  url: "https://tanarin.dev",
  sameAs: [
    "https://www.linkedin.com/in/tanarin12",
    "https://github.com/tanBeige",
  ],
  email: "mailto:tanarindev@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "DeepVest (Benjamin AI)",
    url: "https://deepvest.ai",
  },
  knowsAbout: [
    "Frontend Architecture",
    "React",
    "Next.js",
    "Design Systems",
    "Product Growth",
    "Web3",
    "AI Platforms",
  ],
};

export default function App() {
  return (
    <motion.div className="bg-[#0A0A0B] text-white">
      <Head>
        <title>Tan Arin — Frontend Engineering Leader</title>
        <meta
          name="description"
          content="Portfolio for Tan Arin, a frontend engineering leader building high-impact product experiences for AI, fintech, and Web3 teams."
        />
        <meta property="og:title" content="Tan Arin — Frontend Engineering Leader" />
        <meta
          property="og:description"
          content="Frontend leader delivering conversion-driven product experiences for AI, fintech, and Web3 teams."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/tanpic.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tan Arin — Frontend Engineering Leader" />
        <meta
          name="twitter:description"
          content="Frontend leader delivering conversion-driven product experiences for AI, fintech, and Web3 teams."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Navbar />

      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>

      <motion.main className="bg-[#0A0A0B] body-font" initial={false}>
        <Hero delay={0.1} />
        <div className="max-w-6xl mx-auto px-6 pb-24 space-y-16">
          <ImpactMetrics delay={0.3} />
          <Tools delay={0.45} />
          <WorkExperience delay={0.6} />
          <PersonalProjects delay={0.9} />
          <Contact />
        </div>
      </motion.main>
    </motion.div>
  );
}
