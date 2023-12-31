import React, { useState } from "react";
import Modal from "../modal/Modal.jsx";
import { Link } from "react-router-dom";

const Card = ({
  img, // png img
  countryName,
  // setOpenModal,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="dark:bg-gray-900 rounded-3xl sm-shadow bg-white xl:h-full md:h-full sm:h-full flex items-center justify-center mx-auto max-w-screen-xl xl:grid  lg:py-1 ">
      <div className="grid rounded-3xl">
        <div className="card rounded-3xl font-light text-gray-500 dark:text-gray-400">
          <div className="p-1 rounded-3xl border-dashed border-2 border-sky-500 border-gray-200   dark:bg-gray-800 dark:border-gray-700 ">
            <Link to={`/country/${countryName}`}>
              <div className="hover:bg-gray-200 items-center justify-center rounded-2xl dark:hover:bg-gray-900 bg-gray-100 border-0 rounded-3lg dark:bg-gray-700 dark:border-gray-700">
                <div className="img">
                  <img className="rounded-2xl img" src={img} alt="" />
                </div>
                <div className="p-5 child-card country-titel">
                  <button
                    onClick={() => {
                      setModalOpen(true);
                    }}
                    // href={`/country/${countryName}`}
                    className="openModalBtn"
                  >
                    {countryName}
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Only render the Modal component when the modalOpen state variable is set to true */}
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </section>
  );
};

export default Card;
