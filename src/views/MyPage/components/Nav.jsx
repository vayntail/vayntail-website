import React from "react";
import Home from "../pages/Home";
import Code from "../pages/Code";
import Art from "../pages/Art";

const Nav = ({ setPage }) => {
  const pages = [<Home />, <Code />, <Art />];

  return (
    <ul className="flex flex-col gap-1">
      <li>
        <button
          className="page-nav-button"
          onClick={() => {
            setPage(pages[0]);
          }}
        >
          Home
        </button>
      </li>
      <li>
        <button
          className="page-nav-button"
          onClick={() => {
            setPage(pages[1]);
          }}
        >
          Code
        </button>
      </li>
      <li>
        <button
          className="page-nav-button"
          onClick={() => {
            setPage(pages[2]);
          }}
        >
          Art
        </button>
      </li>
    </ul>
  );
};

export default Nav;
