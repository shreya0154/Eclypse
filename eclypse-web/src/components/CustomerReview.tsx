import React, { useState } from 'react';
import customer1 from '../assets/customer-1.jpg';
import customer2 from '../assets/customer-2.jpg';
import customer3 from '../assets/customer-3.jpg';

const reviews = [
  {
    quote: "Understated, but unforgettable. It feels like it was made for me",
    name: "Random Woman",
    location: "NY, USA",
    avatar: customer1,
  },
  {
    quote: "A perfect fit for any occasion. Minimal yet elegant.",
    name: "John Doe",
    location: "Berlin, Germany",
    avatar: customer2,
  },
  {
    quote: "The quality is unmatched. I'm seriously impressed.",
    name: "Lina Smith",
    location: "Paris, France",
    avatar: customer3,
  },
];

const CustomerReview: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <h3 className="text-xs tracking-widest text-gray-400 mb-6">OUR CUSTOMERS</h3>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
       
        <div className="md:w-2/3">
          <div className="text-4xl leading-snug font-light mb-6">
            <span className="mr-2 text-5xl text-white">“</span>
            {reviews[current].quote}
          </div>
          <p className="text-sm font-medium">{reviews[current].name}</p>
          <p className="text-xs text-gray-400">{reviews[current].location}</p>
        </div>

        
        <div className="flex flex-col items-center gap-4">
          <button onClick={prev} className="text-white text-2xl hover:text-gray-400">&lsaquo;</button>

          <div className="flex flex-col items-center gap-2">
            {reviews.map((review, i) => (
              <img
                key={i}
                src={review.avatar}
                alt={review.name}
                className={`w-10 h-10 rounded-full object-cover border-2 transition-all duration-300 ${
                  i === current ? "border-white scale-110" : "border-transparent opacity-60"
                }`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          <button onClick={next} className="text-white text-2xl hover:text-gray-400">&rsaquo;</button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
