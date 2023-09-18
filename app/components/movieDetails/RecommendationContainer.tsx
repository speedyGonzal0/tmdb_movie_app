import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type recomProps = {
  movieId: string;
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

const fetchRecommendations = async (id: string) => {
  const recommendations: any = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
    options
  );

  if (!recommendations.ok) {
    notFound();
  }

  return recommendations.json();
};

const RecommendationContainer = async (props: recomProps) => {
  const recommendations = await fetchRecommendations(props.movieId);

  return (
    <div className="p-5 mb-5 text-white font-mont rounded-3xl overflow-auto">
      <h3 className="uppercase font-bold text-lg"> More like this </h3>
      <div className="flex items-start gap-10 overflow-auto mt-5 pb-2">
        {recommendations.results.map((rec: any) => (
          <Link key={rec.id} href={`/${rec.id}`} className="shrink-0">
            <Image
              src={"https://image.tmdb.org/t/p/w500" + rec.poster_path}
              height={50}
              width={200}
              alt={rec.name}
              className="rounded-xl"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendationContainer;
