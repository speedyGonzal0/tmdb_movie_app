import React from "react";
import FeaturedButton from "./FeaturedButton";
import Image from "next/image";
import imdbLogo from "../../../public/imdb.png";
import Tag from "./Tag";

const Featured = () => {
  return (
    <div className="text-white bg-[url('https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="bg-gradient-to-r from-black from-20% p-5">
        <h1 className="text-8xl mt-5 mb-5 font-mont uppercase">
          movie title
        </h1>
        <p className="font-mont font-semibold mb-2 text-sm w-1/2">
          movie description
        </p>
        <h3 className="font-mont font-semibold uppercase text-[#FF2E00] text-lg">
          Genres
        </h3>
        <p className="font-mont font-semibold text-lg mb-2"> Romance, Drama </p>
        <div className="buttons flex gap-5 mb-2">
          <FeaturedButton title="Watch" icon="play_arrow" color="#5436A9" />
          <FeaturedButton title="My List" icon="add" color="#5C5C5C" />
        </div>
        <div className="ratings flex gap-4 items-center font-mont">
          <Image
            src={imdbLogo}
            height={50}
            width={50}
            alt="IMDB link"
            className="cursor-pointer"
          />
          <p className="font-bold text-[#FFC907] text-xl"> 8.0 </p>
          <Tag text="U/A" />
          <Tag text="4K" />
          <p className="font-bold text-[#959595] text-xl"> 2015 </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
