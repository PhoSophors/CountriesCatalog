import React, {useState} from "react";

const Hero = ({onSearch, onSelect}) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <section className=" bg-white xl:p-20 md-mt-20 sm-mt-20 lg-mt-20 dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto hero-m  p-5 place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            A Comprehensive Guide to the World's Nations
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Search by country name, sort by country name, and browse by page.
          </p>
          {/* section search */}
          <div className="flex ">
            <select
              className="bg-gray-50 border py-2.5 px-4 text-sm font-medium border-gray-300 text-gray-900 text-sm rounded-l-lg  block p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white"
              onChange={selectHandler}
            >
              <option>Choose a country</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="America">America</option>
              <option value="Oceania">Oceania</option>
            </select>

            <form  onSubmit={submitHandler} className="relative w-full ">
              <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
                className="bg-gray-50 border py-2.5 px-4 text-sm font-medium border-gray-300 text-gray-900 text-sm w-full rounded-r-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white"
                type="text"
                placeholder="Search a country..."
              />
              <button
                onSubmit={submitHandler}
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </form>
          </div>
          {/* end section search */}
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
