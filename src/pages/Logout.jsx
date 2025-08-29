import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
const Logout = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const onhandle = async () => {
    try {
      if (user?.uid) {
        localStorage.setItem("lastUid", user.uid);
      }
      await signOut(auth);
      navigate('/login');  
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <button onClick={onhandle}>Logout</button>
    </div>
  );
};

export default Logout;
