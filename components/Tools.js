import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
// import { projects } from "../data";
import { motion } from "framer-motion";
import moment from "moment";


const adjectives = [
    "Entrepreneur",
    "Full-Stack",
    "React",
    "Node.js",
    "Blockchain",
  ];

const tools = [
  "Javascript",
  "TypeScript",
  "SQL",
  "React.js + Next.js",
  "APIs",
  "Node.js",
  "Blockchain"
];

export default function Tools({delay}) {
  return (
    <section id="projects">
      <div className="">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 0.3, delay: 1.5 }}
          transition={{ duration: 0.3, delay: delay }}
        >
          <p className="mb-1 text-xl text-gray-300 font-bold">Tools</p>
        </motion.div>
        <div className="flex flex-wrap">
          {tools
            .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
            .map((tool, index) => {
              return (
                <motion.p
                  key={`key-adj-${tool}`}
                  className="text-gray-400 text-sm mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                >
                  {index === tools.length - 1 ? tool : <span className="mr-1">{tool} -</span>}
                </motion.p>
              );
            })}
        </div>
      </div>
    </section>
  );
}
