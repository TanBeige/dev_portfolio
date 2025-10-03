import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "blue"
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "Python", "SQL", "PostgreSQL", "GraphQL", "REST APIs"],
    color: "green"
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "DigitalOcean" ,"AWS", "CI/CD", "GitHub Actions"],
    color: "purple"
  }
];

const colorClasses = {
  blue: "bg-blue-900/30 text-blue-300 border-blue-800 hover:bg-blue-900/50 hover:border-blue-700",
  green: "bg-green-900/30 text-green-300 border-green-800 hover:bg-green-900/50 hover:border-green-700",
  purple: "bg-purple-900/30 text-purple-300 border-purple-800 hover:bg-purple-900/50 hover:border-purple-700"
};

export default function Tools({ delay = 0 }) {
  return (
    <section id="skills" className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay }}
      >
        <h2 className="mb-3 text-xl text-gray-300 font-bold">Technical Skills</h2>
      </motion.div>
      <div className="space-y-4">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.1 + catIndex * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className={`px-3 py-1.5 text-sm font-medium rounded border transition-all duration-200 ${colorClasses[category.color]}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: delay + 0.2 + catIndex * 0.1 + index * 0.03,
                  }}
                  whileHover={{ scale: 1.05 }}
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
