import React from "react";
import Home from "../pages/Home";
import Code from "../pages/Code";
import Photos from "../pages/Photos";

const Nav = ({ setPage }) => {
  const pages = [<Home />, <Code />, <Photos />];

  return (
    <ul>
      <li>
        <button
          onClick={() => {
            setPage(pages[0]);
          }}
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setPage(pages[1]);
          }}
        >
          Code
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setPage(pages[2]);
          }}
        >
          Photos
        </button>
      </li>
    </ul>
  );
};

export default Nav;
