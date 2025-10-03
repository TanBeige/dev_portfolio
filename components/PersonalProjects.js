import { motion } from "framer-motion";
import moment from "moment";

const personalProjects = [
  {
    name: "Collectibles AI",
    role: "Co-Founder and Lead Developer",
    image: "/assets/images/collectibleslogowhite.png",
    startDate: new Date("2024-01-02"),
    endDate: undefined,
    description: "AI-powered platform for collectibles identification, authentication, and pricing",
    impact: [
      "Built intelligent image recognition system for collectibles",
      "Automated pricing using market data and machine learning",
      "Serving collectors and dealers with instant valuations"
    ],
    techStack: ["React", "Next.js", "TypeScript", "AI/ML", "APIs"],
    link: "https://collectiblesai.io",
    liveDemo: "https://collectiblesai.io",
  },
  {
    name: "DuckPools",
    role: "Lead Frontend Developer",
    image: "/assets/images/duckpools.png",
    startDate: new Date("2022-02-01"),
    endDate: undefined,
    description: "Decentralized lending and borrowing protocol for crypto assets",
    impact: [
      "Achieved Total Value Locked (TVL) of up to $500k",
      "Handled thousands of transactions on the DeFi protocol",
      "Built scalable interface for seamless lending and borrowing"
    ],
    techStack: ["Next.js", "React", "TanStack Query", "Redux", "Web3"],
    link: "https://test.duckpools.io/",
    liveDemo: "https://test.duckpools.io/",
  },
  {
    name: "SkyHarbor",
    role: "Founder and Lead Frontend",
    image: "/assets/images/SHLogoFinalTS.png",
    startDate: new Date("2023-02-01"),
    endDate: undefined,
    description: "Decentralized NFT marketplace built for the Cardano blockchain ecosystem",
    impact: [
      "Built scalable marketplace architecture handling thousands of transactions",
      "Implemented secure wallet integrations and smart contracts",
      "Created intuitive UX for NFT discovery and trading"
    ],
    techStack: ["React", "Next.js", "TypeScript", "Blockchain", "Web3"],
    link: "https://skyharbor.io",
    github: "https://github.com/skyharbor-market/frontend-skyharbor-ts",

  },
  {
    name: "Skedge",
    role: "Co-Founder and CTO",
    image: "/assets/images/skedgelogo.png",
    startDate: new Date("2019-07-01"),
    endDate: new Date("2020-10-02"),
    description: "Cross-platform mobile app for discovering local events and exclusive deals",
    impact: [
      "Launched on iOS and Android app stores",
      "Built real-time event aggregation and recommendation engine",
      "Developed responsive web application for broader reach"
    ],
    techStack: ["React Native", "React", "Node.js", "Firebase", "APIs"],
    link: "https://github.com/TanBeige/skedge-deals",
    github: "https://github.com/TanBeige/skedge-deals",
  },
];

export default function PersonalProjects({ delay = 0 }) {
  return (
    <section id="personal-projects" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay }}
      >
        <h2 className="mb-4 text-2xl text-gray-200 font-bold">
          Personal Projects
        </h2>
      </motion.div>
      <div className="flex flex-col space-y-6">
        {personalProjects
          .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
          .map((project, index) => {
            return (
              <motion.div
                key={`${project.name}-project`}
                className="project-card group hover:bg-white/5 rounded-lg p-4 transition-all duration-300 border border-transparent hover:border-gray-700"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: delay + 0.1 + index * 0.1,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="w-full sm:w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden mb-3 sm:mb-0">
                    <img
                      src={project.image}
                      alt={`${project.name} logo`}
                      className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-grow">
                    {/* Project Name and Role */}
                    <div className="flex flex-col space-y-1 mb-2">
                      <h3 className="text-gray-100 text-lg font-semibold group-hover:text-white transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{project.role}</p>

                      {/* Dates */}
                      <div className="flex flex-row space-x-1 text-xs text-gray-500">
                        <p>{moment(project.startDate).format("MMM YYYY")}</p>
                        <p> - </p>
                        <p>
                          {project.endDate
                            ? moment(project.endDate).format("MMM YYYY")
                            : "Present"}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-300 mb-3">
                      {project.description}
                    </p>

                    {/* Impact Metrics */}
                    <div className="mb-3">
                      <ul className="space-y-1">
                        {project.impact.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-400 flex items-start"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-2">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Live
                          <svg
                            className="w-3 h-3 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 rounded border border-gray-700 hover:border-gray-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Code
                          <svg
                            className="w-3 h-3 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
}
