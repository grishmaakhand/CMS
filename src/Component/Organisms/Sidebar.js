import React from "react";
import AllMenu from "../Molecules/ALLMenu";
import img from "../Image/Icon.png";
import Profile from "../Atoms/Porfile";
import profileimg from "../Image/Avatar.png";

function Sidebar() {
  return (
    <>
      <div className=" bg-sidebarcolor">
        <div className="grid">
          <img src={img} alt="" className="justify-self-end m-3" />
        </div>

        <input
          type="text"
          placeholder="Search"
          className="rounded ml-3 p-2 w-50"
        />
        <AllMenu />
        <div class="border border-gray-50 my-2"></div>

        <Profile profileimg={profileimg} />
      </div>
    </>
  );
}

export default Sidebar;
