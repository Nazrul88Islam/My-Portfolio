"use client";

import React from "react";

interface AboutSectionProps {
  onLinkClick?: (link: string) => void;
}

export default function AboutSection({ onLinkClick }: AboutSectionProps) {
  const handleLinkClick = (link: string) => {
    if (onLinkClick) {
      onLinkClick(link);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate software engineer who discovered my love for
              technology while building my first website at 12. Since then, I've
              turned that passion into a career spanning over a decade of
              crafting digital experiences that matter. My approach centers on
              creating elegant solutions that balance technical excellence with
              user experience, always pushing boundaries while maintaining
              clean, maintainable code that scales. I specialize in building
              performant applications that solve real-world problems, with a
              particular focus on architecture that endures beyond the next
              framework trend.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond the code, I believe great software emerges from
              understanding human needs first. Whether optimizing database
              queries, architecting cloud solutions, or mentoring the next
              generation of developers, I'm driven by the challenge of complex
              problems and the satisfaction of creating something meaningful
              that users love.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Key Highlights
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-accent font-bold mr-3">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    Years of Experience
                  </p>
                  <p className="text-muted-foreground">
                    10+ years building production applications
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-accent font-bold mr-3">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    Projects Completed
                  </p>
                  <p className="text-muted-foreground">
                    150+ successful client and personal projects
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-accent font-bold mr-3">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    Preferred Technologies
                  </p>
                  <p className="text-muted-foreground">
                    TypeScript, React, Next.js, Node.js, PostgreSQL
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-accent font-bold mr-3">•</span>
                <div>
                  <p className="font-medium text-foreground">Current Focus</p>
                  <p className="text-muted-foreground">
                    Enterprise applications, performance optimization, system
                    architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
