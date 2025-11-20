import React from 'react'

const quotes = [
  { name: 'Rahul', title: 'Product Manager', text: 'Great work — the UI shipped fast and looked excellent.' },
  { name: 'Samar', title: 'Founder', text: 'Their team helped us iterate quickly and confidently.' },
  { name: 'Priya', title: 'Engineer', text: 'Well structured code and clear components.' },
  { name: 'Santos', title: 'Dev', text: 'Well structured work and fix timing' },
  { name: 'Kayra', title: 'backend dev', text: 'Api are fine and works fast' },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <div key={q.name} className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4 text-gray-700">“{q.text}”</p>
              <div className="font-semibold">{q.name}</div>
              <div className="text-sm text-gray-500">{q.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
