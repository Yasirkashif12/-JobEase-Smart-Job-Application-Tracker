import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; 
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleExploreJobs = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/categories"); 
    }, 3000); 
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {loading && <LoadingSpinner />} 

      <div className="absolute top-[-6rem] left-[-6rem] w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-[-6rem] right-[-6rem] w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-6rem] left-[4rem] w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className={`z-10 p-6 sm:p-10 backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl max-w-2xl w-full text-center ${loading ? "opacity-50 pointer-events-none" : ""}`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight leading-tight">
          Find Your <span className="text-purple-600">Dream Job</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
          Unlock your career potential. Thousands of top companies are waiting for you to apply.
        </p>

        <button
          onClick={handleExploreJobs}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 sm:py-3 px-5 sm:px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
        >
          Explore Jobs
        </button>
      </div>
    </div>
  );
};

export default Home;
