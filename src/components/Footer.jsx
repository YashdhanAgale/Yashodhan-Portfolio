import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-4 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} Yashodhan Agale. Built with ❤️ using Vite &
      Tailwind.
    </footer>
  );
}
