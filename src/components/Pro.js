import { useState } from "react";

function Pro() {
  const [showFeedbackCard, setShowFeedbackCard] = useState(true);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const toggleButtonClick = () => {
    setShowFeedbackCard(true);
  };

  const handleFormSubmit = (event) => {
    //event.preventDefault();
    setFeedbackSubmitted(true);
  };

  return (
    <div className=" mx-auto  py-20 bg-gradient-to-tl from-green-900  to-black min-h-screen">
      <div className="bg-gray-500 rounded-full w-80 h-80 flex items-center justify-center overflow-hidden mr-4 flex-shrink-0 ">
        <img src="600x600" alt="manu" className="object-cover w-full h-full" />
      </div>

      <div className="flex flex-col justify-end px-10 py-2">
        <h2 className="text-gray-800 text-lg font-medium mb-1">
          Manusuta Chauhan
        </h2>
        <span className="text-sm text-gray-500">Web Developer</span>
      </div>
      <div className="px-10 py-5">
        <button
          className="bg-black hover:bg-gray-500 text-white font-bold px-2 py-3 rounded"
          onClick={toggleButtonClick}
        >
          Add comments
        </button>

        {showFeedbackCard && !feedbackSubmitted && (
          <div className="bg-black rounded-lg shadow-md p-4 mt-4">
            <form onSubmit={handleFormSubmit}>
              <div>
                <label
                  htmlFor="feedback"
                  className="block text-xl font-bold text-gray-700 mb-2"
                >
                  Feedback
                </label>
                <div className="mt-1">
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows="3"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                  ></textarea>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      {feedbackSubmitted && (
        <div className="bg-green-100 rounded-lg shadow-md p-4 mt-4 animation-fadeout 2s">
          <p className="text-green-800 font-medium ">
            Thank you for your feedback!
          </p>
        </div>
      )}
    </div>
  );
}

export default Pro;
