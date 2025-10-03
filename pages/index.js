import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import WorkExperience from "../components/WorkExperience";
import PersonalProjects from "../components/PersonalProjects";
import ImpactMetrics from "../components/ImpactMetrics";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";
import { DocumentDownloadIcon } from "@heroicons/react/solid";

const mainLinks = [
  // {
  //   name: "Medium",
  //   link: "https://medium.com/@tanarindev",
  //   icon: (
  //     <FaMedium className="w-8 h-8 transition-colors hover:text-gray-200" />
  //   ),
  // },
  {
    name: "GitHub",
    link: "https://github.com/tanBeige",
    icon: (
      <FaGithubSquare className="w-8 h-8 transition-colors hover:text-violet-600" />
    ),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tanarin12",
    icon: (
      <FaLinkedin className="w-8 h-8 transition-colors hover:text-sky-700" />
    ),
  },
];

export default function App() {
  return (
    <motion.div
      className="bg-[#0A0A0B]"
    >
      <Head>
        <title>Tan Arin - Frontend Engineer</title>
        <meta name="description" content="Tan Arin's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <motion.main
        className="bg-[#0A0A0B] body-font text-white"
      >
        <div className="min-h-screen flex flex-col md:flex-row h-full p-8 md:p-12 md:space-x-8">
          <motion.div
            className="md:h-[calc(100vh-6rem)] md:w-1/3 h-44 md:flex rounded overflow-hidden md:sticky top-10 relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Image
              src="/assets/images/tanpic.JPG"
              alt="Tan Arin - Frontend Engineer"
              fill
              className="object-cover object-top md:object-center"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div
            className="flex flex-col md:w-2/3 h-full md:mt-0 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h1 className="text-2xl text-white font-semibold">Tan Arin</h1>
            <h2 className="text-3xl text-gray-200 font-bold">
              Frontend Engineer
            </h2>
            <p className="text-base text-gray-400 mt-2">
              Building scalable frontend solutions serving 200K+ users
            </p>
            <div className="flex flex-row space-x-2 mt-3 items-center">
              {mainLinks.map((lnk, index) => {
                return (
                  <motion.div
                    key={`key-adj-${lnk.name}`}
                    className="text-gray-400 text-sm cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  >
                    <a
                      href={lnk.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit my ${lnk.name} profile`}
                    >
                      {lnk.icon}
                    </a>
                  </motion.div>
                );
              })}
              <motion.a
                target="_blank"
                rel="noreferrer"
                href="/assets/Tan_Arin_Frontend_Engineer_2025.pdf"
                className="items-center inline-flex text-sm h-[36px] font-semibold transition-all text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border-0 py-0 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + 4 * 0.1 }}
                aria-label="Download my resume (PDF)"
              >
                Download Resume
                <DocumentDownloadIcon className="w-4 h-4 ml-1.5" />
              </motion.a>
            </div>
            <div className="mt-6">
              <Tools delay={1.2} />
            </div>

            {/* IMPACT METRICS */}
            <div className="mt-6">
              <ImpactMetrics delay={1.8} />
            </div>

            {/* WORK EXPERIENCE */}
            <div className="mt-6">
              <WorkExperience delay={2.2} />
            </div>

            {/* PERSONAL PROJECTS */}
            <div className="mt-6">
              <PersonalProjects delay={2.6} />
            </div>
          </motion.div>
        </div>

        {/* <Navbar /> */}
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Skills /> */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}
      </motion.main>
    </motion.div>
  );
}
