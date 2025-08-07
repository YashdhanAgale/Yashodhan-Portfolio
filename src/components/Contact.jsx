import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-700 mb-4">
          📞 Mobile:{" "}
          <a href="tel:+919284864414" className="text-blue-600">
            9284864414
          </a>
        </p>
        <p className="text-gray-700">
          📧 Email:
          <a
            href="mailto:yash007agale@gmail.com"
            className="text-blue-600 mx-1"
          >
            yash007agale@gmail.com
          </a>{" "}
          |
          <a
            href="mailto:yashodhanagale3@gmail.com"
            className="text-blue-600 mx-1"
          >
            yashodhanagale3@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
