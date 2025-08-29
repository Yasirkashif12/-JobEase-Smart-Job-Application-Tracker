import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';

const Admin = () => {
  const [searchterm, setsearchterm] = useState("");
  const [pages, setpages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const safeParsefromlocalstorage = (key) => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (err) {
      alert(`Error parsing ${key}: ${err.message}`);
      return null;
    }
  };

  const allapp = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('applicationdata-')) {
      let data = safeParsefromlocalstorage(key);
      if (Array.isArray(data)) {
        allapp.push(...data.filter(item => item !== null));
      }
    }
  }

  const validApps = allapp.filter(app => app && (app.jobTitle || app.Jobtitle));
  const totalapplicants = validApps.length;

  const filtereddata = validApps.filter(job =>
    (job.jobTitle || "").toLowerCase().includes(searchterm.toLowerCase())
  );

  const itemsperpage = 5;
  const totalpages = Math.ceil(filtereddata.length / itemsperpage);
  const startindex = (pages - 1) * itemsperpage;
  const endindex = startindex + itemsperpage;
  const currentData = filtereddata.slice(startindex, endindex);

  const pagenumber = Array.from({ length: totalpages }, (_, i) => i + 1);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Admin <span className="text-indigo-600">Panel</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Overview of all applications stored in localStorage.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 bg-indigo-50 border border-indigo-200 rounded-xl px-6 py-4 shadow-inner text-center">
          <div className="text-xs uppercase tracking-widest text-indigo-700 font-semibold">
            Total Applicants
          </div>
          <div className="mt-1 text-3xl font-bold text-indigo-900">
            {totalapplicants}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <input
          value={searchterm}
          onChange={(e) => setsearchterm(e.target.value)}
          placeholder="Search by applicant name..."
          className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />
      </div>

      <div className="space-y-3">
        {currentData.length ? (
          currentData.map((App, index) => (
            <Link to={`/applicantdata/${App.jobID}`} key={App.id || index}>
              <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-200">
                <div>
                  <div className="text-lg font-medium text-gray-800">
                    {App.jobTitle || App.Jobtitle || 'Unknown Job'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {App.applicantName || ''}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center text-gray-400 py-8 border-dashed border border-gray-200 rounded-lg">
            No applications found.
          </div>
        )}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <button
          disabled={pages === 1}
          onClick={() => setpages(prev => prev - 1)}
          className={`px-4 py-2 rounded-lg border ${pages === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-indigo-50 text-indigo-600 border-indigo-300'}`}
        >
          Prev
        </button>

        {pagenumber.map((num) => (
          <button
            key={num}
            onClick={() => setpages(num)}
            className={`px-4 py-2 rounded-lg border transition-all ${
              pages === num
                ? 'bg-indigo-500 text-white border-indigo-500'
                : 'bg-white text-indigo-600 border-indigo-300 hover:bg-indigo-50'
            }`}
          >
            {num}
          </button>
        ))}

        <button
          disabled={pages === totalpages}
          onClick={() => setpages(prev => prev + 1)}
          className={`px-4 py-2 rounded-lg border ${pages === totalpages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-indigo-50 text-indigo-600 border-indigo-300'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Admin;
