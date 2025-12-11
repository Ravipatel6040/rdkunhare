const Services = () => {
  const services = [
    "Architecture Design",
    "Interior Design",
    "Building & Construction",
    "Structure Design",
    "Property Management",
    "Map Sanction",
    "Vastu",
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-700 mb-6">
        We offer a complete range of architectural and construction services.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-lg mb-2">{service}</h2>
            <p className="text-sm text-gray-600">
              Add a short description for {service.toLowerCase()} here.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
