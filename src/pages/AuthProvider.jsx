import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const adminFlag = sessionStorage.getItem("isAdmin");
    if (adminFlag === "true") {
      setUser({
        email: "admin123",
        uid: "admin-frontend-only",
      });
      setRole("admin");
      setLoading(false);
      return; 
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const ref = doc(db, "users", currentUser.uid);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
          setRole(snapshot.data().role);
        } else {
          setRole(null);
        }
      } else {
       setRole(null);
      }

      setLoading(false)
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
