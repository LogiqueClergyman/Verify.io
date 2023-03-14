import React, { useState } from 'react';

function Vari(props) {



    const [isEmailVisible, setIsEmailVisible] = useState(false);
    const [isPhoneVisible, setIsPhoneVisible] = useState(false);
    const [isUrlVisible, setIsUrlVisible] = useState(false);
    const [isBitcoinVisible, setIsBitcoinVisible] = useState(false);

    const toggleEmailVisibility = () => {
        setIsEmailVisible(!isEmailVisible);
        setIsPhoneVisible(false);
        setIsUrlVisible(false);
        setIsBitcoinVisible(false);
    };

    const togglePhoneVisibility = () => {
        setIsEmailVisible(false);
        setIsPhoneVisible(!isPhoneVisible);
        setIsUrlVisible(false);
        setIsBitcoinVisible(false);
    };

    const toggleUrlVisibility = () => {
        setIsEmailVisible(false);
        setIsPhoneVisible(false);
        setIsUrlVisible(!isUrlVisible);
        setIsBitcoinVisible(false);
    };

    const toggleBitcoinVisibility = () => {
        setIsEmailVisible(false);
        setIsPhoneVisible(false);
        setIsUrlVisible(false);
        setIsBitcoinVisible(!isBitcoinVisible);
    };

    return (



        <header className="bg-w">
            <nav className="mx-auto px-2 sm:px-6 lg:px-8 w-96">
                <div className="relative flex items-center justify-between h-16">
                    <ul className="flex items-center justify-start space-x-4">
                        <li>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={togglePhoneVisibility}>Phone</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={toggleEmailVisibility}>email</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={toggleUrlVisibility}>url</a>
                        </li>
                    </ul>

                </div>
            </nav>



            {isEmailVisible && (
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-lg font-medium mb-4">Email-verification</h2>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="phone-number"
                        >
                            Email-verify
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone-number"
                            type="tel"
                            placeholder="Enter your Email"




                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"


                    >
                        Verify
                    </button>
                </div>

            )}
            {isPhoneVisible && (


                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-lg font-medium mb-4">Phone Number Verification</h2>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="phone-number"
                        >
                            Phone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone-number"
                            type="tel"
                            placeholder="Enter your phone number"




                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"


                    >
                        Verify
                    </button>
                </div>
            )}
            {isUrlVisible && (


                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-lg font-medium mb-4">URL Verification</h2>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="phone-number"
                        >
                            URL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone-number"
                            type="tel"
                            placeholder="Enter URL"




                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"


                    >
                        Verify
                    </button>
                </div>
            )}

        </header>

    );
}



export default Vari;