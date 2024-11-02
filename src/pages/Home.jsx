import React from 'react';

const Home = () => {
  return (
    <section className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center">Welcome to My Portfolio</h1>
      <p className="text-lg text-center mt-4">I am [Your Name], a passionate developer focused on building meaningful projects.</p>
      <a href="/projects" className="mt-8 bg-black text-white py-2 px-4 rounded-md">Check Out My Work</a>
    </section>
  );
};

export default Home;
