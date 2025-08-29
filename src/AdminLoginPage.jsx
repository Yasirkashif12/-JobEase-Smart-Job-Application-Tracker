import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthLayout from "./components/Authlayout";
import { ShieldCheck, Eye, EyeOff } from "lucide-react"; 
import LoadingSpinner from "./components/LoadingSpinner";
const AdminLoginPage = () => {
  const username = "admin@123";
  const password = "yasir123";
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      if (data.email === username && data.password === password) {
        sessionStorage.setItem("isAdmin", "true");
        toast.success("Admin logged in successfully");
        navigate("/adminpage");
      } else {
        toast.error("Invalid admin credentials");
      }
      setLoading(false);
    }, 1500); 
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-br from-purple-50 to-white backdrop-blur-xl p-8 sm:p-10 rounded-2xl shadow-2xl border border-purple-100 max-w-md w-full mx-auto transition-all duration-300 hover:shadow-purple-200"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-purple-100 p-3 rounded-full shadow-md mb-3">
            <ShieldCheck className="text-purple-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
            Admin Login
          </h2>
          <p className="text-sm text-gray-500 text-center mt-1">
            Secure access for administrators only
          </p>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            {...register("email", { required: "Enter your Email please" })}
            type="text"
            placeholder="admin@123"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            {...register("password", { required: "Enter your password please" })}
            type={showPassword ? "text" : "password"}
            placeholder="********"
            className="w-full px-4 py-2 pr-12 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-8 right-3 flex items-center text-gray-500 hover:text-purple-600 transition"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg hover:shadow-purple-200"
        >
          Sign In
        </button>
      </form>
    </AuthLayout>
  );
};

export default AdminLoginPage;
