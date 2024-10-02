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
    <div>
      <Header user={user} handleSignOut={handleSignOut} />
        <div className="mt-10">
          <Outlet />
        </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
