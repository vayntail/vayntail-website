import React, { useState } from "react";

const SocialLinks = () => {
  const [opened, setOpened] = useState(true);

  const toggle = () => {
    setOpened(!opened);
  };

  return (
    <div>
      <button
        onClick={toggle}
        className="border-b-[1px] border-stone-400 w-full"
      >
        <h2>social media</h2>
      </button>
      {opened ? (
        <ul>
          <li>
            <a>twitter</a>
          </li>
          <li>
            <a>instagram</a>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SocialLinks;
