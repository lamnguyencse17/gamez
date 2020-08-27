import React from "react";
import Navbar from "../components/Common/Navbar";
import SignUpForm from "../components/AuthForms/SignUpForm";

function Signup(props) {
  return (
    <div>
      <Navbar />
      <SignUpForm />
    </div>
  );
}

export default Signup;