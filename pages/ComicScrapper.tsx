import { useState } from "react";
import styles from "../styles/ComicScrapper.module.css";
import Head from "next/head";
import fetchComics from "./api/fetchComics";
import Link from "next/link";
import Image from "next/image";

export default function ComicScrapper() {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const handleSubmit = async (e: any, inputValue: String) => {
    e.preventDefault();
    let comicData = await fetchComics();
    if (comicData) {
      renderComics(comicData);
    }
    return;
  };

  const renderComics = async (comicData: any) => {
    console.log(comicData);
    let title = comicData.props.title
    let src = comicData.props.image
    setTitle(title);
    setImgSrc(src);
    return;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fetch Twitter Follower</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <form onSubmit={(e) => handleSubmit(e, inputValue)}>
          {/* <label>
            MOVE ME LATER
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label> */}
          <button type={"submit"}><h1>Fetch Today&apos;s comic from XKCD</h1></button>
        </form>
      </main>
      <Link href="/">Go to Homepage</Link>

      <>
        <h1>{title ? title : undefined}</h1>
        <Image src={imgSrc ? imgSrc : ""} width={500} height={500} alt={"comic"} />
      </>
    </div>
  );
}
