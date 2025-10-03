import { useState } from "react";
import { DocumentDownloadIcon, MailIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

const navLinks = [
  { name: "Overview", href: "#top" },
  { name: "Impact", href: "#impact" },
  { name: "Experience", href: "#work-experience" },
  { name: "Projects", href: "#personal-projects" },
  { name: "Contact", href: "#contact" },
];

const resumeHref = "/assets/Tan_Arin_Frontend_Engineer_2025.pdf";
const emailHref = "mailto:tanarindev@gmail.com";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/5 bg-[#0A0A0B]/90">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold tracking-wide uppercase text-gray-200 hover:text-white"
        >
          Tan Arin
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white focus-visible:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={emailHref}
            className="inline-flex items-center rounded-md border border-gray-700/70 bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-200 hover:border-blue-500/70 hover:text-white"
          >
            <MailIcon className="mr-1.5 h-4 w-4" />
            Get in touch
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-500"
          >
            <DocumentDownloadIcon className="mr-1.5 h-4 w-4" />
            Resume
          </a>
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-700/70 bg-white/5 p-2 text-gray-200 hover:border-blue-500/70 hover:text-white"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0A0A0B]">
          <nav className="px-6 py-4 space-y-4 text-sm text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block hover:text-white"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <a
              href={emailHref}
              className="flex items-center space-x-2 rounded-md border border-gray-700/70 bg-white/5 px-3 py-2 text-gray-200 hover:border-blue-500/70 hover:text-white"
              onClick={closeMenu}
            >
              <MailIcon className="h-4 w-4" />
              <span>Get in touch</span>
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-500"
              onClick={closeMenu}
            >
              <DocumentDownloadIcon className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
