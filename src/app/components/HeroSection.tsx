"use client";

import React from "react";
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TechStackItem = {
  name: string;
  expertise: string;
};

const techStack: TechStackItem[] = [
  { name: "C#", expertise: "Expert Level" },
  { name: "ASP.NET", expertise: "Full-Stack" },
  { name: "React.js", expertise: "Frontend Specialist" },
  { name: "MSSQL", expertise: "Database Design" },
];

const socialLinks = [
  {
    id: "github",
    icon: Github,
    href: "https://github.com/Nazrul88Islam",
    label: "GitHub",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/nazrul-islam-2988711a9/",
    label: "LinkedIn",
  },
  {
    id: "twitter",
    icon: Twitter,
    href: "https://twitter.com/Nazrul88Islam",
    label: "Twitter",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient pattern */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981] text-white text-sm font-medium">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Available for work
          </div>

          {/* Main heading with gradient text effect */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-6 leading-tight">
            Building Digital Solutions with{" "}
            <span className="bg-gradient-to-r from-[#1F2937] to-[#10B981] bg-clip-text text-transparent">
              Modern Tech Stacks
            </span>
          </h1>

          {/* Subtitle paragraph */}
          <p className="text-xl md:text-2xl text-[#1F2937]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Software Engineer specializing in creating scalable full-stack
            applications that bridge the gap between technical excellence and
            user experience. Hi, I'm{" "}
            <span className="font-bold text-[#10B981]">Nazrul Islam</span>
          </p>

          {/* Tech stack showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 hover:border-[#10B981] hover:shadow-lg">
                  <div className="text-lg font-bold text-[#1F2937] mb-1">
                    {tech.name}
                  </div>
                  <div className="text-sm text-[#10B981]">{tech.expertise}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#10B981]/25"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2 animate-pulse" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              View Portfolio
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-label={link.label}
                className="group p-2 rounded-full bg-white border border-[#E5E7EB] text-[#1F2937] hover:bg-[#10B981] hover:text-white hover:border-[#10B981] transition-all duration-300"
              >
                <link.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle floating animation elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#10B981]/20 rounded-full animate-bounce" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#1F2937]/10 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#10B981]/30 rotate-45 animate-pulse" />
      </div>
    </section>
  );
}
