import styles from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import movies from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";

export default function Home() {
  const recommendedMovie = movies.filter((movie) => movie.recommended);
  return (
    <div className={styles.container}>
      <section className={styles.container__recommended}>
        <h3 className={styles.section_title}>지금 가장 추천하는 영화</h3>
        <div className={styles.movie_recommended}>
          {recommendedMovie.map((movie) => (
            <MovieItem
              className="movie_recommended_item"
              key={movie.id}
              {...movie}
            />
          ))}
        </div>
      </section>
      <section className={styles.container__all}>
        <h3 className={styles.section_title}>등록된 모든 영화</h3>
        <div className={styles.movie_all}>
          {movies.map((movie) => (
            <MovieItem 
              className="movie_all_item"
              key={movie.id} 
              {...movie} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};