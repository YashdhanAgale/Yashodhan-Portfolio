import React from "react";

const projects = [
  {
    title: "CodeMate",
    description:
      "A real-time chat & collaboration app for developers. Connect, chat & collaborate instantly.",
    tech: "MERN, Redux, WebSockets, Tailwind, AWS EC2, Nginx, PM2",
    live: "http://54.174.26.89/",
    github: {
      frontend: "https://github.com/YashdhanAgale/CodeMate-Frontend",
      backend: "https://github.com/YashdhanAgale/CodeMate-Backend",
    },
  },
  {
    title: "Note-taking App",
    description:
      "Secure note management system with OTP-based login. Users can create and delete notes safely.",
    tech: "MERN, Tailwind CSS, Vercel",
    live: "https://note-taking-frontend-pied.vercel.app/signin",
    github: {
      frontend: "https://github.com/YashdhanAgale/Note-taking-frontend",
      backend: "https://github.com/YashdhanAgale/Note-taking-Backend",
    },
  },
  {
    title: "Telemedicine App",
    description:
      "JWT login, admin dashboard, doctor session management, real-time device mapping.",
    tech: "MERN, WebSockets, Tailwind, Vercel, Render",
    live: "https://telemedicine-frontend-two.vercel.app/",
    github: {
      frontend: "https://github.com/YashdhanAgale/Telemedicine-Frontend",
      backend: "https://github.com/YashdhanAgale/Telemedicine-Backend",
    },
  },
  {
    title: "Mini LinkedIn",
    description:
      "Authentication, profile, text-only posts, persistent login, protected routes.",
    tech: "MERN, Tailwind CSS",
    live: "https://mini-linked-in-frontend-six.vercel.app/",
    github: {
      frontend: "https://github.com/YashdhanAgale/miniLinkedIn-Frontend",
      backend: "https://github.com/YashdhanAgale/miniLinkedIn-Backend",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-700 mb-3">{proj.description}</p>
                <div className="mb-3">
                  <span className="text-sm font-medium  text-gray-500 uppercase">
                    Tech Stack:
                  </span>
                  <p className="text-sm text-gray-600 mt-1">{proj.tech}</p>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Live
                  </a>
                  <a
                    href={proj.github.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition"
                  >
                    Frontend Code
                  </a>
                  <a
                    href={proj.github.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition"
                  >
                    Backend Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
