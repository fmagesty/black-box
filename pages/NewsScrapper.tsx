import styles from "../styles/ComicScrapper.module.css";
import Head from "next/head";
import fetchNews from "./api/fetchNews";
import Link from "next/link";
import Image from "next/image";
import RenderNewsCards from "../components/RenderNewsCards";
import { useState, useEffect } from "react";

const NewsScrapper = () => {
  const [cards, setCards] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      let newsData = await fetchNews();
      if (newsData) {
        let cards = RenderNewsCards(newsData);
        setCards(cards); // have to define the interface for this. tsx is sad
      }
    };
    fetchData()
    return () => {
      fetchData
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fetch News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Link href="/">Go to Homepage</Link>
      {cards && cards}
    </div>
  );
};

export default NewsScrapper;
