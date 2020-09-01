import React from "react";
import dynamic from "next/dynamic";

import Navbar from "../../components/Common/Navbar";
const Verify = dynamic(() => import("../../components/Verify"), {
  ssr: false,
});

function VerifyPage(props) {
  return (
    <div>
      <Navbar />
      <Verify />
    </div>
  );
}

export default VerifyPage;
