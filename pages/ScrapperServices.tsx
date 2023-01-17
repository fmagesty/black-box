import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/ScrapperServices.module.css";

const ScrapperServices = () => {
  return (
    <div className={styles.header}>
      <Header/>
      <h1>Scrapper Services</h1>
    <div className={styles.linksContainer}>
        <Link className={styles.link} href="/ComicScrapper">Comic Scrapper from xcdc</Link>
        <Link className={styles.link} href="/NewsScrapper">News Scrapper</Link>
        <Link className={styles.link} href="/">Back to the Homepage</Link>
    </div>
    </div>
  );
};

export default ScrapperServices;
