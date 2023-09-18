import { notFound } from "next/navigation";
import Featured from "./components/homepage/Featured";
import ListContainer from "./components/homepage/ListContainer";
import MovieTile from "./components/homepage/MovieTile";
import ActionButton from "./components/homepage/ActionButton";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTc0OTAzMjZkYmIwZTg5YjdjZWVjM2MzMDkwNmZlNSIsInN1YiI6IjY1MDUzNjFhYzJiOWRmMDEwMjYyMTAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pdyYl5PU8CThfNfAumMJgXPHE482Pki4nHGuS3xyqbk",
  },
  next: { revalidate: 60 },
};

const fetchMustWatchMovies = async () => {
  const movies: any = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );

  const res = await movies.json();
  if (!movies.ok) {
    notFound();
  }
  return res;
};

const fetchRecommendedMovies = async () => {
  const movies: any = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );

  const res = await movies.json();
  if (!movies.ok) {
    notFound();
  }

  return res;
};

const fetchBollywoodMovies = async () => {
  const movies: any = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=IN",
    options
  );

  const res = await movies.json();
  if (!movies.ok) {
    notFound();
  }

  return res;
};

export default async function Home() {
  const mustWatchMovies = await fetchMustWatchMovies();

  const recommendedMovies = await fetchRecommendedMovies();

  const bollywoodMovies = await fetchBollywoodMovies();

  return (
    <main className="h-full pb-5">
      <Featured />
      <ListContainer bgColor showIcon title="Movies you must watch">
        {mustWatchMovies.results.map((movie: any) => (
          <MovieTile
            link={movie.id}
            key={movie.id}
            title={movie.title}
            imdb={movie.vote_average}
            img={movie.poster_path}
            year={movie.release_date}
          />
        ))}
      </ListContainer>

      <ListContainer
        bgColor={false}
        showIcon={false}
        title="Recommended for you"
      >
        {recommendedMovies.results.map((movie: any) => (
          <MovieTile
            link={movie.id}
            key={movie.id}
            title={movie.title}
            imdb={movie.vote_average}
            img={movie.poster_path}
            year={movie.release_date}
          />
        ))}
      </ListContainer>

      <ListContainer
        bgColor={false}
        showIcon={false}
        title="Bollywood Classics"
      >
        {bollywoodMovies.results.map((movie: any) => (
          <MovieTile
            link={movie.id}
            key={movie.id}
            title={movie.title}
            imdb={movie.vote_average}
            img={movie.poster_path}
            year={movie.release_date}
          />
        ))}
      </ListContainer>

      <div className="flex justify-center">
        <ActionButton title="Show more" icon="expand_more" color="#5E47A1" />
      </div>
    </main>
  );
}
