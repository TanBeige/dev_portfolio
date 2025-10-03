import { motion } from "framer-motion";
import moment from "moment";
import Image from "next/image";

const workExperience = [
  {
    name: "BenjaminAI (DeepVest)",
    role: "Head of Frontend",
    image: "/assets/images/deepvest.png",
    startDate: new Date("2025-04-01"),
    endDate: undefined,
    description: "Lead design and development of investment AI web platform using Next.js and Tailwind CSS",
    impact: [
      "Cut load times by 70% through code-splitting and edge caching",
      "Increased conversion rate by 100+%",
      "Implemented authentication, state management, and AI response caching"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "Plotly"],
    link: "https://deepvest.ai",
  },
  {
    name: "Kora Labs",
    role: "Lead Frontend Developer",
    image: "/assets/images/adahandle.jpeg",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2025-09-01"),
    description: "Spearheaded UI development for handle.me, a platform serving 200,000+ NFT owners",
    impact: [
      "Built secure integrations with serverless Node.js functions on AWS Lambda",
      "Reduced API response times by 30%",
      "Boosted user retention by 15% through A/B tested user flows"
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "AWS Lambda"],
    link: "https://handle.me",
  },
  {
    name: "GRIFFIN Solutions Group",
    role: "Frontend React & React Native Developer",
    image: "/assets/images/griffin.jpeg",
    startDate: new Date("2022-12-01"),
    endDate: new Date("2023-06-01"),
    description: "Built cross-platform medical certification app for healthcare professionals",
    impact: [
      "Created reusable component library reducing feature development time by 30%",
      "Implemented secure login and data storage reducing potential breaches",
      "Delivered responsive, accessible interfaces across iOS and Android"
    ],
    techStack: ["React Native", "TypeScript", "React", "Node.js"],
    link: "https://griffinsolutionsgroup.com",
  },
  {
    name: "Northrop Grumman",
    role: "Software Engineer Intern",
    image: "/assets/images/nglogo.jpeg",
    startDate: new Date("2019-05-02"),
    endDate: new Date("2020-07-02"),
    description: "Worked on classified defense projects with sensitive information",
    impact: [
      "Acquired Secret Clearance for national security projects",
      "Collaborated with senior engineers on mission-critical systems"
    ],
    techStack: ["Python", "SQL"],
    link: "https://www.northropgrumman.com/",
  },
];

export default function WorkExperience({ delay = 0 }) {
  return (
    <section id="work-experience" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay }}
      >
        <h2 className="mb-4 text-2xl text-gray-200 font-bold">
          Professional Experience
        </h2>
      </motion.div>
      <div className="flex flex-col space-y-6">
        {workExperience
          .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
          .map((job, index) => {
            return (
              <motion.div
                key={`${job.name}-work`}
                className="work-card group hover:bg-white/5 rounded-lg p-4 transition-all duration-300 border border-transparent hover:border-gray-700"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.1 }}
              >
                <a href={job.link} target="_blank" rel="noreferrer">
                  <div className="flex flex-col sm:flex-row sm:space-x-4">
                    <div className="w-full sm:w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden mb-3 sm:mb-0">
                      <img
                        src={job.image}
                        alt={`${job.name} logo`}
                        className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-grow">
                      {/* Role and Company */}
                      <div className="flex flex-col space-y-1 mb-2">
                        <h3 className="text-gray-100 text-lg font-semibold group-hover:text-white transition-colors">
                          {job.role}
                        </h3>
                        <p className="text-gray-300 text-sm">{job.name}</p>

                        {/* Dates */}
                        <div className="flex flex-row space-x-1 text-xs text-gray-400">
                          <p>{moment(job.startDate).format("MMM YYYY")}</p>
                          <p> - </p>
                          <p>
                            {job.endDate
                              ? moment(job.endDate).format("MMM YYYY")
                              : "Present"}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-300 mb-3">
                        {job.description}
                      </p>

                      {/* Impact Metrics */}
                      <div className="mb-3">
                        <ul className="space-y-1">
                          {job.impact.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-400 flex items-start"
                            >
                              <span className="text-green-500 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {job.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
}
