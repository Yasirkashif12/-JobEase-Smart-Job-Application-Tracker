import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import LoadingSpinner from '../components/LoadingSpinner';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        name: data.name,
        email: data.email,
        role: "user"
      });
      toast.success('Signup successful');
      navigate('/');
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email is already in use. Please try logging in.");
      } else {
        toast.error("Signup failed: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const onHandle = (e) => {
    e.preventDefault();
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-900 via-black to-blue-900 px-4 py-10 overflow-auto">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 tracking-wide">
          Create Your Journey ✨
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              {...register("name", { required: "Enter your name please" })}
              type="text"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={onHandle}
              className="w-full p-3 rounded-md bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.name && <p className="text-pink-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              {...register("email", { required: "Enter your email please" })}
              type="email"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={onHandle}
              className="w-full p-3 rounded-md bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <p className="text-pink-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <input
              {...register("password", { required: "Enter your password please" })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={onHandle}
              className="w-full p-3 pr-12 rounded-md bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-sm text-white/70 hover:text-white transition"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && <p className="text-pink-400 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="relative">
            <input
              {...register("confirm", {
                required: "Confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match"
              })}
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirm"
              value={form.confirm}
              onChange={onHandle}
              className="w-full p-3 pr-12 rounded-md bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute inset-y-0 right-3 flex items-center text-sm text-white/70 hover:text-white transition"
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
            {errors.confirm && <p className="text-pink-400 text-sm mt-1">{errors.confirm.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-white text-sm mt-4 text-center">
          Already have an account?{' '}
          <a href="/login" className="underline hover:text-purple-300">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
