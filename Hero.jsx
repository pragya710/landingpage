import React from 'react';
//use images from pexel.com
const Hero = () => (
  <section
    className="bg-cover bg-center h-screen text-white flex items-center justify-center"
    style={{
      backgroundImage: "url('https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    }}
  >
    <div className="text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to YourBrand</h1>
      <p className="text-lg md:text-xl mb-8">
        Discover innovation, creativity, and solutions that transform ideas into reality.
      </p>
      <button className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  </section>
);

export default Hero;
