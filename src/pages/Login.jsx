import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../components/Authlayout";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 

  const onSubmit = async (data) => {
    setLoading(true); 
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Login Successfully");
      navigate("/");
      reset();
    } catch (error) {
      toast.error(error.message);
      reset();
    } finally {
      setLoading(false); 
    }
  };

  return (
    <AuthLayout>
      {loading && <LoadingSpinner />} 

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`bg-white/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl ${loading ? "opacity-50 pointer-events-none" : ""}`}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6 text-center">
          Welcome Back, Hero!
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            {...register("email", { required: "Enter your Email please" })}
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              {...register("password", { 
                required: "Enter your password please",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          disabled={loading} 
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-700">
        Don’t have an account?{" "}
        <Link to="/signup" className="font-semibold text-purple-600 hover:text-purple-800">Sign up here</Link>
      </p>
      <p className="mt-2 text-sm text-center text-gray-700">
        Are you an admin?{" "}
        <Link to="/adminlogin" className="font-semibold text-blue-600 hover:text-blue-800">Go to Admin Login</Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
