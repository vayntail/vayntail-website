import React, { useState } from "react";
import Nav from "./components/Nav";
import Side from "./components/Side";
import Main from "./components/Main";
import "./MyPage.css";
import Home from "./pages/Home";
import Code from "./pages/Code";
import Photos from "./pages/Photos";

const MyPage = () => {
  const [page, setPage] = useState(<Home />);

  const setClickedPage = (clickedPage) => {
    setPage(clickedPage);
  };

  return (
    <div className="bg-black h-full flex justify-center items-center">
      <div className="bg-white flex gap-2 w-9/12 h-3/5 py-7 px-2">
        <Side />
        <Main page={page} />
        <Nav setPage={setClickedPage} />
      </div>
    </div>
  );
};

export default MyPage;
