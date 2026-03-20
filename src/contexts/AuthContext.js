import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User logged in, listen to their document in Firestore for real-time role/data updates
        const userDocRef = doc(db, 'users', user.uid);
        const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
            setUserRole(data.role || 'student'); // Default to student if not specified
          } else {
            setUserData(null);
            setUserRole(null);
          }
          setCurrentUser(user);
          setLoading(false);
        }, (error) => {
          console.error("Error fetching user data:", error);
          setCurrentUser(user);
          setLoading(false);
        });

        // Cleanup the snapshot listener when auth state changes
        return () => unsubscribeSnapshot();
      } else {
        // User logged out
        setCurrentUser(null);
        setUserRole(null);
        setUserData(null);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const value = {
    currentUser,
    userRole,
    userData,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
