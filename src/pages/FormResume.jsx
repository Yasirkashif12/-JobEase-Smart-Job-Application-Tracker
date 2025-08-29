import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import LoadingSpinner from '../components/LoadingSpinner'; 

const FormResume = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false); 

  function safeParsefromlocalstorage(key) {
    try {
      let raw = localStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (err) {
      console.log("Error", err.message);
      return null;
    }
  }

  const onSubmit = async (data) => {
    try {
      setLoading(true); 

      if (!user || !user.uid) {
        toast.error("❌ You must be logged in to apply.");
        setLoading(false);
        return;
      }

      let Jobdata = null;
      for (let key in localStorage) {
        if (key.startsWith(`appliedJob-${user.uid}-`)) {
          Jobdata = safeParsefromlocalstorage(key);
          localStorage.removeItem(key); 
          break;
        }
      }

      if (!Jobdata) {
        toast.error("❌ Could not find job data.");
        setLoading(false);
        return;
      }

      const application = {
        id: Date.now(),
        jobTitle: Jobdata?.title,
        jobID: Jobdata?.id,
        ...data,
      };

      const existing = safeParsefromlocalstorage(`applicationdata-${user.uid}`) || [];
      const alreadyapplied = existing.some(app => app.jobID === Jobdata.id);
      if (alreadyapplied) {
        toast.error("You have already applied for this job");
        alert("You have already applied for this job");
        setLoading(false);
        return;
      }

      const updated = [...existing, application];
      localStorage.setItem(`applicationdata-${user.uid}`, JSON.stringify(updated));

      await setDoc(doc(db, "resume", user.uid), {
        name: data.name,
        email: data.email,
        contactnumber: data.phone,
        coverLetter: data.coverLetter,
        resumeLink: data.resumeLink
      });

      setTimeout(() => {
        setLoading(false);
        navigate("/applicationsuccesspage");
      }, 1500); 
    } catch (err) {
      toast.error("❌ Error: " + err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center px-4 relative">
      
      {loading && <LoadingSpinner />} 

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl transition duration-300 hover:shadow-purple-300 ${
          loading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">Apply for the Job</h2>

        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-2 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {errors.name && <p className="text-sm text-red-500 mb-2">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          placeholder="Email Address"
          className="w-full mb-4 px-4 py-2 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {errors.email && <p className="text-sm text-red-500 mb-2">{errors.email.message}</p>}

        <input
          {...register("phone", {
            required: "Phone is required",
            minLength: { value: 10, message: "Must be at least 10 digits" },
          })}
          placeholder="Phone Number"
          className="w-full mb-4 px-4 py-2 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {errors.phone && <p className="text-sm text-red-500 mb-2">{errors.phone.message}</p>}

        <textarea
          {...register("coverLetter", { required: "Cover letter is required" })}
          placeholder="Write a short cover letter..."
          rows={4}
          className="w-full mb-4 px-4 py-2 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
        />
        {errors.coverLetter && <p className="text-sm text-red-500 mb-2">{errors.coverLetter.message}</p>}

        <input
          {...register("resumeLink", { required: "Resume link is required" })}
          placeholder="Link to your resume (e.g., Google Drive, GitHub)"
          className="w-full mb-6 px-4 py-2 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {errors.resumeLink && <p className="text-sm text-red-500 mb-2">{errors.resumeLink.message}</p>}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300"
        >
          Submit Resume
        </button>
      </form>
    </div>
  );
};

export default FormResume;
