import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
// import { projects } from "../data";
import { motion } from "framer-motion";
import moment from "moment";

const projects = [
  {
    name: "SkyHarbor",
    type: "project",
    role: "Founder",
    image: "assets/images/SHLogoFinalTS.png",
    startDate: new Date("2023-02-01"),
    endDate: undefined,
    description: "A decentralized marketplace for NFTs",
    link: "https://skyharbor.io",
  },
  {
    name: "Collectibles AI",
    type: "project",
    role: "Co-Founder and Lead Developer",
    image: "assets/images/collectibleslogowhite.png",
    startDate: new Date("2024-01-02"),
    endDate: undefined,
    description: "AI-powered collectibles identification and pricing",
    link: "https://collectiblesai.io",
  },
  {
    name: "BenjaminAI (DeepVest)",
    type: "work",
    role: "Head of Frontend",
    image: "assets/images/deepvest.png",
    startDate: new Date("2025-04-01"),
    endDate: undefined,
    description: "Lead design and development of investment AI web platform using Next.js and Tailwind CSS, cutting load times by 70% and increasing conversion rate by 100+%",
    link: "https://deepvest.ai",
  },
  {
    name: "KoraLabs",
    type: "work",
    role: "Lead Frontend Developer",
    image: "assets/images/adahandle.jpeg",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2025-09-01"),
    description: "Spearheaded UI development for handle.me platform serving 200,000+ NFT owners using React, Next.js, TypeScript, Tailwind CSS, and Framer Motion",
    link: "https://handle.me",
  },
  {
    name: "GRIFFIN Solutions Group",
    type: "work",
    role: "Frontend React & React Native Developer",
    image: "assets/images/griffin.jpeg",
    startDate: new Date("2022-12-01"),
    endDate: new Date("2023-06-01"),
    description: "Built cross-platform medical certification app using React Native and TypeScript with secure login and data storage",
    link: "https://griffinsolutionsgroup.com",
  },
  {
    name: "Skedge",
    type: "project",
    role: "Co-Founder",
    image: "assets/images/skedgelogo.png",
    startDate: new Date("2019-07-01"),
    endDate: new Date("2020-10-02"),
    description: "iOS, Android, and web application for finding local events and deals",
    link: "https://github.com/TanBeige/skedge-deals",
  },
  {
    name: "Northrop Grumman",
    type: "work",
    role: "Software Engineer Intern",
    image: "assets/images/nglogo.jpeg",
    startDate: new Date("2019-05-02"),
    endDate: new Date("2020-07-02"),
    description: "Acquired Secret Clearance to work on projects containing sensitive information",
    link: "https://www.northropgrumman.com/",
  },
];

export default function Projects({delay}) {
  return (
    <section id="projects">
      <div className="">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: delay }}
        >
          <p className="mb-3 text-xl text-gray-300 font-bold">
            Work {"&"} Projects
          </p>
        </motion.div>
        <div className="flex flex-col space-y-4">
          {projects
            .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
            .map((proj, index) => {
              return (
                <motion.div
                  key={`${proj.name}-project`}
                  className="hover:bg-white/10 rounded-lg transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (delay + 0.2) + index * 0.14 }}
                >
                  <a href={proj.link} target="_blank" rel="noreferrer" >
                    <div className="flex flex-row space-x-2">
                      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={proj.image}
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="flex-grow">

                        {/* NAME */}
                        <div className="flex flex-col space-y-[1px]">
                          <p className="text-gray-200 text-base font-semibold -mb-0.5">
                            {proj.role}
                          </p>

                          <p className="text-gray-200 text-xs">{proj.name}</p>

                          {/* DATES */}
                          <div className="flex flex-row space-x-1 text-xs text-gray-400">
                            <p className="">
                              {moment(proj.startDate).format("MMM YYYY")}
                            </p>
                            <p> - </p>
                            <p className="">
                              {proj.endDate
                                ? moment(proj.endDate).format("MMM YYYY")
                                : "Present"}
                            </p>
                          </div>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="mt-1">
                          <p className="text-sm text-gray-200">
                            {proj.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
