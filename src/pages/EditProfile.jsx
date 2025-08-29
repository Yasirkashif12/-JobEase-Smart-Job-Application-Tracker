import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import LoadingSpinner from '../components/LoadingSpinner';

const EditProfile = () => {
  const [selectjob, setselectjob] = useState(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function safeParsefromlocalstorage(key) {
    try {
      let raw = localStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (err) {
      alert("Error: " + err.message);
      return null;
    }
  }

  const applications = safeParsefromlocalstorage(`applicationdata-${user.uid}`) || [];

  const onsubmit = (updated) => {
    if (selectjob === null) {
      alert("Please select a job to edit.");
      return;
    }

    const updatedApplications = [...applications];

    updatedApplications[selectjob] = {
      ...applications[selectjob],
      jobTitle: applications[selectjob].jobTitle,
      name: updated.name,
      phonenumber: updated.phone,
      coverLetter: updated.coverLetter,
      resumeLink: updated.resumeLink,
    };

    localStorage.setItem(`applicationdata-${user.uid}`, JSON.stringify(updatedApplications));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/ApplicationSuccessPage");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center px-4 relative">
      {loading && <LoadingSpinner />}

      <form
        onSubmit={handleSubmit(onsubmit)}
        className={`bg-white shadow-xl rounded-3xl p-8 w-full max-w-xl transition-all duration-300 ${
          loading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6 tracking-wide">
          Edit Your Profile
        </h2>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Job
        </label>
        <div className="relative mb-5">
          <select
            value={selectjob ?? ""}
            onChange={(e) => setselectjob(Number(e.target.value))}
            className="block appearance-none w-full bg-white text-lg font-semibold text-black border border-purple-300 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option disabled value="">
              Please Select Job
            </option>
            {applications.map((data, index) => (
              <option className="text-black" key={index} value={index}>
                {data.jobTitle}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-500">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.516 7.548a.5.5 0 01.708 0L10 11.325l3.776-3.777a.5.5 0 11.708.708l-4.13 4.13a.5.5 0 01-.708 0l-4.13-4.13a.5.5 0 010-.708z" />
            </svg>
          </div>
        </div>

        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-3 border border-purple-300 bg-purple-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {errors.name && <p className="text-sm text-red-500 mb-2">{errors.name.message}</p>}

        <input
          {...register("phone", {
            required: "Phone is required",
            minLength: { value: 10, message: "Must be at least 10 digits" },
          })}
          placeholder="Phone Number"
          className="w-full mb-4 px-4 py-3 border border-purple-300 bg-purple-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {errors.phone && <p className="text-sm text-red-500 mb-2">{errors.phone.message}</p>}

        <textarea
          {...register("coverLetter", { required: "Cover letter is required" })}
          placeholder="Write a short cover letter..."
          rows={4}
          className="w-full mb-4 px-4 py-3 border border-purple-300 bg-purple-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
        />
        {errors.coverLetter && <p className="text-sm text-red-500 mb-2">{errors.coverLetter.message}</p>}

        <input
          {...register("resumeLink", { required: "Resume link is required" })}
          placeholder="Link to your resume (e.g., Google Drive, GitHub)"
          className="w-full mb-6 px-4 py-3 border border-purple-300 bg-purple-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {errors.resumeLink && <p className="text-sm text-red-500 mb-2">{errors.resumeLink.message}</p>}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300 shadow-md"
        >
          Submit Resume
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
