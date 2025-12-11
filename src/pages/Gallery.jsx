const Gallery = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="text-gray-700 mb-4">
        Showcase your completed projects, designs and site photos here.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-gray-200 h-40 rounded-lg" />
        <div className="bg-gray-200 h-40 rounded-lg" />
        <div className="bg-gray-200 h-40 rounded-lg" />
      </div>
    </main>
  );
};

export default Gallery;
