import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logout from '../pages/Logout';
import { AuthContext } from '../pages/AuthProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">JobHunt</div>

      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        {!user && <Link to="/signup" className="hover:text-blue-600 transition">Sign Up</Link>}
        {!user && <Link to="/login" className="hover:text-blue-600 transition">Login</Link>}
        {user && <Link to="/MyApplication" className="hover:text-blue-600 transition">My Application</Link>}
        {user && <Link to="/EditProfile" className="hover:text-blue-600 transition">Edit Profile</Link>}
        {user && <Logout />}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 z-50"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 md:hidden z-40">
          <Link to="/" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
          {!user && <Link to="/signup" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Sign Up</Link>}
          {!user && <Link to="/login" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Login</Link>}
          {user && <Link to="/MyApplication" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>My Application</Link>}
          {user && <Link to="/EditProfile" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Edit Profile</Link>}
          {user && <div onClick={() => setIsOpen(false)}><Logout /></div>}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
