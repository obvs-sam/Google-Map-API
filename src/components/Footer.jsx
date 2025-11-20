import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">© {new Date().getFullYear()} MySite. All rights reserved.</div>
        <div className='flex flex-col gap-2 mt-4'>
            <a href='#'>Home</a>
            <a href='#'>Services</a>
            <a href='#'>Testimonials</a>
        </div>
        <div className="flex flex-col gap-4 mt-4 md:mt-0">
          <a href="#" >Privacy</a>
          <a href="#" >Terms</a>
          <a href="#contact" >Contact</a>
        </div>
      </div>
    </footer>
  )
}
