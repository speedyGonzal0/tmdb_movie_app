import React from "react";
import Image from "next/image";
import imdbLogo from "../../../public/imdb.png";
import Link from "next/link";

type imdbProp = {
  id: string;
};

const ImdbLink = (props: imdbProp) => {

  return (
    <Link href={`https://www.imdb.com/title/${props.id}`}>
      <Image
        src={imdbLogo}
        height={50}
        width={50}
        alt="IMDB link"
        className="cursor-pointer"
      />
    </Link>
  );
};

export default ImdbLink;
