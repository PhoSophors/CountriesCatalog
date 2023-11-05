// All countries card
// date: 4 nov 2023 (8:00Pm)

import React from "react";

const Card = ({
  img, // png img
  countryName,
}) => {
  return (
    <section className="max-w-screen-xl mx-auto gap-10 ">
      <div className="grid-item py-1 px-4 ">
        <div className="card font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <div className=" p-3 rounded-3xl  border-dashed border-2 border-sky-500 border-gray-200 shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <div className="hover:bg-gray-200  dark:hover:bg-gray-900 bg-gray-100 border-0 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="img">
                <img className="rounded-lg img" src={img} alt="" />
              </div>
              <div className="p-5 child-card">
                <a href="#" target="blank">
                  <h5 className="country-titel mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {countryName}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
