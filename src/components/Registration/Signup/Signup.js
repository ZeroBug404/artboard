/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {FcGoogle} from 'react-icons/fc';

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    createUserWithEmailAndPassword(email, password);
  };

  const [signInWithGoogle, gUser, gLoading, gError1] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (user || gUser) {
    navigate('/canvas')
  }
  return (
    <div className="form-body">
      <h2>SignUp to Create your design</h2>
      <div class="container" id="container">
        <div class="form-container sign-up">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div class="social-container">
              <a href="#" class="social">
              <FcGoogle/>
              </a>
            </div>
            <span>or use your account</span>
            <input type="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <a href="#">Forgot your password?</a>
            <button onClick={() => signInWithGoogle()}>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
