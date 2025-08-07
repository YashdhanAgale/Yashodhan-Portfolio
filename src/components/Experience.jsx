import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">
            Ollato Eduversity — Full Stack Developer Intern
          </h3>
          <p className="text-sm text-gray-500">Sep 2024 – Apr 2025</p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>
              Built a scalable Police Assessment Panel with MERN stack, reducing
              onboarding time by 30%
            </li>
            <li>
              Integrated secure OTP login, Fetching Assessments, PDF Report
              Generation and Razorpay/UPI payments
            </li>
            <li>
              Deployed frontend on Vercel, backend on AWS EC2 with NGINX & PM2
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
