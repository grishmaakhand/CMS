import React from "react";
import MenuItem from "../Atoms/MenuItem";
import BelowMenuItem from "../Atoms/BelowMenuitem";
import url1 from "../Image/Home Icon.png";
import url2 from "../Image/Report Icon.png";
import url3 from "../Image/Student Management Icon.png";
import url4 from "../Image/Faculty Management Icon.png";
import url5 from "../Image/Admission Management Icon.png";
import url6 from "../Image/Placement Management Icon.png";
import url7 from "../Image/Icon (1).png";
import url8 from "../Image/Icon (2).png";
import down from "../Image/down.png";

function AllMenu() {
  return (
    <div className="flex flex-col flex-initial mt-2">
      <MenuItem heading={"Home"} itemimgurl={url1} downimg={down} />
      <MenuItem heading={"Report"} itemimgurl={url2} downimg={down} />
      <MenuItem heading={"Student"} itemimgurl={url3} downimg={down} />
      <MenuItem heading={"Faculty"} itemimgurl={url4} downimg={down} />
      <MenuItem heading={"Admission"} itemimgurl={url5} downimg={down} />
      <MenuItem heading={"Placement"} itemimgurl={url6} downimg={down} />
      <div className="">
        <BelowMenuItem heading={"Support"} itemimgurl={url7} />
        <BelowMenuItem heading={"Settings"} itemimgurl={url8} />
      </div>
    </div>
  );
}
export default AllMenu;
