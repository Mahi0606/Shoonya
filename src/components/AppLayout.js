import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';

function AppLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        setIsSignedIn(true);
        setUser(user);
        navigate("/");
      } else {
        dispatch(removeUser());
        setIsSignedIn(false);
        setUser(null);
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setIsSignedIn(false);
      setUser(null);
      navigate("/");
    });
  };

  return (
    <div className="bg-gradient-to-t from-lime-50">
      <Header fixed1={false} isSignedIn={isSignedIn} user={user} handleSignOut={handleSignOut} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
