import React from "react";
import about01 from "../assets/Images/about01.jpg";  // building outline
import about03 from "../assets/Images/about03.jpg";  // background pattern image

export default function AboutSection() {
    return (
        <section className="relative w-full overflow-hidden bg-black text-white">

            {/* Background pattern image */}
            <div
                className="absolute inset-0 pointer-events-none bg-cover bg-center"
                style={{
                    backgroundImage: `url(${about03})`,
                    backgroundRepeat: "repeat",
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* Building outline (auto height because no spacer now) */}
            <img
                src={about01}
                alt="building-outline"
                className="absolute right-0 bottom-0 pointer-events-none select-none opacity-30 transform-gpu
                   w-3/5 md:w-2/5 lg:w-2/6 2xl:w-1/4 object-contain"
                style={{ translate: "12% 0" }}
            />

            {/* Content section */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-24 lg:py-28">
                <div className="max-w-xl ml-auto text-right">

                    <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        ABOUT US
                    </h1>

                    <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        BANGLOW <br /> DESIGN
                    </h1>

                    <p
                        className="mt-6 text-sm md:text-base text-gray-300 italic leading-relaxed text-justify"
                    >
                        "RD Kunhare has been making private and business structures for the latest 8 years. Inside
                        this short spell of time, RD Kunhare has set out a strong groundwork for itself among
                        the unmistakable makers in the town. RD Kunhare's stress for quality and headway is your
                        best assertion that your necessities will be masterfully satisfied. We have an especially
                        related gathering of laborers for the recruit with data, experience, and dominance expected
                        to complete the jobs inside cost, specifics, and time limit. Serious agents and our consistent
                        care in regards to nuances license us to guarantee the aggregate of our work."
                    </p><br/><br/>

                    <div className="flex flex-col items-start group">
                        <a
                            href="#"
                            className="inline-block text-xs md:text-sm font-semibold uppercase bg-white text-black 
      px-6 md:px-8 py-3 md:py-4 rounded-sm shadow-sm transition-all duration-300
      group-hover:bg-[#cb9d54] group-hover:text-white"
                            style={{ letterSpacing: "1px" }}
                            aria-label="Learn more about Kunhare"
                        >
                            LEARN MORE
                        </a>

                        {/* Underline below button */}
                        <div className="mt-1 w-full">
                            <div className="w-40 h-[2px] bg-gray-400/60 transition-all duration-300 group-hover:bg-[#cb9d54]" />
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
}
