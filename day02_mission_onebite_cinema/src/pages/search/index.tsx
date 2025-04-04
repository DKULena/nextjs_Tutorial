import SearchableLayout from "@/components/searchable-layout";
// import { useRouter } from "next/router";
import { ReactNode } from "react";
import movies from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";

export default function Page() {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem className="movie_search_item" key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
