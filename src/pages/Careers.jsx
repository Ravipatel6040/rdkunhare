const Careers = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-4">Careers</h1>
      <p className="text-gray-700 mb-4">
        Share open positions, hiring process, and career growth details here.
      </p>

      <ul className="space-y-3">
        <li className="border rounded-lg p-4">
          <h2 className="font-semibold">Junior Architect</h2>
          <p className="text-sm text-gray-600">
            0–2 years experience • Full-time • On-site
          </p>
        </li>
        <li className="border rounded-lg p-4">
          <h2 className="font-semibold">Site Engineer</h2>
          <p className="text-sm text-gray-600">
            2–5 years experience • Full-time
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Careers;
