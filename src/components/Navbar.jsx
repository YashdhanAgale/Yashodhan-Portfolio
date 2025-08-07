import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Yashodhan Agale</div>
        <ul className="hidden md:flex space-x-6">
          {["Home", "Projects", "Skills", "Experience", "Contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section.toLowerCase()}
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-blue-600"
                >
                  {section}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
