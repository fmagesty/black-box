import styles from "../styles/NewsScrapper.module.css";
import Head from "next/head";
import fetchNewsG1 from "./api/fetchNewsG1";
import fetchNewsUol from "./api/fetchNewsUol";
import RenderNewsCards from "../components/RenderNewsCards";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";

const NewsScrapper = () => {
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchNews("g1");
    // fetchNews("uol");
  }, []);

  const fetchNews = async (source: string) => {
      let response;
      setIsLoading(true);
      if (source === "g1") {
        response = await fetchNewsG1();
      } else if (source === "uol") {
        response = await fetchNewsUol();
      }
      let cards = RenderNewsCards(response);
      setCards(cards);
      setIsLoading(false);
      return response;
    };

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>News Scrapper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isLoading ? <Loading /> : cards}
    </div>
  );
};

export default NewsScrapper;
