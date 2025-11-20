import React from "react";

const ContactUs = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={submitHandler}
        className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Contact Us
        </h2>
        <p className="text-gray-500 text-center mb-4">
          Feel free to reach out! We will reply as soon as we can.
        </p>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Message</label>
          <textarea
            placeholder="Your Message"
            required
            rows="5"
            className="border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-lg mt-4"
        >
          Send Message ✉️
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
