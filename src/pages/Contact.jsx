const Contact = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Reach out for project enquiries, collaborations, or general questions.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Address:</span> Your office address
            here
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91-00000-00000
          </p>
          <p>
            <span className="font-semibold">Email:</span> info@example.com
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
