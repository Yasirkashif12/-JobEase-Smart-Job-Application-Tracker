import React, { useState } from 'react';
import Categorydata from './pages/Categorydata';
import { Link } from 'react-router-dom';
import { FaUniversity, FaLaptopCode, FaUserNurse } from 'react-icons/fa';
import LoadingSpinner from './components/LoadingSpinner'; // 👈 Spinner

const iconMap = {
  FaUniversity: <FaUniversity className="text-3xl text-indigo-700" />,
  FaLaptopCode: <FaLaptopCode className="text-3xl text-indigo-700" />,
  FaUserNurse: <FaUserNurse className="text-3xl text-indigo-700" />,
};

const CategoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false); 
  const itemsPerPage = 6;

  const filteredData = Categorydata.filter((job) =>
    job.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const endIndex = pages * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleSearchChange = (e) => {
    setLoading(true);
    setSearchTerm(e.target.value);
    setPages(1);

    setTimeout(() => setLoading(false), 500); 
  };

  const handlePageChange = (page) => {
    setLoading(true);
    setPages(page);
    setTimeout(() => setLoading(false), 500); 
  };

  return (
    <div className="p-4 md:p-10 min-h-screen bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 relative">
      {loading && <LoadingSpinner />} 

      <div className="mb-6 max-w-xl mx-auto">
        <input
          type="search"
          placeholder="Search for a category..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-5 py-3 text-lg rounded-2xl shadow-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((job) => (
          <Link to={`/job/${job.id}`} key={job.id}>
            <div
              className={`rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border text-white ${job.bgColor}`}
            >
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {job.icon}
                {job.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
          <button
            onClick={() => handlePageChange(pages - 1)}
            disabled={pages === 1}
            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md disabled:bg-gray-300"
          >
            Previous
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-full border font-semibold transition-all ${
                page === pages
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-700 border-blue-400 hover:bg-blue-200'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(pages + 1)}
            disabled={pages === totalPages}
            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
