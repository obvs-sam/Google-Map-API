import React from 'react'

const services = [
  { title: 'UI Design', desc: 'We specialize in designing user interfaces that are not just visually stunning but also deeply intuitive. Our approach blends modern aesthetics with functional clarity, ensuring every screen guides users effortlessly toward their goals' },
  { title: 'Frontend Dev', desc: 'We build fast, responsive, and scalable frontends that don’t just look good—they perform. Every component is crafted with precision, ensuring seamless user experiences across devices and browsers.' },
  { title: 'Consulting', desc: 'We offer hands-on consulting that bridges the gap between vision and implementation. Whether you are launching a tech product, refining a service platform, or scaling operations, we help you architect solutions that are secure, scalable, and conversion-ready.' },
  { title: 'Google Maps API', desc: 'Powerful Location Integration for Your Business I provide Premium Google Map API services for businesses that need fast, accurate, and secure location solutions. With my API, you can easily integrate advanced map features into your website or mobile app' },
  { title: 'SMS API', desc: 'Our SMS API empowers your platform to send real-time, transactional, and promotional messages with speed and precision. Whether you are confirming orders, sending OTPs, or running campaigns, our API ensures your message gets delivered—fast.' },
  { title: 'App Development', desc: 'We build high-performance web and mobile applications that are fast, secure, and built to scale. Whether you are launching a startup, digitizing a service, or managing products and payments, we turn your vision into a seamless digital experience.' },
]

export default function Services(){
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
