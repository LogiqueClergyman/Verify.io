import React from "react";
import PropTypes from "prop-types";
import Warning  from "../images/Warning.png";
import Success from "../images/Success.png"

function ResultCard(props) {
  return (
    <div className="m-4 p-4">
      <a
        href="#"
        className={`flex flex-col items-center bg-black border border-${props.spam == 1 ? "red" : "emerald"}-300 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={(props.spam == 1) ? Warning : Success}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {(props.spam == 1) ? "This looks suspicious. Proceed with caution...." : "Looks good. Go right ahead...."}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
  );
}

ResultCard.propTypes = {};

export default ResultCard;
