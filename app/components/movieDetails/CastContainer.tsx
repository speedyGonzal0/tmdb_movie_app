import { notFound } from "next/navigation";
import React from "react";

type castContainerProps = {
  title: string;
  movieId: string;
  children?: React.ReactNode;
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

const fetchMovieTrailer = async (id: string) => {
  const trailers: any = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  );

  if (!trailers.ok) {
    notFound();
  }

  return trailers.json();
};

const CastContainer = async (props: castContainerProps) => {
  const res = await fetchMovieTrailer(props.movieId);
  const trailer = res.results.find((v: any) =>
    v.name.toLowerCase().includes("trailer")
  );

  return (
    <div className="grid grid-cols-8 backdrop-blur bg-[#0B0F16] p-5 mb-5 text-white font-mont rounded-3xl drop-shadow-[8px_-4px_10px_rgba(0,0,0,0.25)] overflow-auto">
      <div className="col-span-2">
        <h3 className="uppercase font-bold text-lg"> Trailer </h3>
        <iframe
          className="w-11/12 h-4/5 mt-5 rounded-xl"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className="col-span-6">
        <h3 className="uppercase font-bold text-lg"> {props.title} </h3>
        <div className="flex items-start gap-10 overflow-auto mt-5 pb-2">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CastContainer;
