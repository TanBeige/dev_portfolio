import { motion } from "framer-motion";
import Image from "next/image";
import { DocumentDownloadIcon, MailIcon } from "@heroicons/react/solid";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const summaryPoints = [
  "Cut DeepVest's load times by 70% while doubling conversions for its investment AI platform.",
  "Led handle.me's frontend at Kora Labs, supporting 200K+ NFT owners with secure serverless integrations.",
  "Bootstrapped NotesBot into a revenue-generating SaaS serving 200+ communities with AI meeting summaries.",
];

const quickFacts = [
  {
    label: "Current",
    value: "Head of Frontend · DeepVest (Benjamin AI)",
    href: "https://deepvest.ai",
  },
  {
    label: "Focus",
    value: "Scalable systems, intuitive data-heavy dashboards, growth experimentation",
  },
  {
    label: "Looking for",
    value: "Staff+ Frontend or Founding Engineer roles at product-led teams",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/tanBeige",
    icon: <FaGithubSquare className="h-9 w-9" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tanarin12",
    icon: <FaLinkedin className="h-9 w-9" />,
  },
];

export default function Hero({ delay = 0 }) {
  return (
    <motion.section
      id="top"
      className="max-w-6xl mx-auto px-6 pt-10 pb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
        <div className="relative h-80 md:h-[480px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-gray-800">
          <Image
            src="/assets/images/tanpic.JPG"
            alt="Tan Arin"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover object-top md:object-center"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">
              Frontend Engineering Leader
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              I build conversion-driven product experiences for AI, fintech, and Web3 teams.
            </h1>
            <p className="mt-4 text-base text-gray-300 leading-relaxed">
              I partner with founders and product orgs to ship UI architecture, design systems, and growth experiments that stand up to scale. My products have supported hundreds of thousands of users and more in transactions across marketplaces, SaaS platforms, and DeFi protocols.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              {summaryPoints.map((point) => (
                <li key={point} className="flex items-start">
                  <span className="mr-2 mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-white/5 bg-white/5 p-3"
                >
                  <p className="text-[11px] uppercase tracking-wide text-gray-400">
                    {fact.label}
                  </p>
                  {fact.href ? (
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 font-semibold text-gray-100 hover:text-white"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-semibold text-gray-100">
                      {fact.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:tanarindev@gmail.com"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                <MailIcon className="mr-2 h-4 w-4" />
                Schedule an intro call
              </a>
              <a
                href="/assets/Tan_Arin_Frontend_Engineer_2025.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-gray-100 hover:border-blue-500/60 hover:text-white"
              >
                <DocumentDownloadIcon className="mr-2 h-4 w-4" />
                Download resume
              </a>
            </div>
            <div className="flex gap-4 text-gray-400">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${link.name}`}
                  className="transition-colors hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
