"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  type: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    name: "In-House ERP (Desktop and Web)",
    description:
      "Developed and maintained a comprehensive ERP solution to manage core business operations, enhancing efficiency and productivity across departments. Features include inventory management, HR, finance, and reporting modules.",
    technologies: [
      "C#",
      "ASP.NET MVC",
      "React.js",
      "Tailwind CSS",
      "Redux",
      "MSSQL",
    ],
    type: "Enterprise Application",
    github: "https://github.com/Nazrul88Islam/AMLERP",
    demo: "http://223.27.82.38:8002/amlerp",
  },
  {
    name: "In-House ERP Back-End",
    description:
      "Designed and optimized the back-end architecture to support scalable and secure ERP functionalities. Implemented RESTful APIs, database optimization, and enterprise-grade security measures.",
    technologies: ["ASP.NET Core", "Entity Framework", "MSSQL", "Azure", "JWT"],
    type: "Backend Architecture",
    github: "https://github.com/Nazrul88Islam/ERPOptimaWebAPI",
    demo: "https://erp-backend-api.azurewebsites.net/swagger",
  },
  {
    name: "Online Leave Portal",
    description:
      "Built a user-friendly online portal for managing employee leave requests, approval workflows, and comprehensive reporting. Features include multi-level approval chains, calendar integration, and leave balance tracking.",
    technologies: [
      "ASP.NET Web Forms",
      "MSSQL",
      "Crystal Reports",
      "jQuery",
      "Bootstrap",
    ],
    type: "Web Application",
    github: "https://github.com/Nazrul88Islam/Leave2022",
    demo: "http://223.27.82.38:8002/Leave/",
  },
  {
    name: "VAT Software",
    description:
      "Developed a customized VAT management system to ensure compliance with regulatory requirements and streamline reporting. Features include automated calculations, return filing, and audit trails.",
    technologies: ["ASP.NET", "MSSQL", "Crystal Reports", "C#"],
    type: "Financial Software",
    demo: "https://vat-system-demo.netlify.app",
  },
  {
    name: "Asset Management System",
    description:
      "Implemented a robust system for tracking and managing company assets, ensuring accurate records and efficient utilization. Features include QR code scanning, depreciation calculations, and asset lifecycle management.",
    technologies: ["ASP.NET", "MSSQL", "C#", "Barcode Scanner API"],
    type: "Enterprise Solution",
    demo: "https://asset-management-demo.netlify.app",
  },
  {
    name: "Mind Leap",
    description:
      "Mental wellness frontend project featuring guided meditations, mood tracking, and mental health resources. Designed with a calming aesthetic and responsive interface for mobile and desktop users.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Chart.js"],
    type: "Health & Wellness Web App",
    demo: "https://mind-leap.vercel.app/",
  },

  {
    name: "AxonEase solution Website",
    description: "Brief description about AxonEase solution Software firm.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Next.js"],
    type: "AxonEase solution Company Website",
    demo: "https://axoneasebd.com/",
  },
];

export const ProjectsPortfolio = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of enterprise applications developed for Abdul
            Monem Limited, including comprehensive ERP systems, financial
            management solutions, and health-focused web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-200 hover:border-emerald-200">
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <Code2 className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="text-sm text-emerald-600 font-semibold">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-gray-100 flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs border-gray-300 text-gray-700 hover:bg-gray-50"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3.5 h-3.5 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
