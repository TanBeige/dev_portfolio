import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Design Systems",
    ],
    color: "blue",
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"],
    color: "green",
  },
  {
    category: "DevOps & Tooling",
    skills: ["AWS", "DigitalOcean", "CI/CD", "GitHub Actions", "LaunchDarkly"],
    color: "purple",
  },
];

const colorClasses = {
  blue: "border-blue-500/30 text-blue-200 bg-blue-950/40",
  green: "border-emerald-500/30 text-emerald-200 bg-emerald-950/40",
  purple: "border-purple-500/30 text-purple-200 bg-purple-950/40",
};

export default function Tools({ delay = 0 }) {
  return (
    <section
      id="skills"
      className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-lg shadow-blue-500/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
      >
        <h2 className="text-2xl font-bold text-white">Product Stack</h2>
        <p className="mt-2 text-sm text-gray-400">
          The tooling I reach for when shipping design systems, data-heavy SaaS dashboards, and high-impact growth experiments.
        </p>
      </motion.div>
      <div className="mt-6 space-y-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.1 + catIndex * 0.1 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              {category.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium ${colorClasses[category.color]}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: delay + 0.2 + catIndex * 0.1 + index * 0.03,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
