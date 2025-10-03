import { motion } from "framer-motion";

const metrics = [
  {
    value: "6+",
    label: "Years Shipping Product",
    description: "From defense to venture-backed startups",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    value: "200K+",
    label: "Users Served",
    description: "Fintech, AI, and Web3 platforms in production",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    value: "$1M+",
    label: "Value Transacted",
    description: "Processed via Duckpools and SkyHarbor marketplace",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.598 1M12 8V6m0 10v2m7-10a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    value: "70%",
    label: "Performance Gains",
    description: "Load time improvements across core flows",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    value: "100+%",
    label: "Conversion Lift",
    description: "Result of growth experiments and UX redesigns",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    value: "1K+",
    label: "AI Calls Summarized",
    description: "Meetings transcribed and summarized by NotesBot",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 18V5a3 3 0 016 0v13m4-6a4 4 0 01-4 4H9a4 4 0 01-4-4"
        />
      </svg>
    ),
  },
];

export default function ImpactMetrics({ delay = 0 }) {
  return (
    <section id="impact" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
        className="mb-4"
      >
        <h2 className="text-3xl font-bold text-white">Impact at a Glance</h2>
        <p className="mt-2 text-sm text-gray-400">
          Product, growth, and engineering metrics that illustrate how I move the needle.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="rounded-2xl border border-white/5 bg-gradient-to-br from-gray-900/60 to-gray-900/20 p-4 shadow-inner shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/40 hover:shadow-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.08 }}
          >
            <div className="flex items-start justify-between text-blue-300">
              {metric.icon}
            </div>
            <div className="mt-3 text-3xl font-bold text-white">{metric.value}</div>
            <div className="text-sm font-semibold text-gray-200">{metric.label}</div>
            <div className="mt-1 text-xs text-gray-500">{metric.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
