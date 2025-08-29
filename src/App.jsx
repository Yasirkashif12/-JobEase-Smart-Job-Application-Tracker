// src/App.jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthProvider from "./pages/AuthProvider";
import AdminRoute from "./pages/AdminRoute";
import PrivateRoute from "./pages/PrivateRoute"; 
import Layout from "./components/Layout"; 
import Categories from "./Categories";
import ApplicationSuccessPage from "./ApplicationSuccessPage";
import Jobdetails from "./pages/Jobdetails";
import Categorydata from "./pages/Categorydata";
import FormResume from "./pages/FormResume";
import MyApplication from "./MyApplication";
import ErrorPage from "./ErrorPage";
import EditProfile from "./pages/EditProfile";
import AdminLoginPage from "./AdminLoginPage";
import Adminpage from "./Adminpage";
import Admin from "./Admin"
import ApplicantData from "./ApplicantData";
const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/adminlogin", element: <AdminLoginPage /> },
  {
path:"/admin/applicants",
element:<Admin/>
  },
  { path: "*", element: <ErrorPage /> },
      {
        path: "/adminpage",
        element: (
          <AdminRoute>
            <Adminpage /> 
          </AdminRoute>
        ),
      },
{path:'/applicantdata/:id',
  element:<ApplicantData/>
},
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories", element: <Categories /> },
      { path: "/job/:id", element: <Jobdetails /> },
      { path: "/categorydata", element: <Categorydata /> },
      { path: "/formResume", element: <FormResume /> },
      { path: "/MyApplication", element: <MyApplication /> },
      { path: "/EditProfile", element: <EditProfile /> },
{ path: "/applicationsuccesspage", element: <ApplicationSuccessPage /> }

    ],
  },
]);
function App() {
  return (
    <AuthProvider>

      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
