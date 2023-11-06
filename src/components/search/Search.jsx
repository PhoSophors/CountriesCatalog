import React from "react";

const Search = () => {
  return (
    <form>
      <div className="flex">
        <select
          className="bg-gray-50 border py-2.5 px-4 text-sm font-medium border-gray-300 text-gray-900 text-sm rounded-l-lg  block p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white"

        >
          <option value>Choose a country</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
          <option value="Oceania">Oceania</option>
        </select>

        <div  className="relative w-full">
          <input
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            type="text"
            placeholder="Search a country..."
          />
          <button
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
        </div>
      </div>
    </form>
  );
};

export default Search;
