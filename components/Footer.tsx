"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Github, Heart } from "lucide-react";
import Link from "next/link";
import { ScrollToId } from "./Navbar";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      href: "https://instagram.com/raajkovicc__",
      label: "Instagram",
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/sparkycake0",
      label: "GitHub",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:ogirajko248@gmail.com",
      label: "Email",
    },
    {
      icon: <Phone size={24} />,
      href: "tel:+381xxxxxxxxx",
      label: "Phone",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "homePage" },
    { name: "Projects", href: "projectsPage" },
    { name: "Skills", href: "skillsPage" },
    { name: "Contact", href: "contactPage" },
  ];

  return (
    <footer className="w-full bg-fg text-bg py-12 px-4 border-t-4 border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Software Developer</h3>
            <p className="opacity-90 leading-relaxed">
              Passionate about creating stunning and fast-running web and mobile
              applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => ScrollToId(link.href)}
                    className="opacity-90 hover:opacity-100 hover:underline transition-all duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center bg-bg text-fg rounded-lg hover:scale-110 hover:shadow-[4px_4px_0px_0px] hover:shadow-border transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="w-full h-0.5 bg-border my-8"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="opacity-90 text-center md:text-left">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
