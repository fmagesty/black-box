import Link from "next/link";
import styles from '../styles/ScrapperServices.module.css';

const ScrapperServices = () => {

  return (
    <div className={styles.container}>
      <h1>Scrapper Services</h1>
      <Link href="/">Back to the Homepage</Link>
      <Link href="/ComicScrapper">Comic Scrapper from xcdc</Link>
    </div>
  );
};

export default ScrapperServices;
