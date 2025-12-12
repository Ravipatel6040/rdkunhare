import React from "react";
import { useParams } from "react-router-dom";

const ServicePage = () => {
  const { slug } = useParams();

  // Map slug to a title (optional)
  const title = slug?.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ") || "Service";

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600">
        Ye {title} page ka placeholder content hai. Yahan aap apna detailed content, images,
        portfolio items, contact CTA wagairah daal sakte ho.
      </p>
    </div>
  );
};

export default ServicePage;
