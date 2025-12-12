// src/components/FeaturesRow.jsx
import React from "react";
import { FaBuilding, FaUsers, FaClipboardCheck, FaSmile } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaBuilding className="w-10 h-10" />,
    number: "8+",
    label: "Years of Experience",
  },
  {
    id: 2,
    icon: <FaUsers className="w-10 h-10" />,
    number: "10+",
    label: "Team Members",
  },
  {
    id: 3,
    icon: <FaClipboardCheck className="w-10 h-10" />,
    number: "50+",
    label: "Project Success",
  },
  {
    id: 4,
    icon: <FaSmile className="w-10 h-10" />,
    number: "100+",
    label: "Happy Customers",
  },
];

export default function FeaturesRow() {
  return (
    <section
      aria-label="company-stats"
      className="w-full"
      style={{
        // diagonal stripes + deep black background
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 12px), linear-gradient(180deg,#000000 0%, #080808 100%)",
        backgroundSize: "auto",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={f.id}
              className={`flex flex-col items-center text-center py-8 md:py-10 ${
                idx !== 0 ? "md:border-l md:border-gray-800" : ""
              }`}
            >
              <div className="rounded-full border border-gray-700 p-4 mb-4 text-white">
                {/* icon color white + sized via class */}
                <div className="text-white">{f.icon}</div>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                {f.number}
              </h3>

              <p className="mt-3 text-xs sm:text-sm md:text-sm uppercase text-gray-300 tracking-wider">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
