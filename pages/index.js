import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function App() {
  return (
    <div className={styles.container}>
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
      
      <main className="text-gray-400 bg-gray-900 body-font" style={{paddingBottom: 80}}>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        {/* <Testimonials /> */}
        {/* <Contact /> */}
      </main>

    </div>
  )
}
