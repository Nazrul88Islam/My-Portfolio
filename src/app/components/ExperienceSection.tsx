"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string[];
  location: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      position: "Deputy Manager – MIS",
      company: "Abdul Monem Limited",
      duration: "March 2023 – Present",
      location: "Dhaka, Bangladesh",
      description: [
        "Lead, mentor, and manage the software engineering team to deliver high-quality software solutions",
        "Collaborate with other department heads to ensure software development supports the company's overall objectives",
        "Monitoring daily operation, analyzing workflow and establishing priorities to develop standards process and setting deadlines",
        "Assign and review work of programmers results as per requirements",
        "Design and Develop database architecture for information system projects",
        "Develop policies, procedure and controls for securing Database",
        "Write Complex Query as per requirement",
      ],
    },
    {
      position: "Software Engineer",
      company: "Abdul Monem Limited",
      duration: "March 2019 - February 2023",
      location: "Dhaka, Bangladesh",
      description: [
        "Develop Codes, Databases, data collection and new reports in the system of the In house ERP (both Desktop and Web Version) for all business solution to design and optimize statistical efficiency and maintain quality",
        "Develop new necessary Software for Business",
        "Filter & clean data by reviewing all software reports, printouts and performance indicators to locate and correct code problems of databases",
        "Debug the existing software to find errors and solve them for uninterrupted use of the software",
        "Ensure the backup of Visual SourceSafe Environment in weekly basis for preventing the system from data loss and major system disaster",
        "Log review, clean and take necessary steps according to the requirements of the users",
      ],
    },
    {
      position: "Junior Software Engineer",
      company: "Abdul Monem Limited",
      duration: "October 2017 - January 2019",
      location: "Dhaka, Bangladesh",
      description: [
        "Developed and maintained clean, optimized codebases for the In house ERP system (Desktop and Web versions) to support business solutions",
        "Designed and implemented new software applications tailored to business needs",
        "Conducted data filtering and cleaning by reviewing software reports, printouts, and performance indicators, resolving database issues for optimal efficiency",
        "Debugged and resolved software errors, ensuring uninterrupted system performance",
        "Managed weekly backups of the Visual SourceSafe Environment to prevent data loss and mitigate risks of system failure",
        "Reviewed logs and implemented necessary updates or changes based on user requirements",
        "Created Reports with store procedure and crystal report",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive journey through software engineering at Abdul Monem
            Limited, showcasing progression from Junior Developer to Deputy
            Manager and leadership.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-100 
                       hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {experience.position}
                  </h3>
                  <p className="text-lg font-semibold text-emerald-600">
                    {experience.company}
                  </p>
                  <div className="flex items-center text-gray-600 mt-4 space-x-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="space-y-3">
                    {experience.description.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
