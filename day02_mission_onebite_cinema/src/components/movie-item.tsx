import styles from "./movie-item.module.css";
import { MovieData } from "@/types";
import Link from "next/link";

type MovieItemProps = MovieData & { className?: string };

export default function MovieItem({
  id,
  posterImgUrl,
  className,
}: MovieItemProps) {
  return (
    <Link href={`/movie/${id}`} className={styles[className || ""]}>
      <img src={posterImgUrl} alt="영화 포스터" />
    </Link>
  );
}