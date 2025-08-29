import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';

const Adminpage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleViewApplicants = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/admin/applicants');
    }, 1500);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute top-[-6rem] left-[-6rem] w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute top-[-6rem] right-[-6rem] w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-6rem] left-[4rem] w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="z-10 p-8 sm:p-12 backdrop-blur-sm bg-white/60 rounded-2xl shadow-lg max-w-2xl w-full text-center border border-gray-200">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Admin <span className="text-teal-600">Dashboard</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
          Overview of job applications and applicant activity. Use the tools below to filter, review, and manage candidates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleViewApplicants}
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
          >
            View Applicants
          </button>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Total applicants per job, search, filter, and sort will appear below.
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
