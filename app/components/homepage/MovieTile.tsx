import Image from "next/image";
import React from "react";
import imdbLogo from "../../../public/imdb.png";
import Link from "next/link";


type movieTileProps = {
    title: string,
    img: string,
    year: string,
    imdb: number,
    link: string
}

const MovieTile = ( props: movieTileProps ) => {

  return (
    <Link href={`/${props.link}`} className="flex flex-col shrink-0">
      <Image
        src={
          'https://image.tmdb.org/t/p/w500' + props.img
        }
        height={168}
        width={180}
        alt={props.title}
        className="mb-2 rounded-xl"
      />
      <p className="font-bold w-[180px]"> {props.title} </p>
      <p className="text-sm font-bold text-[#5C5C5C]"> {new Date(props.year).getFullYear()} </p>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image src={imdbLogo} height={30} width={30} alt="Movie" />
          <p className="text-sm font-bold text-[#FFC907]"> {props.imdb.toFixed(1)} </p>
        </div>
        <div className="flex items-center gap-2">
            <i className="symbol !text-xl hover:opacity-80 hover:cursor-pointer transition-all"> visibility </i>
            <i className="symbol !text-xl hover:cursor-pointer hover:text-[#FF2E00] transition-all"> favorite </i>
        </div>
      </div>
    </Link>
  );
};

export default MovieTile;
