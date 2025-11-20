import React from 'react'

export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">We Provide Services For Better Working</h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">A minimal Efforts to get your work done.</p>
        <div className="flex justify-center gap-4">
          <a className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold" href="#services">Our Services</a>
          <a className="border border-white px-6 py-3 rounded-md" href="#contact">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
