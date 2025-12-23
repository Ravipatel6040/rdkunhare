import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// 👉 Local images
import Slider05 from "../assets/Images/slider05.png";
import Slider01 from "../assets/Images/slider01.png";
import Slider03 from "../assets/Images/slider03.jpg";

// 👉 Blogs Data
const blogs = [
  {
    img: Slider05,
    date: "Jan 01, 2023",
    title: "Smart Ways to Invest in Residential Properties for Long-Term Growth",
    desc: "Explore proven strategies to invest in residential real estate.",
    slug: "residential-property-investment",
    content: `
Investing in residential property is one of the most reliable ways to build long-term wealth.
Location, builder reputation, legal approvals, and future development plans play a major role
in determining property appreciation.

Builders today focus on sustainable construction, modern amenities, and lifestyle-centric
projects that attract both buyers and investors.

Understanding market trends and choosing the right property at the right time can help you
maximize returns while minimizing risks.
    `,
  },
  {
    img: Slider01,
    date: "Feb 01, 2023",
    title: "How Builders and Brokers Help You Find the Perfect Property",
    desc: "Learn how professionals simplify buying and selling property.",
    slug: "builder-broker-guide",
    content: `
Builders and real estate brokers act as a bridge between buyers and the right opportunities.
They provide market insights, verified listings, pricing guidance, and legal support.

With professional assistance, buyers save time, avoid costly mistakes, and make confident
property decisions aligned with their budget and goals.
    `,
  },
  {
    img: Slider03,
    date: "Mar 01, 2023",
    title: "Complete Guide to Analyzing Property Value Before You Buy",
    desc: "Evaluate location, pricing trends, and ROI before investing.",
    slug: "property-value-analysis",
    content: `
Before buying a property, it is essential to analyze its true value.
Factors such as connectivity, nearby infrastructure, builder credibility,
and future development projects directly impact ROI.

A detailed property analysis helps buyers and investors secure profitable
deals with long-term appreciation potential.
    `,
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Blog not found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-indigo-600 font-semibold hover:underline"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
        >
          ← Back to Blogs
        </button>

        {/* 🖼 IMAGE (NO CUT) */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl mb-12 bg-white flex items-center justify-center">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full max-h-[480px] object-contain"
          />
        </div>

        {/* 📝 CONTENT CARD */}
        <article className="bg-white rounded-2xl shadow-md p-6 sm:p-10">

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            {blog.title}
          </h1>

          {/* META INFO */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-10">
            <span>Published on {blog.date}</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span className="text-indigo-600 font-medium">
              Real Estate
            </span>
          </div>

          {/* BLOG CONTENT */}
          <div className="text-base sm:text-lg text-gray-700 leading-8 space-y-6 text-justify">
            {blog.content
              .trim()
              .split("\n\n")
              .map((para, index) => (
                <p key={index}>{para}</p>
              ))}
          </div>

          {/* SHARE BOX */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-600 mb-1">
              Share this article
            </p>
            <p className="font-semibold text-indigo-600 break-all">
              www.yourdomain.com/blog/{blog.slug}
            </p>
          </div>
        </article>

      </div>
    </section>
  );
};

export default BlogDetail;
