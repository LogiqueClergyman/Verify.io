import React, { useState } from "react";
import SearchCard from "./SearchCard";
import Spinner from "./Spinner"

const verification = () => {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const [isUrlVisible, setIsUrlVisible] = useState(false);
  const [isCryptoVisible, setIsCryptoVisible] = useState(false);
  const [isUPIVisible, setIsUPIVisible] = useState(false);
  const [isSMSVisible, setIsSMSVisibile] = useState(false);

  const toggleEmailVisibility = () => {
    setIsEmailVisible(!isEmailVisible);
    setIsPhoneVisible(false);
    setIsUrlVisible(false);
    setIsUPIVisible(false);
    setIsCryptoVisible(false);
    setIsSMSVisibility(false);
  };

  const togglePhoneVisibility = () => {
    setIsEmailVisible(false);
    setIsPhoneVisible(!isPhoneVisible);
    setIsUrlVisible(false);
    setIsUPIVisible(false);
    setIsCryptoVisible(false);
    setIsSMSVisibile(false);
  };

  const toggleUrlVisibility = () => {
    setIsEmailVisible(false);
    setIsPhoneVisible(false);
    setIsUPIVisible(false);
    setIsUrlVisible(!isUrlVisible);
    setIsCryptoVisible(false);
    setIsSMSVisibile(false);
  };

  const toggleCryptoVisibility = () => {
    setIsEmailVisible(false);
    setIsPhoneVisible(false);
    setIsUrlVisible(false);
    setIsUPIVisible(false);
    setIsCryptoVisible(!isCryptoVisible);
    setIsSMSVisibile(false);
  };
  const toggleUPIVisibility = () => {
    setIsEmailVisible(false);
    setIsPhoneVisible(false);
    setIsUrlVisible(false);
    setIsCryptoVisible(false);
    setIsUPIVisible(!isUPIVisible);
    setIsSMSVisibile(false);
  };
  const toggleSMSVisibility = () => {
    setIsEmailVisible(false);
    setIsPhoneVisible(false);
    setIsUrlVisible(false);
    setIsCryptoVisible(false);
    setIsUPIVisible(false);
    setIsSMSVisibile(!isSMSVisible);
  };

  return (
    <div className="m-10 p-5">
      <div className=" border-white border">
        <header className=" border-white border">
          <nav className="mx-auto px-2 sm:px-6 lg:px-8 w-96">
            <div className="relative flex items-center justify-center h-16">
              <ul className="flex items-center justify-start space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={togglePhoneVisibility}
                  >
                    Phone
                  </a>
                </li> 
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleEmailVisibility}
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleSMSVisibility}
                  >
                    SMS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleUrlVisibility}
                  >
                    URL
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleUPIVisibility}
                  >
                    UPI
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleCryptoVisibility}
                  >
                    Crypto
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="flex justify-center">
          <div className="mx-4">
            {isEmailVisible && <SearchCard title={"Email Search"} />}
            {isPhoneVisible && <SearchCard title={"Call Search"} />}
            {isUrlVisible && <SearchCard title={"Url Search"} />}
            {isUPIVisible && <SearchCard title={"UPI Search"} />}
            {isCryptoVisible && <SearchCard title={"Crypto Search"} />}
            {isSMSVisible && <SearchCard title={"SMS Search"} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default verification;
