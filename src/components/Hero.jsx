import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white"
    >
      <div className="text-center p-6">
        <img
          src="https://i.pinimg.com/1200x/ab/b5/33/abb533741bcd9b568b61308b20d49673.jpg"
          alt="Yashodhan Agale"
          className="w-40 h-40 mx-auto rounded-full shadow-lg object-cover"
        />
        <h1 className="mt-6 text-4xl font-bold">Yashodhan Agale</h1>
        <p className="text-xl text-gray-700 mt-2">Full Stack Developer</p>
        <p className="mt-4 max-w-xl mx-auto text-gray-600">
          A passionate full-stack developer specialized in building scalable web
          applications with modern technologies.
        </p>
      </div>
    </section>
  );
}
