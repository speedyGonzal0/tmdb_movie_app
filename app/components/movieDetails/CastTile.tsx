import Link from "next/link";
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

type castTileProps = {
  title: string;
  img: string;
  sub: string;
  id: string;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTc0OTAzMjZkYmIwZTg5YjdjZWVjM2MzMDkwNmZlNSIsInN1YiI6IjY1MDUzNjFhYzJiOWRmMDEwMjYyMTAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pdyYl5PU8CThfNfAumMJgXPHE482Pki4nHGuS3xyqbk",
  },
  next: { revalidate: 0 },
};

const fetchCastDetails = async (id: string) => {
  const castDetails: any = await fetch(
    `https://api.themoviedb.org/3/person/${id}?language=en-US`,
    options
  );

  if (!castDetails.ok) {
    notFound();
  }

  return castDetails.json();
};

const CastTile = async (props: castTileProps) => {
  const cast = await fetchCastDetails(props.id);

  return (
    <a
      href={`https://www.imdb.com/name/${cast.imdb_id}`}
      className="flex flex-col shrink-0"
      target="_blank"
    >
      <Image
        src={"https://image.tmdb.org/t/p/w500" + props.img}
        height={168}
        width={180}
        alt={props.title}
        className="mb-2 rounded-xl border-solid border-white border-[1px]"
      />
      <p className="font-bold w-[180px]"> {props.title} </p>
      <p className="text-sm font-bold text-[#5C5C5C]">As {props.sub}</p>
    </a>
  );
};

export default CastTile;
