import React from "react";
import Textbox from "../widgets/Textbox";

const Main = ({ page }) => {
  return (
    <main className="overflow-auto border rounded border-black h-full flex-1 p-4">
      {page}
      {/* <div className="">
        <div>
          <Textbox title={"bio"} text={"Hello and welcome to my page :D"} />
        </div>
        <div>
          <img src="https://i.pinimg.com/736x/00/14/8e/00148e0d9b8678e876c643ea8004a4a6.jpg" />
        </div>
      </div> */}
    </main>
  );
};

export default Main;
