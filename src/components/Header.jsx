import React from 'react'
import logo from '../assets/logo.jpg';
export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold flex gap-2">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
            <p>Gmap</p>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md">Get Started</button>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-600">Menu</button>
        </div>
      </div>
    </header>
  )
}
