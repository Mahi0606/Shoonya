import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import LoadingPage from "./LoadingPage";

function AppLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        setUser(user);
        // navigate("/");
      } else {
        dispatch(removeUser());
        setUser(null);
        // navigate("/");
      }
      setLoading(false);
    });

  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
      navigate()
    });
  };

  if (loading) {
    return <><LoadingPage /></>;
  }

  return (
    <div className="bg-gradient-to-t from-lime-50">
      <Header fixed1={false} user={user} handleSignOut={handleSignOut} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
