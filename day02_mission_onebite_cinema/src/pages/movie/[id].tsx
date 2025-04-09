import {
  GetStaticPropsContext,
  // GetServerSidePropsContext, InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import style from "./[id].module.css";
import fetchOneMovie from "@/lib/fetchOneMovie";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));

  return {
    props: { movie },
  };
};

export default function Page(
  // { movie }: InferGetServerSidePropsType<typeof getServerSideProps>
  { movie }: InferGetStaticPropsType<typeof getStaticProps>
) {
  if (!movie) return "문제가 발생했습니다 다시 시도하세요";
  const {
    id,
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;
  return (
    <div key={id}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url(${posterImgUrl})` }}
      >
        <img src={posterImgUrl} alt={title} />
      </div>
      <div className={style.movie_about}>
        <h2>{title}</h2>
        <div>
          {releaseDate} / {genres} / {runtime}
        </div>
        <div>{company}</div>
      </div>
      <div className={style.summary}>
        <h3 className={style.subTitle}>{subTitle}</h3>
        <div className={style.movie_description}>{description}</div>
      </div>
    </div>
  );
}
