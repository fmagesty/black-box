import React from "react"
import Link from "next/link"
import styles from "../styles/Header.module.css"

const Header = () => {
    return (
        <div className={styles.mainContainer}>
            <Link className={styles.link} href="/">
                Homepage
            </Link>
            <Link className={styles.link} href="/ScrapperServices">
                Scrapper Services
            </Link>
            <Link className={styles.link} href="/NewsScrapper">
                News Scrapper
            </Link>
            <Link className={styles.link} href="/ComicScrapper">
                Comic Scrapper
            </Link>
            <Link className={styles.link} href="/PuppyScrapper">
                Puppy Scrapper
            </Link>
        </div>
    )
}

export default Header
