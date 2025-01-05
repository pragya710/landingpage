import React from 'react';
// use online pictures from pexel.com
const Features = () => (
  <section className="bg-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <img
            src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Feature Icon"
            className="mx-auto mb-4 rounded-full"
          />
          <h3 className="text-lg font-bold mb-2">Feature One</h3>
          <p className="text-gray-600">Empower your business with advanced technology solutions.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <img
            src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Feature Icon"
            className="mx-auto mb-4 rounded-full"
          />
          <h3 className="text-lg font-bold mb-2">Feature Two</h3>
          <p className="text-gray-600">Innovation tailored to meet your unique needs.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <img
            src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Feature Icon"
            className="mx-auto mb-4 rounded-full"
          />
          <h3 className="text-lg font-bold mb-2">Feature Three</h3>
          <p className="text-gray-600">Crafting designs that leave lasting impressions.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
