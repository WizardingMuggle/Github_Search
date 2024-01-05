import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl mb-4">Page Not Found</p>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
