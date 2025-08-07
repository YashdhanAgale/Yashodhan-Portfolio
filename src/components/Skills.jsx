import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Postman",
  "REST APIs",
  "JWT",
  "AWS EC2",
  "Vercel",
  "Render",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow hover:shadow-md transition duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
