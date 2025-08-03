"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Layers,
  Box,
  FileCode,
  Server,
  Sparkles,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  years: number;
  category: string;
  icon: React.ReactNode;
  subskills: string[];
}

const skills: Skill[] = [
  {
    name: "C#",
    level: 95,
    years: 8,
    category: "Backend",
    icon: <Code className="w-8 h-8" />,
    subskills: ["C# 8.0 - 11.0", "LINQ", "Async/Await", "Design Patterns"],
  },
  {
    name: "ASP.NET",
    level: 92,
    years: 7,
    category: "Framework",
    icon: <Globe className="w-8 h-8" />,
    subskills: ["MVC", "Razor Pages", "SignalR", "Identity"],
  },
  {
    name: "React.js",
    level: 88,
    years: 5,
    category: "Frontend",
    icon: <Layers className="w-8 h-8" />,
    subskills: ["Hooks", "Context API", "Redux", "Next.js"],
  },
  {
    name: "MSSQL",
    level: 90,
    years: 8,
    category: "Database",
    icon: <Database className="w-8 h-8" />,
    subskills: ["T-SQL", "Stored Procedures", "Indexing", "Replication"],
  },
  {
    name: ".NET Core",
    level: 94,
    years: 6,
    category: "Framework",
    icon: <Box className="w-8 h-8" />,
    subskills: [
      "ASP.NET Core",
      "Dependency Injection",
      "Middleware",
      "Configuration",
    ],
  },
  {
    name: "Entity Framework",
    level: 85,
    years: 6,
    category: "ORM",
    icon: <FileCode className="w-8 h-8" />,
    subskills: ["EF Core", "Code First", "Migrations", "Performance Tuning"],
  },
  {
    name: "SQL Server",
    level: 88,
    years: 8,
    category: "Database",
    icon: <Server className="w-8 h-8" />,
    subskills: ["SSIS", "SSRS", "Backup/Restore", "Performance Monitoring"],
  },
  {
    name: "Web API",
    level: 93,
    years: 7,
    category: "Backend",
    icon: <Sparkles className="w-8 h-8" />,
    subskills: ["RESTful Services", "Authentication", "Swagger", "Versioning"],
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-emerald-500 p-2 bg-emerald-50 rounded-lg">
              {skill.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-card-foreground">
                {skill.name}
              </h3>
              <span className="text-sm text-muted-foreground">
                {skill.category}
              </span>
            </div>
          </div>
          <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            {skill.years} years
          </span>
        </div>

        <div className="space-y-3">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600"
              style={{
                backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
              }}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Proficiency</span>
            <span className="font-medium text-card-foreground">
              {skill.level}%
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-1">
            {skill.subskills.map((subskill, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
              >
                {subskill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 border-2 border-emerald-500 rounded-lg pointer-events-none"
      />
    </motion.div>
  );
};

const SkillSection = () => {
  const relatedTechnologies = [
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Azure DevOps",
    "Docker",
    "Microservices",
    "Clean Architecture",
    "Unit Testing",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-3 text-card-foreground">
          Technical Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my expertise in modern web development
          technologies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-secondary/50 border border-border rounded-lg p-8"
      >
        <h3 className="text-xl font-semibold mb-4 text-card-foreground">
          Related Technologies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {relatedTechnologies.map((tech) => (
            <div
              key={tech}
              className="text-center py-3 px-4 bg-card border border-border rounded-md hover:border-emerald-500 transition-colors duration-200"
            >
              <span className="text-sm font-medium text-card-foreground">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillSection;
