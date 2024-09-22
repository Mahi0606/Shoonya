import React, { useEffect, useState } from 'react'
import Header from "./Header";
import ImageBannerContainer from "./ImageBannerContainer";
import Body from './Body';
import Footer from './Footer';
import FAQSection from './FAQSection';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
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
  }, [dispatch, navigate])
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setIsSignedIn(false);
      setUser(null);
      navigate("/");
    });
  };


  return (
    <div>
        <Header fixed1={false} isSignedIn={isSignedIn} user={user} handleSignOut={handleSignOut} />
        <ImageBannerContainer />
        <Body />
        <FAQSection />
        <Footer />
    </div>
  )
}

export default Home;