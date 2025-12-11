import React from "react";
import about01 from "../assets/Images/about01.jpg";  // building outline
import about03 from "../assets/Images/about03.jpg";  // background pattern image

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">

      {/* Background IMAGE (instead of CSS stripes) */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url(${about03})`,
          backgroundRepeat: "repeat", // tile pattern style
        }}
      />

      {/* Subtle dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Building outline image on the right side */}
      <img
        src={about01}
        alt="building-outline"
        className="absolute right-0 bottom-0 pointer-events-none select-none opacity-30 transform-gpu
                   w-3/5 md:w-2/5 lg:w-2/6 2xl:w-1/4 object-contain"
        style={{ translate: "12% 0" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-28 lg:py-32">
        <div className="max-w-xl ml-auto text-right">
          
         <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
           ABOUT US
          </h1>

          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            BANGLOW <br /> DESIGN
          </h1>

          <p className="mt-6 text-sm md:text-base text-gray-300 italic leading-relaxed">
          "RD Kunhare has been making private and business structures for latest 8 years. Inside this short spell of time, RD Kunhare has set out a strong groundwork for itself among the unmistakable makers in the town. RD Kunhare's stress for quality and headway is your best assertion that your necessities will be masterfully satisfied. We have an especially related gathering of laborers for the recruit with data, experience, and dominance expected to complete the jobs inside cost, specifics, and time limit. Serious agents and our consistent care in regards to nuances license us to guarantee the aggregate of our work."
          </p>

          <div className="mt-8 flex justify-end">
            <a
              href="#"
              className="inline-block text-xs font-semibold uppercase bg-white text-black px-5 py-3 rounded-sm shadow-sm
                         hover:shadow-md transition-all"
              style={{ letterSpacing: "1px" }}
            >
              LEARN MORE
            </a>
          </div>

          {/* Small underline */}
          <div className="mt-3 flex justify-end">
            <div className="w-24 h-[1px] bg-gray-400/60" />
          </div>

        </div>
      </div>

      {/* Responsive height spacer */}
      <div className="h-[56vh] sm:h-[60vh] md:h-[66vh] lg:h-[72vh]" />
    </section>
  );
}
