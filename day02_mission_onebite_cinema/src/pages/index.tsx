import styles from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import {
  // InferGetServerSidePropsType,
  InferGetStaticPropsType
} from "next";
import fetchMovies from "@/lib/fetch-movies";
import fetchRandomMovies from "@/lib/fetch-random-movies";

// export const getServerSideProps = async () => {
//   const [allMovies, recoMovies] = await Promise.all([
//     fetchMovies(),
//     fetchRandomMovies(),
//   ]);
//   return {
//     props: { allMovies, recoMovies },
//   };
// };

export const getStaticProps = async () => {
  console.log("index page")
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);
  return {
    props: { allMovies, recoMovies },
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <section className={styles.container__recommended}>
        <h3 className={styles.section_title}>지금 가장 추천하는 영화</h3>
        <div className={styles.movie_recommended}>
          {recoMovies.map((movie) => (
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
          {allMovies.map((movie) => (
            <MovieItem className="movie_all_item" key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
