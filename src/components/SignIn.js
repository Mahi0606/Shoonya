import React, { useState } from "react";
import Header from "./Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }
    // Need to Handle Sign In Logic
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode + "-" + errorMessage);
        return;
      });

    setError(""); // Clear error on successful submit
    console.log("Signing in with", email, password);
  };

  return (
    <>
      <Header fixed1={true} />
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center text-pink-800">
            Sign In
          </h2>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-pink-800 text-white font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500">
              Sign In
            </button>
            <div className="mt-4 text-center text-gray-600">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-pink-800 hover:underline">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
