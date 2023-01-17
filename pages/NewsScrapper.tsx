import styles from "../styles/NewsScrapper.module.css";
import Head from "next/head";
import fetchNews from "./api/fetchNews";
import RenderNewsCards from "../components/RenderNewsCards";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";

const NewsScrapper = () => {
  const [cards, setCards] = useState(undefined);
  useEffect(() => {
    const fetchData = async () => {
      let newsData = await fetchNews();
      if (newsData) {
        let cards = RenderNewsCards(newsData);
        setCards(cards);
      }
    };
    fetchData()
    return () => {
      fetchData
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>News Scrapper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
      {cards ? cards && cards : <Loading/>}
    </div>
  );
};

export default NewsScrapper;
