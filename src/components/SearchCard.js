import React from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

function SearchCard(props) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center m-5">
          <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {props.title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Make your searches
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="flex justify-center">
        <div className="flex justify-center m-5">
          <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {props.title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Make your searches
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">
                Last updated 3 mins ago
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

SearchCard.propTypes = {};

export default SearchCard;


// <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//               <h2 className="text-lg font-medium mb-4">URL Verification</h2>
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="phone-number"
//                 >
//                   URL
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="phone-number"
//                   type="tel"
//                   placeholder="Enter URL"
//                 />
//               </div>
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                 Verify
//               </button>
//             </div>