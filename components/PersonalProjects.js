import { motion } from "framer-motion";
import moment from "moment";

const personalProjects = [
  {
    name: "NotesBot",
    role: "Founder & Full-Stack Developer",
    image: "/assets/images/notesbot.png",
    startDate: new Date("2024-10-02"),
    endDate: undefined,
    description:
      "AI-powered Discord assistant that records, transcribes, and summarizes voice chats for communities and teams.",
    impact: [
      "Serving 200+ active users across 300+ Discord servers with automated summaries.",
      "Processed 1,000+ voice calls with multi-language support and actionable notes.",
      "Built subscription billing, onboarding, and analytics from the ground up.",
    ],
    techStack: [
      "Node.js",
      "C++",
      "MongoDB",
      "DigitalOcean",
      "Discord API",
      "AI/ML",
    ],
    link: "https://www.notesbot.io/",
    liveDemo: "https://www.notesbot.io/",
  },
  {
    name: "Collectibles AI",
    role: "Co-Founder & Lead Developer",
    image: "/assets/images/collectibleslogowhite.png",
    startDate: new Date("2024-01-02"),
    endDate: undefined,
    description:
      "Computer vision platform that authenticates and prices collectibles using AI-driven market data.",
    impact: [
      "Built intelligent image recognition workflows for collectible identification.",
      "Automated pricing recommendations using live marketplace data.",
      "Delivered responsive web experience for appraisers and dealers.",
    ],
    techStack: ["React", "Next.js", "TypeScript", "AI/ML", "APIs"],
    link: "https://collectiblesai.io",
    liveDemo: "https://collectiblesai.io",
  },
  {
    name: "DuckPools",
    role: "Lead Frontend Developer",
    image: "/assets/images/ducklogo.svg",
    startDate: new Date("2022-02-02"),
    endDate: undefined,
    description:
      "Decentralized lending protocol UI for Cardano DeFi participants.",
    impact: [
      "Supported up to $500k TVL with real-time lending telemetry.",
      "Enabled thousands of transactions with portfolio-level insights.",
      "Built modular frontend architecture for rapid protocol experiments.",
    ],
    techStack: ["Next.js", "React", "TanStack Query", "Redux", "Web3"],
    link: "https://test.duckpools.io/",
    liveDemo: "https://test.duckpools.io/",
  },
  {
    name: "SkyHarbor",
    role: "Founder & Lead Frontend",
    image: "/assets/images/SHLogoFinalTS.png",
    startDate: new Date("2023-02-02"),
    endDate: new Date("2025-09-02"),
    description:
      "Decentralized NFT marketplace powering $400k+ in GMV for Cardano projects.",
    impact: [
        "Shipped secure wallet integrations and contract interactions for high-volume drops.",
        "Architected marketplace infrastructure handling thousands of transactions.",
        "Grew to 20,000+ monthly active users via community-led growth.",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Blockchain", "Web3"],
    link: "https://skyharbor.io",
    github: "https://github.com/skyharbor-market/frontend-skyharbor-ts",
  },
  {
    name: "Skedge",
    role: "Co-Founder & CTO",
    image: "/assets/images/skedgelogo.png",
    startDate: new Date("2019-07-02"),
    endDate: new Date("2020-10-02"),
    description:
      "Cross-platform mobile app for discovering local events and exclusive restaurant deals.",
    impact: [
      "Launched on iOS and Android with native-like performance.",
      "Rolled out real-time event aggregation and recommendation engine.",
      "Acquired 2,000 monthly active users in the first launch market.",
    ],
    techStack: ["React Native", "React", "Node.js", "Firebase", "APIs"],
    link: "https://github.com/TanBeige/skedge-deals",
    github: "https://github.com/TanBeige/skedge-deals",
  },
];

const formatRange = (startDate, endDate) => {
  const start = moment(startDate).format("MMM YYYY");
  const end = endDate ? moment(endDate).format("MMM YYYY") : "Present";
  return `${start} – ${end}`;
};

export default function PersonalProjects({ delay = 0 }) {
  return (
    <section id="personal-projects" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
        className="mb-6"
      >
        <h2 className="text-3xl font-bold text-white">Founder-Led Product Builds</h2>
        <p className="mt-2 text-sm text-gray-400">
          Case studies from SaaS, AI, and Web3 products where I owned product strategy, frontend architecture, and go-to-market execution.
        </p>
      </motion.div>
      <div className="flex flex-col space-y-6">
        {personalProjects
          .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
          .map((project, index) => (
            <motion.article
              key={`${project.name}-project`}
              className="group rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: delay + 0.15 + index * 0.12 }}
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="w-full sm:w-28">
                  <div className="h-24 w-full overflow-hidden rounded-xl border border-white/10 bg-gray-900/60 p-2">
                    <img
                      src={project.image}
                      alt={`${project.name} logo`}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-white">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-400">{project.role}</p>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {formatRange(project.startDate, project.endDate)}
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-gray-300">{project.description}</p>

                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-wide text-gray-500">
                      Key outcomes
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-300">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-wide text-gray-500">
                      Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-500"
                      >
                        View live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md border border-white/10 px-3 py-1.5 text-xs font-semibold text-gray-200 hover:border-blue-500/50 hover:text-white"
                      >
                        View code
                      </a>
                    )}
                    {project.link && !project.liveDemo && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md border border-white/10 px-3 py-1.5 text-xs font-semibold text-gray-200 hover:border-blue-500/50 hover:text-white"
                      >
                        Explore project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
      </div>
    </section>
  );
}
