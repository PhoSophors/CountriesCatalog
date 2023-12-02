import React from "react";

import { Link } from "react-router-dom";
import CountriesInfo from "../CountryInfo/CountriesInfo";

const Modal = (
  // { setOpenModal }
) => {
  return (
    <>
      <div className="relative Modal   w-full max-h-full p-5">
        <div className="relativ modalContainer bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-6  space-y-6">
            <CountriesInfo />
          </div>
          <div className="flex  items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <Link to="/">
              <button
                // onClick={() => {
                //   setOpenModal(false);
                // }}
                id="cancelBtn"
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
