import React from "react";
import { ArrowRightIcon, BadgeCheckIcon, ChipIcon, DocumentDownloadIcon, DownloadIcon } from "@heroicons/react/solid";
import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai"
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa"

export default function About() {

  function gotoMedia(social) {
    if (social === "github") {
      window.open("https://github.com/tanBeige")
    }
    else if(social === "linkedin") {
      window.open("https://www.linkedin.com/in/tanarin12/")

    }
    else if(social === "medium") {
      window.open("https://medium.com/@tanarindev")

    }
  }

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Tan.
            <br className="hidden lg:inline-block" />I love to build amazing and intuitive
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I graduated Florida State University in 2020 with a Computer Science (B.S.) degree and then leaned on my entrepreneurial side. Whenever I{"'"}m not working on one project, I{"'"}m working on another. I love finding solutions to niche issues and executing a plan to solve them!
          </p>
          <div className="flex justify-center mb-8">
            {/* <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a> */}
            <a
              href="#projects"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
            <a
            target="_blank"
              href="https://docs.google.com/document/d/1HWcjZIydSkA_VqC8WiAN_gz5Lc3iGFW5/edit?usp=sharing&ouid=111873578985316598156&rtpof=true&sd=true"
              className=" ml-4 items-center inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Resume
              <DocumentDownloadIcon className="w-4 h-4 ml-1" />

            </a>
          </div>
          <div className="flex justify-center">
            <FaGithubSquare onClick={() => gotoMedia("github")} className="text-purple-400 w-12 h-12 flex-shrink-0 mr-4 hover:scale-110 hover:cursor-pointer transition-all hover:opacity-50" />
            {/* <AiFillTwitterSquare className="text-blue-400 w-12 h-12 flex-shrink-0 mr-4" /> */}
            <FaLinkedin onClick={() => gotoMedia("linkedin")} className="text-blue-500 w-12 h-12 flex-shrink-0 mr-4 hover:scale-110 hover:cursor-pointer transition-all hover:opacity-50" />
            <FaMedium onClick={() => gotoMedia("medium")} className="text-grey-500 w-12 h-12 flex-shrink-0 mr-4 hover:scale-110 hover:cursor-pointer transition-all hover:opacity-50" />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="assets/images/header.png"
          />
        </div>
      </div>
    </section>
  );
}
