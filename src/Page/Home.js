import React from "react";
import bannerImg from "../Assets/banner.png";

const Home = () => {
  return (
    <section class="h-screen overflow-hidden dark:bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center sm:text-left">
          <h2 class="text-3xl font-semibold dark:text-white md:text-5xl">
            Generate & mint AI created NFTs in a cinch
          </h2>

          <p class="hidden dark:text-gray-400 md:mt-4 md:block">
            Get you digital asset today!
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="/"
              class="inline-block bg-gradient-to-r from-[#D43F52] to-[#C17D34] rounded  px-6 py-3 text-sm font-medium text-white transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <img
        alt="Violin"
        src={bannerImg}
        class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
      />
    </section>
  );
};

export default Home;
