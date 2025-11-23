"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Github, Copy, Check } from "lucide-react";

const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const contactLinks = [
    {
      icon: <Mail size={32} />,
      label: "Email",
      value: "ogirajko248@gmail.com",
      description: "Send me an email anytime",
      href: "mailto:ogirajko248@gmail.com",
      canCopy: true,
      copyType: "email" as const,
    },
    {
      icon: <Phone size={32} />,
      label: "Phone",
      value: "+381 61 192 6474",
      description: "Call or text me",
      href: "tel:+381611926474",
      canCopy: true,
      copyType: "phone" as const,
    },
    {
      icon: <Instagram size={32} />,
      label: "Instagram",
      value: "@raajkovicc__",
      description: "Follow me on Instagram",
      href: "https://instagram.com/raajkovicc__",
      canCopy: false,
    },
    {
      icon: <Github size={32} />,
      label: "GitHub",
      value: "@sparkycake0",
      description: "Check out my code",
      href: "https://github.com/sparkycake0",
      canCopy: false,
    },
  ];

  return (
    <div id="contactPage" className="w-full min-h-screen bg-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-5xl font-bold text-fg mb-8 text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl text-fg opacity-80 mb-16 text-center max-w-2xl mx-auto"
        >
          Have a question or want to work together? Reach out through any of
          these platforms!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              style={{ perspective: "1000px" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-border rounded-2xl translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300"></div>

              <div className="relative z-10 bg-fg text-bg p-6 rounded-2xl border-2 border-border group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-bg text-fg rounded-xl">
                    {link.icon}
                  </div>

                  {link.canCopy && (
                    <button
                      onClick={() =>
                        copyToClipboard(link.value, link.copyType as any)
                      }
                      className="p-2 bg-bg text-fg rounded-lg hover:scale-110 transition-transform"
                      title="Copy to clipboard"
                    >
                      {(
                        link.copyType === "email" ? copiedEmail : copiedPhone
                      ) ? (
                        <Check size={20} />
                      ) : (
                        <Copy size={20} />
                      )}
                    </button>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2">{link.label}</h3>
                <p className="text-sm opacity-70 mb-3">{link.description}</p>
                <p className="font-mono text-lg font-semibold mb-4 break-all">
                  {link.value}
                </p>

                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 bg-bg text-fg font-semibold rounded-lg hover:scale-105 transition-transform"
                >
                  Open {link.label}
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-border rounded-2xl translate-x-2 translate-y-2 -z-10"></div>
            <div className="relative z-10 bg-fg text-bg p-8 rounded-2xl border-2 border-border">
              <h3 className="text-2xl font-bold mb-3">
                Let's Build Something Amazing
              </h3>
              <p className="opacity-90 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through any platform above - I typically respond within 24
                hours!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
