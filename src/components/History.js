import React, { useState } from "react";

function His() {
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [history, setHistory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, history });
    
  };

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

  return (
    <div className="mx-auto max-w-md">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={toggleVisibility}
    >
    Search History
    </button>
    {isVisible && (
      <form className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
      <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-6">
        Check Your History
      </h2>
      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="history"
        >
          History
        </label>
        <textarea
          className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          id="history"
          name="history"
          required
          value={history}
          onChange={(event) => setHistory(event.target.value)}
        ></textarea>
      </div>
      </form>
      )}
    </div>
    
        
  );
}

export default His;
