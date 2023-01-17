import styles from "../styles/ComicScrapper.module.css";
import Head from "next/head";
import fetchNews from "./api/fetchNews";
import Link from "next/link";
import Image from "next/image";
import RenderNewsCards from "../components/RenderNewsCards";
import { useState } from "react";


const NewsScrapper = () => {
  const [cards, setCards] = useState(undefined)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let newsData = await fetchNews();
    if (newsData) {
      let cards = RenderNewsCards(newsData)
      setCards(cards) // have to define the interface for this. tsx is sad
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fetch News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <button type={"submit"}>
            <h1>Fetch Today&apos;s news from G1</h1>
          </button>
        </form>
      </main>
      <Link href="/">Go to Homepage</Link>
      <>{cards && cards}</>
    </div>
  );
};

export default NewsScrapper;
