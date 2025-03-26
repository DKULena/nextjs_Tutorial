import { useRouter } from "next/router"

export default function Page() {
    const router = useRouter();
    console.log(router)
    const { q } = router.query;

    return (
        <h2>검색결과 : {q}</h2>
    )
}