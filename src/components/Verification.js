import React, { useState } from "react";
import ResultCard from "./ResultCard";
import SearchCard from "./SearchCard";
import Spinner from "./Spinner"

function verification (){
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
    <div>
    <div className="m-10 p-5 bg-gradient-to-tl from-green-900  to-black min-h-screen">
      <div className=" border-white border rounded-t-lg">
        <header className=" border-white border bg-black rounded-lg">
          <nav className="mx-auto px-2 sm:px-6 lg:px-8 w-96 ">
            <div className="relative flex items-center justify-center h-16">
              <ul className="flex items-center justify-start space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-emerald-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    onClick={togglePhoneVisibility}
                  >
                    Phone
                  </a>
                </li> 
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-emerald-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleEmailVisibility}
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-emerald-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleSMSVisibility}
                  >
                    SMS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-emerald-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleUrlVisibility}
                  >
                    URL
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-emerald-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleUPIVisibility}
                  >
                    UPI
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-emerald-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
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
            {/* {isEmailVisible && <SearchCard title={2} photo={"BlockPhone"} />}
            {isPhoneVisible && <SearchCard title={1} photo={"BlockPhone"}/>}
            {isUrlVisible && <SearchCard title={4} />}
            {isUPIVisible && <SearchCard title={5} />}
            {isCryptoVisible && <SearchCard title={6} />}
            {isSMSVisible && <SearchCard title={3} />} */}
            <SearchCard title={2}/>
          </div>
        </div>
      </div>
    </div>
    <div className="inline-block mt-10">
      <img
      className="absolute top-[899px] left-[2px] w-[1600px] h-[125px]"
      alt=""
      src="../footer.svg"
      />
    </div>
    </div>
  );
};

export default verification;
