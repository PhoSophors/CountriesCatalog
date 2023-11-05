import React from "react";
import { Search } from "../components/search/Search";

const Hero = () => {
  return (
    <section className="bg-white  dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            A Comprehensive Guide to the World's Nations
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Search by country name, sort by country name, and browse by page.
          </p>
          {/* search input */}
          <Search />
          {/* end search */}
        </div>

        {/* contries image */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://images.pexels.com/photos/8828346/pexels-photo-8828346.jpeg"
            alt="mockup"
          />
        </div>
        {/* End contries image */}
      </div>
    </section>
  );
};

export default Hero;
