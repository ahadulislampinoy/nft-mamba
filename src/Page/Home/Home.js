import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../Assets/banner.png";

const Home = () => {
  return (
    <section className="h-screen overflow-hidden dark:bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-3xl font-semibold dark:text-white md:text-5xl">
            Generate & mint AI created NFTs in a cinch
          </h2>

          <p className="hidden dark:text-gray-400 md:mt-4 md:block">
            Get you digital asset today!
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              to="/gallery"
              className="inline-block bg-gradient-to-r from-[#D43F52] to-[#C17D34] rounded  px-6 py-3 text-sm font-medium text-white transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <img
        alt="Violin"
        src={bannerImg}
        className="h-full w-full object-cover"
      />
    </section>
  );
};

export default Home;
