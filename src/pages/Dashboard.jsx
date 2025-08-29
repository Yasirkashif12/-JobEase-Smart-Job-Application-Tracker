import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Dashboard = () => {
  const { user, loading, role } = useContext(AuthContext);

  const onhandle = () => {
    signOut(auth);
  };


  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must be logged in to view the dashboard.</p>;

  return (
    <>
      <div>
        {role === "admin" && <h2>Welcome Admin</h2>}
        {role === "user" && <h2>Welcome User</h2>}
      </div>
      <div>
        <h2>Welcome: {user?.email}</h2>
        <button onClick={onhandle}>Logout</button>
      </div>
    </>
  );
};

export default Dashboard;
