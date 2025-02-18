import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./views/Main";
import "./MyPage.css";
import Home from "./pages/Home";
import Profile from "./views/Profile";

const MyPage = () => {
  const [page, setPage] = useState(<Home />);

  const setClickedPage = (clickedPage) => {
    setPage(clickedPage);
  };

  return (
    <div className="bg-black h-full flex justify-center items-center">
      <div className="bg-white rounded flex gap-2 w-3/5 h-1/2 py-7 px-2 min-h-[400px] max-h-[650px] max-w-[1000px] min-w-[700px]">
        <Profile />
        <Main page={page} />
        <Nav setPage={setClickedPage} />
      </div>
    </div>
  );
};

export default MyPage;
