import React from "react";
import Navbar from "../components/Common/Navbar";
import LogInForm from "../components/AuthForms/LogInForm";

function Login(props) {
  return (
    <div>
      <Navbar />
      <LogInForm />
    </div>
  );
}

export default Login;
