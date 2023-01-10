import { useState } from "react";
import styles from "../styles/ComicScrapper.module.css";
import Head from "next/head";
import fetchNews from "./api/fetchNews";
import Link from "next/link";
import Image from "next/image";

const NewsScrapper = () => {
  const [headline, setHeadline] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let newsData = await fetchNews();
    if (newsData) {
      console.log(newsData);
      renderNews(newsData);
    }
    return;
  };

  const renderNews = async (newsData: any) => {
    console.log("newsData:", newsData);
    const headline = newsData.props.headline
    const image = newsData.props.image
    setHeadline(headline)
    setImgSrc(image)
    return
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
      <>
        <h1>{headline ? headline : undefined}</h1>
        <Image src={imgSrc ? imgSrc : ""} width={500} height={500} alt={"newsImg"} />
      </>
    </div>
  );
};

export default NewsScrapper;
