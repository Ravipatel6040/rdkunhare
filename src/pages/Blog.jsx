const Blog = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-gray-700 mb-4">
        Publish articles about architecture, design trends, construction tips, etc.
      </p>

      <div className="space-y-4">
        <article className="border rounded-lg p-4">
          <h2 className="font-semibold text-xl mb-1">
            How to Plan Your Dream Home
          </h2>
          <p className="text-sm text-gray-600">
            Short intro text for the blog post goes here...
          </p>
        </article>
        <article className="border rounded-lg p-4">
          <h2 className="font-semibold text-xl mb-1">
            Interior Design Trends This Year
          </h2>
          <p className="text-sm text-gray-600">
            Short intro text for another blog post goes here...
          </p>
        </article>
      </div>
    </main>
  );
};

export default Blog;
