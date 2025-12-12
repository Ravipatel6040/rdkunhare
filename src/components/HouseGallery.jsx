import React from "react";
import Gallery01 from "../assets/Images/Gallery01.png";
import Gallery02 from "../assets/Images/Gallery02.png";
import Gallery03 from "../assets/Images/Gallery03.png";

const houses = [
  { src: Gallery01 },
  { src: Gallery02 },
  { src: Gallery03 },
];

export default function HouseGallery() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
          {houses.map((h, idx) => (
            <figure
              key={idx}
              className="
                bg-white border-1 border-black p-1 rounded-md shadow-md 
                overflow-hidden opacity-0 fade-up 
                transform transition-all duration-700 ease-out 
                hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
              "
              style={{ animationDelay: `${idx * 0.25}s` }}
            >
              {/* Image Wrapper (Square Ratio) */}
              <div className="relative w-full aspect-square overflow-hidden rounded-md">
                <img
                  src={h.src}
                  alt="House design"
                  loading="lazy"
                  className="
                    w-full h-full object-cover 
                    transition-transform duration-700 ease-out
                    hover:scale-110
                  "
                />
              </div>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
