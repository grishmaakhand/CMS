import React from "react";

function MenuItem(props) {
  return (
    <div className="flex flex-row p-3 hover:bg-violet-800 ">
      <img src={props.itemimgurl} alt="Home" className=" w-5 h-5" />
      <h4 className="  ml-3 flex-1 w-20 font-Inter text-white">
        {props.heading}
      </h4>
      <img
        src={props.downimg}
        alt="Optionbtn"
        className="flex-none mt-2 h-2  w-3"
      />
    </div>
  );
}
export default MenuItem;
