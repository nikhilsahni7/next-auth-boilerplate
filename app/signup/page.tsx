import React from "react";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        <input
          className="border border-gray-300 px-3 py-2 rounded mb-4 w-full focus:outline-none focus:border-blue-500 text-black"
          type="text"
          placeholder="Email"
        />
        <input
          className="border border-gray-300 px-3 py-2 rounded mb-4 w-full focus:outline-none focus:border-blue-500 text-black"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-500 text-white py-2 rounded w-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
