import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        
        <div className={`max-w-1400 mx-auto p-6 rounded-lg shadow-xl transition-colors duration-300`}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row space-x-4">
              <div className="w-full md:w-1/2 pr-4">
                <label htmlFor="name" className="block mb-2">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 placeholder-gray-400 text-black`}
                />
              </div>
              <div className="w-full md:w-1/2 pl-4">
                <label htmlFor="email" className="block mb-2">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 placeholder-gray-400 text-black`}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-x-4">
              <div className="w-full md:w-1/2 pr-4">
                <label htmlFor="contactDetails" className="block mb-2">Contact Details:</label>
                <textarea
                  id="contactDetails"
                  value={contactDetails}
                  onChange={(e) => setContactDetails(e.target.value)}
                  placeholder="Your contact details"
                  className={`w-full h-20 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 placeholder-gray-400 text-black`}
                ></textarea>
              </div>
              <div className="w-full md:w-1/2 pl-4">
                <label htmlFor="message" className="block mb-2">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  className={`w-full h-20 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 placeholder-gray-400 text-black`}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-md transition-colors duration-300 w-full md:w-auto ml-auto mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
