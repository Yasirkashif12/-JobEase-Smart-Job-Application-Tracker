import React, { useContext, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Categorydata from './Categorydata';
import { AuthContext } from './AuthProvider';
import LoadingSpinner from '../components/LoadingSpinner'; // 👈 Import spinner

const Jobdetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const category = Categorydata.find((cat) => cat.id === id);

  if (!category || !category.jobs || category.jobs.length === 0) {
    return (
      <h2 className="text-center text-red-600 font-bold text-2xl mt-16">
        ❌ No Jobs Found in this Category
      </h2>
    );
  }

  const handleApply = (job) => {
    setLoading(true);
    localStorage.setItem(`appliedJob-${user.uid}-${job.id}`, JSON.stringify(job));

    setTimeout(() => {
      setLoading(false);
      navigate('/FormResume'); 
    }, 1500); 
  };

  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 relative">
      {loading && <LoadingSpinner />} 

      <h1 className="text-4xl font-bold text-blue-800 mb-10 text-center">
        Jobs in {category.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {category.jobs.map((job, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white via-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border border-blue-200"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-3">{job.description}</p>

            <div className="text-sm text-gray-800 space-y-1 mb-4">
              <p><span className="font-semibold">📍 Location:</span> {job.location}</p>
              <p><span className="font-semibold">💼 Type:</span> {job.type}</p>
              <p><span className="font-semibold">💰 Salary:</span> {job.salary}</p>
            </div>

            <button
              onClick={() => handleApply(job)}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-md hover:scale-105"
              disabled={loading} 
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobdetails;
