import { useState } from 'react';

function Profile() {

    const [showFeedbackCard, setShowFeedbackCard] = useState(false);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleButtonClick = () => {
        setShowFeedbackCard(true);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setFeedbackSubmitted(true);
    };

    return (
        <div className='bg-gradient-to-r from-green-800 to-black  min-h-screen py-80 '>
            <button
                className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleButtonClick}
            >
                Add Suggestions
            </button>
            {showFeedbackCard && !feedbackSubmitted && (
                <div className="bg-black rounded-lg shadow-md p-4 mt-4">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="feedback" className="block text-xl font-bold text-gray-700">
                                Feedback
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="feedback"
                                    name="feedback"
                                    rows="3"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
            {feedbackSubmitted && (
                <div className="bg-green-100 rounded-lg shadow-md p-4 mt-4">
                    <p className="text-green-800 font-medium">Thank you for your feedback!</p>
                </div>
            )}
        </div>
    );
}





export default Profile;
