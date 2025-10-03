import { motion } from "framer-motion";
import moment from "moment";

const workExperience = [
  {
    name: "DeepVest (Benjamin AI)",
    role: "Head of Frontend",
    image: "/assets/images/deepvest.png",
    startDate: new Date("2025-04-02"),
    endDate: undefined,
    description:
      "Designing and shipping DeepVest's flagship investment intelligence platform, partnering with data science to translate AI outputs into trusted user workflows.",
    impact: [
      "Cut load times by 70% through edge rendering, bundle splitting, and performance budgets.",
      "Doubled conversion rates by redesigning onboarding and pricing experiments.",
      "Implemented authentication, state orchestration, and AI response caching with observability hooks.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "Plotly"],
    link: "https://deepvest.ai",
  },
  {
    name: "Kora Labs",
    role: "Lead Frontend Developer",
    image: "/assets/images/adahandle.jpeg",
    startDate: new Date("2023-04-02"),
    endDate: new Date("2025-09-02"),
    description:
      "Led the frontend roadmap for handle.me — the identity layer for 200K+ Cardano NFT holders — across growth, retention, and payment flows.",
    impact: [
      "Launched secure wallet integrations with serverless Node.js functions on AWS Lambda.",
      "Reduced API response times by 30% through caching and concurrency improvements.",
      "Improved user retention 15% via A/B tested onboarding and referral loops.",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "AWS Lambda",
    ],
    link: "https://handle.me",
  },
  {
    name: "GRIFFIN Solutions Group",
    role: "Frontend React & React Native Developer",
    image: "/assets/images/griffin.jpeg",
    startDate: new Date("2022-12-02"),
    endDate: new Date("2023-06-02"),
    description:
      "Built a cross-platform medical certification app enabling healthcare professionals to manage credentials and continuing education from mobile.",
    impact: [
      "Created a reusable component library, cutting feature delivery time by 30%.",
      "Implemented secure login, auditing, and encrypted data storage aligned to HIPAA goals.",
      "Delivered responsive experiences across iOS, Android, and web within 3 agile sprints.",
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
    description:
      "Supported mission-critical defense applications as a cleared software engineer intern.",
    impact: [
      "Received and maintained Secret Clearance for national security programs.",
      "Partnered with senior engineers on high-availability systems and data integrity tooling.",
    ],
    techStack: ["Python", "SQL"],
    link: "https://www.northropgrumman.com/",
  },
];

const formatRange = (startDate, endDate) => {
  const start = moment(startDate).format("MMM YYYY");
  const end = endDate ? moment(endDate).format("MMM YYYY") : "Present";
  return `${start} – ${end}`;
};

export default function WorkExperience({ delay = 0 }) {
  return (
    <section id="work-experience" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
        className="mb-6"
      >
        <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
        <p className="mt-2 text-sm text-gray-400">
          Product-minded engineering leadership across venture-backed startups, marketplaces, and enterprise teams.
        </p>
      </motion.div>
      <div className="flex flex-col space-y-6">
        {workExperience
          .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
          .map((job, index) => (
            <motion.article
              key={`${job.name}-work`}
              className="group rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: delay + 0.15 + index * 0.12 }}
            >
              <a href={job.link} target="_blank" rel="noreferrer" className="block">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="w-full sm:w-28">
                    <div className="h-24 w-full overflow-hidden rounded-xl border border-white/10 bg-gray-900/60">
                      <img
                        src={job.image}
                        alt={`${job.name} logo`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-white">
                          {job.role}
                        </h3>
                        <p className="text-sm text-gray-400">{job.name}</p>
                      </div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                        {formatRange(job.startDate, job.endDate)}
                      </p>
                    </div>
                    <p className="mt-3 text-sm text-gray-300">{job.description}</p>
                    <div className="mt-4">
                      <p className="text-[11px] uppercase tracking-wide text-gray-500">
                        Key outcomes
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-300">
                        {job.impact.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
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
                        {job.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
      </div>
    </section>
  );
}
