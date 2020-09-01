import React, { useState, useEffect } from "react";
import { verifyUser } from "./redux/actions/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

function Verify(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { hash } = router.query;
  const [isDoneVerifying, setVerify] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (error == "") {
      (async () => {
        const verifyUserResult = await dispatch(verifyUser(hash));
        if (!verifyUserResult.status) {
          setError(verifyUserResult.message);
          setVerify(true);
          return -1;
        }
        router.push("/");
      })();
    }
  });
  return (
    <>
      {isDoneVerifying ? <></> : <div className="loader" />}
      <div className="text-2xl text-red-500 mx-auto">{error}</div>
    </>
  );
}

export default Verify;
