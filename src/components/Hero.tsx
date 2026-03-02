"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Send,
  Facebook,
  Code2,
  Globe2,
  BarChart3,
  ShoppingBag,
  CreditCard,
  Megaphone,
  MonitorSmartphone,
  LayoutDashboard,
  WalletCards,
  Rocket,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "./ContactModal";
import ResumeModal from "./ResumeModal";
import FloatingIcons from "./FloatingIcons";
import profileImg from "@/assets/profile_main.png";

interface HeroProps {
  onShowProjects: () => void;
}

export default function Hero({ onShowProjects }: HeroProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] right-[-5%] w-[70%] h-[50%] lg:w-[40%] lg:h-[40%] bg-neon-blue/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[-10%] left-[-5%] w-[70%] h-[50%] lg:w-[40%] lg:h-[40%] bg-neon-purple/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <h2 className="text-neon-blue text-lg font-bold tracking-widest uppercase mb-4">
            Web Developer & Digital Marketer
          </h2>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Hi, I&apos;m <span className="animate-gradient-flow text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-purple-500 to-neon-purple">Mahedi</span>
          </h1>
          <motion.p
            className="text-gray-400 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-mono"
            initial={{ opacity: 1 }}
          >
            {"Full-stack web solutions and data-driven growth strategies.".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: index * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-[2px] h-[1em] bg-neon-blue ml-1 align-middle"
            />
          </motion.p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <button
              onClick={onShowProjects}
              className="group px-8 py-3 animate-gradient-flow bg-gradient-to-r from-neon-blue via-purple-500 to-neon-purple text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="group px-8 py-3 border border-neon-blue text-neon-blue font-bold rounded-full hover:bg-neon-blue hover:text-black transition-colors duration-300 flex items-center gap-2"
            >
              <FileText size={20} className="group-hover:scale-110 transition-transform" />
              Resume
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="group px-8 py-3 border border-neon-purple text-neon-purple font-bold rounded-full hover:bg-neon-purple hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              Contact
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <Link
              href="/shop"
              className="group px-8 py-3 sm:px-10 sm:py-3.5 lg:px-12 lg:py-4 border border-gray-600/80 bg-white/5 lg:bg-white/10 text-gray-200 text-sm sm:text-base lg:text-base font-bold rounded-full hover:bg-gray-100 hover:text-black transition-colors duration-300 flex items-center gap-3 lg:gap-4 w-auto lg:basis-full lg:shadow-[0_0_30px_rgba(0,243,255,0.25)]"
            >
              <span className="whitespace-nowrap">Shop</span>

              {/* Animated service icons – visible from tablet up */}
              <div className="hidden md:flex flex-1 items-center justify-center flex-wrap gap-1.5 text-gray-300">
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <Code2 size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <Globe2 size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <BarChart3 size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <ShoppingBag size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <CreditCard size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <Megaphone size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <MonitorSmartphone size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <LayoutDashboard size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <WalletCards size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <Rocket size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <Sparkles size={14} />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center rounded-full bg-black/25 p-1.5"
                >
                  <ShieldCheck size={14} />
                </motion.span>
              </div>

              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-12 flex justify-center lg:justify-start gap-6">
            {[
              { icon: Github, href: "https://github.com/devmarketer-mahedi" },
              { icon: Facebook, href: "https://web.facebook.com/DEVMARKETER.MAHEDI" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/devmarketer-mahedi/" },
              {
                icon: null, href: "https://www.reddit.com/user/Mahedi_Hasan_DEV/", customIcon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M17 13c0-1.67-1.33-3-3-3s-3 1.33-3 3" />
                    <path d="M17 17s-1.5 1.5-5 1.5S7 17 7 17" />
                    <line x1="12" y1="8" x2="12" y2="8.01" />
                  </svg>
                )
              },
              { icon: Mail, href: "mailto:mahedihasan98934@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="relative p-3 rounded-full text-gray-400 hover:text-neon-blue transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-neon-blue/40 rounded-full blur-md opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative z-10">
                  {social.icon ? <social.icon size={24} /> : social.customIcon}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full h-[40vh] lg:h-screen relative flex items-center justify-center z-10 order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <FloatingIcons />

          {/* Professional Photo */}
          <div className="relative w-[250px] h-[250px] lg:w-[450px] lg:h-[550px] flex items-center justify-center group">
            {/* Animated Glow Behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue via-purple-500 to-neon-purple rounded-2xl blur-[20px] opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />

            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-full lg:rounded-2xl overflow-hidden border-2 border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center z-10">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <Image
                src={profileImg}
                alt="Mahedi - Web Developer"
                fill
                className="object-cover object-top z-0"
                priority
                placeholder="blur"
              />

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-neon-blue rounded-tr-3xl z-20 hidden lg:block" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-neon-purple rounded-bl-3xl z-20 hidden lg:block" />
            </div>
          </div>
        </motion.div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
