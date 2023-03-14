import React from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import BlockPhone from "../images/BlockPhone.png";
import BlockMail from "../images/BlockMail.png";
import ResultCard from "./ResultCard";
import { useState } from "react";
import axios from "axios";

function SearchCard(props) {
  

  const axios = require('axios');
  const [resultCardParams, setResultCardParams] = useState({
    spam: 0,
    nation: ""
  })
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
const SubmitEvent = async() => {
  let url="";
  setResultCardParams({
    spam: 0,
    nation: ""
  })
  if(props.title == 1){
    url = `https://ipqualityscore.com/api/json/phone/sDbjd6FTxl4IAVuvpmyvY4eKeL1H8VYM/${text}`;
  }
  else if(props.title == 2){
    url = "https://cors-anywhere.herokuapp.com/https://api.kleanmail.com/record_verification/api_record";
  }
  else if(props.title == 3){
    url = "";
  }
  else if(props.title == 4){
    url = "";
  }


//   var request = require('request');
// var options = {
//   'method': 'POST',
//   'url': 'https://api.kleanmail.com/record_verification/api_record',
//   'headers': {
//     'api_key': 'api_key::_xjpNt5R1lNBfEpFccZ81jTZavDtl2%2FSro2%2B%2BVgZ0Eoc%3D', // Your API KEY
//     'Content-Type': 'application/json'
//     },
//    body: JSON.stringify({
//    "record": "example@example.com" // Record
//     })
//     };
// request(options, function (error, response) {
// if (error) throw new Error(error);
// console.log(response.body);
// });



  let data = await fetch(url,{
    method: "POST",
    "headers":{
      "Content-Type": "application/json",
      "api-key": "api_key::_xjpNt5R1lNBfEpFccZ81jTZavDtl2%2FSro2%2B%2BVgZ0Eoc%3D",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      "record": "example@example.com"
    })
  });
  setLoading(true);
  let parsedData = await data.json();
  setLoading(false);
  setResult(true);
  if(props.title == 2){
    // setResultCardParams(
      // spam = parsedData[fraud_score] > 80 ? 1 : 0
    // )
    console.log('====================================');
    console.log(parsedData);
    console.log('====================================');
  }
}


  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center m-5">
          <div className="flex flex-col rounded-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <div className="flex-wrap justify-between inline-block">
              <div>
                <img
                  className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={BlockMail}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  {props.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Make your searches
                </p>
              </div>
              <div>
                <form>
                  <label
                    for="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      value={text}
                      onChange={handleOnChange}
                      id="search"
                      className="block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-green-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={SubmitEvent}
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {result && <ResultCard parameters={resultCardParams}/>}
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
