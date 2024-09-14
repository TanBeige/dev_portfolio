import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";

const adjectives = ["Entrepreneur", "Full-Stack"];

const mainLinks = [
  {
    name: "Medium",
    link: "https://medium.com/@tanarindev",
    icon: (
      <FaMedium className="w-8 h-8 transition-colors hover:text-gray-200" />
    ),
  },
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
      // initial={{ backgroundColor: "white" }}
      // animate={{ backgroundColor: "black" }}
      // transition={{ duration: 1 }}
      // className="bg-white"
      className="bg-black"
    >
      <Head>
        <title>Tan Arin - Software Developer</title>
        <meta name="description" content="Tan Arin's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <motion.main
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.4, delay: 0 }}
        className="bg-black body-font text-white"
      >
        <div className="min-h-screen flex flex-col md:flex-row h-full p-8 md:p-12 md:space-x-8">
          <motion.div
            className="md:h-[calc(100vh-6rem)] md:w-1/3 h-44  md:flex rounded overflow-hidden md:sticky top-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <img
              src="/assets/images/tanpic.JPG"
              className="object-cover h-full w-full object-top md:object-center"
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
              Software Developer
            </h2>
            <div className="flex flex-row space-x-2 mt-2">
              {mainLinks.map((lnk, index) => {
                return (
                  <motion.p
                    key={`key-adj-${lnk.name}`}
                    className="text-gray-400 text-sm cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  >
                    <a href={lnk.link} target="_blank" rel="noreferrer">
                      {lnk.icon}
                    </a>
                  </motion.p>
                );
              })}
            </div>
            <div className="mt-4">
              <Tools delay={1.2} />
            </div>

            {/* WORK */}
            <div className="mt-4">
              <Projects delay={2} />
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
