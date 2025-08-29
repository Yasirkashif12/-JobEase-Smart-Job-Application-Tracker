import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './pages/AuthProvider';

const MyApplication = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-semibold text-gray-600">Please log in to view your applications.</h2>
      </div>
    );
  }
  const applicationdata = JSON.parse(localStorage.getItem(`applicationdata-${user.uid}`)) || [];

  if (applicationdata.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-semibold text-gray-600">No applications found.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">My Job Applications</h1>
      <div className="space-y-6">
        {applicationdata.map((app) => (
          <div key={app.id} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <p className="text-gray-800 font-medium"><span className="font-semibold">Title:</span> {app.jobTitle}</p>
            <p className="text-gray-800 font-medium"><span className="font-semibold">Name:</span> {app.name}</p>
            <p className="text-gray-800 font-medium"><span className="font-semibold">Email:</span> {app.email}</p>
            <p className="text-gray-800 font-medium"><span className="font-semibold">Phone:</span> {app.phone}</p>
            <p className="text-gray-800 font-medium"><span className="font-semibold">Cover Letter:</span> {app.coverLetter}</p>
            <p className="text-gray-800 font-medium"><span className="font-semibold">Resume:</span> <a href={app.resumeLink}  className="text-blue-600 underline">View</a></p>
            <Link
              to={`/job/${app.jobID}`}
              className="inline-block mt-4 text-purple-600 font-semibold hover:text-purple-800 transition"
            >
              View Job Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplication;
