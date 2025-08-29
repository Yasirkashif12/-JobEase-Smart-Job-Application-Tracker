import { Link } from "react-router-dom";

const ApplicationSuccessPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <h1 className="text-2xl font-bold text-green-700 mb-2">
          🎉 Application Submitted!
        </h1>
        <p className="text-gray-700 mb-4">
          We will contact you soon regarding your application.
        </p>

        <div className="space-x-4">
          <Link
            to="/Myapplication"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            View My Application
          </Link>

          <Link
            to="/"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccessPage;
