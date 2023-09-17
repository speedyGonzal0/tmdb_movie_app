"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import Searchbutton from "./Searchbutton";

const Logo = styled.h1`
  font-family: "Griffy", cursive;
  font-size: 36px;
  color: #ffc907;
  text-transform: uppercase;
`;

type Link = {
  name: string;
  href: string;
};

const navLinks: Link[] = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "TV SHOW",
    href: "/tvshows",
  },
  {
    name: "MOVIES",
    href: "/movies",
  },
  {
    name: "NEW",
    href: "/new",
  },
];

const activeClass: string = "text-white";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="sticky top-0 h-[93px] w-full bg-gradient-to-r from-black from-20% to-[#6650A5] drop-shadow-[0_4px_15px_rgba(0,0,0,0.25)] backdrop-blur">
      <div className="grid grid-cols-8 gap-4 h-full px-6">
        <div className="col-span-1 flex items-center">
          {" "}
          <Logo> Dramatic </Logo>{" "}
        </div>
        <div className="col-span-3 text-[#A1B1CB] font-mont flex items-center justify-evenly">
          {navLinks.map((link) => {
            const isActive = pathName == link.href;

            return (
              <div className="relative flex justify-center">
                <Link
                  className={isActive ? activeClass : ""}
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
                <div className={`absolute bg-[#38BBD8] h-2.5 w-2.5 top-6 rounded-xl ${isActive ? '' : 'hidden'}`}></div>
              </div>
            );
          })}
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <Searchbutton />
        </div>
        <div className="col-span-2 flex items-center justify-evenly text-white">
          <i className="symbol !text-3xl cursor-pointer"> redeem </i>
          <i className="symbol !text-3xl cursor-pointer"> notifications </i>
          <i className="symbol !text-3xl cursor-pointer"> account_circle </i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
