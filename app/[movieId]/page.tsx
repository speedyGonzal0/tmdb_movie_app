import React from "react";
import MovieHeader from "../components/movieDetails/MovieHeader";
import CastContainer from "../components/movieDetails/CastContainer";
import { notFound } from "next/navigation";
import CastTile from "../components/movieDetails/CastTile";
import ActionButton from "../components/homepage/ActionButton";
import RecommendationContainer from "../components/movieDetails/RecommendationContainer";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTc0OTAzMjZkYmIwZTg5YjdjZWVjM2MzMDkwNmZlNSIsInN1YiI6IjY1MDUzNjFhYzJiOWRmMDEwMjYyMTAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pdyYl5PU8CThfNfAumMJgXPHE482Pki4nHGuS3xyqbk",
  },
  next: { revalidate: 0 },
};

const fetchMovieCast = async (id: number) => {
  const cast: any = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );

  if (!cast.ok) {
    notFound();
  }

  return cast.json();
};

const MovieDetails = async ({ params }: any) => {
  const credits = await fetchMovieCast(params.movieId);

  return (
    <main className="h-full pb-5">
      <MovieHeader id={params.movieId} />
      <CastContainer title="Cast and crew info" movieId={params.movieId}>
        {credits.cast.slice(0, 9).map((cast: any) => (
          <CastTile
            key={cast.id}
            title={cast.name}
            id={cast.id}
            img={cast.profile_path}
            sub={cast.character}
          />
        ))}
      </CastContainer>
      <div className="flex justify-center mb-5">
        {" "}
        <ActionButton title="Show more" icon="expand_more" color="#5E47A1" />
      </div>
      <RecommendationContainer movieId={params.movieId} />
    </main>
  );
};

export default MovieDetails;
