import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function Profile(props) {
  const [isLogin]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser());
  });
  return <div></div>;
}

export default Profile;
