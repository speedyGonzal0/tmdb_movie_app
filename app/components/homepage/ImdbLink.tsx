import React from "react";
import Image from "next/image";
import imdbLogo from "../../../public/imdb.png";

type imdbProp = {
  id: string;
};

const ImdbLink = (props: imdbProp) => {

  return (
    <a href={`https://www.imdb.com/title/${props.id}`} target="_blank">
      <Image
        src={imdbLogo}
        height={50}
        width={50}
        alt="IMDB link"
        className="cursor-pointer"
      />
    </a>
  );
};

export default ImdbLink;
