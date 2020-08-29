import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "./Profile/Avatar";
import UpdateForm from "./Profile/UpdateForm";

function ProfilePage(props) {
  const user = useSelector((state) => state.user);
  return (
    <div className="container mx-auto">
      <Avatar />
      <UpdateForm user={user} />
    </div>
  );
}

export default ProfilePage;
