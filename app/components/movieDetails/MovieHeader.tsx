import { notFound } from "next/navigation";
import React from "react";
import ActionButton from "../homepage/ActionButton";
import ImdbLink from "../homepage/ImdbLink";
import Tag from "../homepage/Tag";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTc0OTAzMjZkYmIwZTg5YjdjZWVjM2MzMDkwNmZlNSIsInN1YiI6IjY1MDUzNjFhYzJiOWRmMDEwMjYyMTAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pdyYl5PU8CThfNfAumMJgXPHE482Pki4nHGuS3xyqbk",
  },
  next: { revalidate: 0 },
};

const fetchMovieDetails = async (id: number) => {
  const movie: any = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );

  if (!movie.ok) {
    notFound();
  }

  return movie.json();
};

type movieHeaderProps = {
  id: number;
};

const MovieHeader = async (props: movieHeaderProps) => {
  const movie = await fetchMovieDetails(props.id);

  return (
    <div
      className="text-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
      }}
    >
      <div className="bg-gradient-to-r from-black from-20% p-5">
        <h1 className="text-8xl mt-5 mb-5 font-mont uppercase w-4/5">
          {movie.title}
        </h1>
        <p className="font-mont font-semibold mb-2 text-sm w-1/2">
          {movie.overview}
        </p>
        <h3 className="font-mont font-semibold uppercase text-[#FF2E00] text-lg">
          Genres
        </h3>
        <p className="font-mont font-semibold text-lg mb-2">
          {movie.genres
            .map((genre: { id: number; name: string }) => genre.name)
            .join(", ")}
        </p>
        <div className="buttons flex gap-5 mb-2">
          <ActionButton title="Watch" icon="play_arrow" color="#5436A9" />
          <ActionButton title="My List" icon="add" color="#5C5C5C" />
        </div>
        <div className="ratings flex gap-4 items-center font-mont">
          <ImdbLink id={movie.imdb_id} />
          <p className="font-bold text-[#FFC907] text-xl">
            {movie.vote_average.toFixed(1)}
          </p>
          <Tag text={movie.adult ? "A" : "U/A"} />
          <Tag text="4K" />
          <p className="font-bold text-[#959595] text-xl">
            {new Date(movie.release_date).getFullYear()}
          </p>
        </div>
        <h3 className="font-mont font-semibold uppercase text-[#FF2E00] text-lg">
          Audio
        </h3>
        <p className="font-mont font-semibold text-lg mb-2">
          {movie.spoken_languages
            .map(
              (lang: {
                english_name: string;
                name: string;
                iso_639_1: string;
              }) => lang.name
            )
            .join(", ")}
        </p>
        <h3 className="font-mont font-semibold uppercase text-[#FF2E00] text-lg">
          Subtitles
        </h3>
        <p className="font-mont font-semibold text-lg mb-2">
          {movie.spoken_languages
            .map(
              (lang: {
                english_name: string;
                name: string;
                iso_639_1: string;
              }) => lang.name
            )
            .join(", ")}
        </p>
      </div>
    </div>
  );
};

export default MovieHeader;
