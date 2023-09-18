import React from "react";
import ActionButton from "./ActionButton";
import Tag from "./Tag";
import { notFound } from "next/navigation";
import ImdbLink from "./ImdbLink";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTc0OTAzMjZkYmIwZTg5YjdjZWVjM2MzMDkwNmZlNSIsInN1YiI6IjY1MDUzNjFhYzJiOWRmMDEwMjYyMTAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pdyYl5PU8CThfNfAumMJgXPHE482Pki4nHGuS3xyqbk",
  },
  next: { revalidate: 60 },
};

const fetchFeaturedMovieDetails = async () => {
  const movies: any = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );

  const res = await movies.json();

  const movie: any = await fetch(
    `https://api.themoviedb.org/3/movie/${res.results[0].id}?language=en-US`,
    options
  );

  if (!movie.ok) {
    notFound();
  }

  return movie.json();
};

const Featured = async () => {
  const featuredMovie = await fetchFeaturedMovieDetails();

  return (
    <div
      className="text-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${featuredMovie.poster_path})`,
      }}
    >
      <div className="bg-gradient-to-r from-black from-20% p-5">
        <h1 className="text-8xl mt-5 mb-5 font-mont uppercase">
          {featuredMovie.title}
        </h1>
        <p className="font-mont font-semibold mb-2 text-sm w-1/2">
          {featuredMovie.overview}
        </p>
        <h3 className="font-mont font-semibold uppercase text-[#FF2E00] text-lg">
          Genres
        </h3>
        <p className="font-mont font-semibold text-lg mb-2">
          {featuredMovie.genres
            .map((genre: { id: number; name: string }) => genre.name)
            .join(", ")}
        </p>
        <div className="buttons flex gap-5 mb-2">
          <ActionButton title="Watch" icon="play_arrow" color="#5436A9" />
          <ActionButton title="My List" icon="add" color="#5C5C5C" />
        </div>
        <div className="ratings flex gap-4 items-center font-mont">
          <ImdbLink id={featuredMovie.imdb_id} />
          <p className="font-bold text-[#FFC907] text-xl">
            {featuredMovie.vote_average.toFixed(1)}
          </p>
          <Tag text={featuredMovie.adult ? "A" : "U/A"} />
          <Tag text="4K" />
          <p className="font-bold text-[#959595] text-xl">
            {new Date(featuredMovie.release_date).getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
