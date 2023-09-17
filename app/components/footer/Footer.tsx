import React from "react";
import LanguageButton from "./LanguageButton";
import footerSocialLogos from "../../../public/footerSocialLogos.png";
import Image from "next/image";

type footerMenu = {
  header: string;
  items: string[];
};

const footerMenus: footerMenu[] = [
  {
    header: "Navigation",
    items: [
      "Home",
      "FAQ",
      "Investor Relations",
      "Jobs",
      "About Us",
      "Help Centre",
    ],
  },
  {
    header: "Legal",
    items: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Preferences",
      "Corporate Information",
    ],
  },
  {
    header: "Talk To Us",
    items: ["support@ercom.com", "+66 2399 1145"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#161214] h-[389px] grid grid-rows-4">
      <div className="row-span-3 grid grid-cols-5 gap-4 pt-16 px-20">
        <div className="col-span-1 flex items-start">
          <LanguageButton />
        </div>

        {footerMenus.map((menuItem) => {
          return (
            <div className="col-span-1" key={menuItem.header}>
              <h3 className="text-white font-mont uppercase pb-3">
                {menuItem.header}
              </h3>
              <ul className="text-[#949494] font-rbt">
                {menuItem.items.map((item) => (
                  <li className="py-1 hover:text-white cursor-pointer" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        
        <div className="col-span-1">
          <h3 className="text-white font-mont uppercase pb-3"> Follow Us </h3>
          <Image
            src={footerSocialLogos}
            width={200}
            height={200}
            alt="Picture of the author"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="row-span-1 flex justify-center items-center font-rbt text-white">
        © 2022 Dramatic. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
