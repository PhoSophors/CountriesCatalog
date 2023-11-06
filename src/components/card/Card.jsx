// All countries card
// date: 4 nov 2023 (8:00Pm)

import React, { useState } from "react";
import Modal from "../modal/Modal.jsx";
import { Link } from "react-router-dom";

const Card = ({
  img, // png img
  countryName,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-1 px-4 xl:h-full md:h-full sm:h-full flex items-center  mx-auto max-w-screen-xl xl:grid  lg:py-1 ">
      <div className="grid gap-4  py-1 px-4 ">
        <div className="card font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <div className=" p-3 rounded-3xl  border-dashed border-2 border-sky-500 border-gray-200 shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <div className="hover:bg-gray-200  dark:hover:bg-gray-900 bg-gray-100 border-0 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="img">
                <img className="rounded-lg img" src={img} alt="" />
              </div>
              <div className="p-5 child-card">
                <Link to={`/country/${countryName}`}>
                  <button
                    className="openModalBtn"
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    {countryName}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </section>
  );
};

export default Card;
