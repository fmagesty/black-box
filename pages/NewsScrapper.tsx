import styles from "../styles/NewsScrapper.module.css"
import Head from "next/head"
import fetchNewsG1 from "./api/fetchNewsG1"
import fetchNewsUol from "./api/fetchNewsUol"
import RenderNewsCards from "../components/RenderNewsCards"
import { useState } from "react"
import Header from "../components/Header"
import Loading from "../components/Loading"

const NewsScrapper = () => {
    const [cards, setCards] = useState<JSX.Element[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleClick = async (source: string) => {
        let res: any
        setIsLoading(true)
        setError(null)
        try {
            if (source === "g1") {
                res = await fetchNewsG1()
            } else if (source === "uol") {
                res = await fetchNewsUol()
            }
            let cards = RenderNewsCards(res)
            setCards(cards)
        } catch (err: any) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.mainContainer}>
            <Head>
                <title>News Scrapper</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={styles.buttonsContainer}>
                <button
                    className={styles.button}
                    onClick={() => handleClick("g1")}
                >
                    G1
                </button>
                <button
                    className={styles.button}
                    onClick={() => handleClick("uol")}
                >
                    UOL
                </button>
            </div>
            {/* {error && error} */}
            {isLoading ? <Loading /> : cards}
        </div>
    )
}

export default NewsScrapper
