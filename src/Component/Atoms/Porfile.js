import React from "react";

function Profile(props) {
  return (
    <>
      <div className="flex p-3">
        <div className="h-6 w-10">
          <img src={props.profileimg} alt="" />
        </div>

        <div className="text-white font-Inter ml-2">
          <h6 className="text-sm">Olivia Rhye</h6>
          <p className="text-xs">OliviaRhye@email.com</p>
        </div>
      </div>
    </>
  );
}
export default Profile;
