import React from "react";

const iconStyle = "symbol !text-3xl hover:text-white hover:cursor-pointer";

const Sidebar = () => {
  return (
    <aside className="fixed top-36 w-[80px] bg-gradient-to-t from-[#130B29] via-[#5436A9] to-[#5E47A1] h-[315px] rounded-tr-3xl rounded-br-3xl flex flex-col items-center justify-evenly text-[#BCA5FF]">
      <i className={iconStyle}> group </i>
      <i className={iconStyle}> list </i>
      <i className={iconStyle}> download </i>
      <i className={iconStyle}> settings </i>
    </aside>
  );
};

export default Sidebar;
