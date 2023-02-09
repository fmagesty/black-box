import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/RenderNewsCards.module.css"

interface News {
    headline: string
    imageSrc?: string
    href: string
    textSummary: string
}

interface NewsData {
    props: News[]
}

const RenderNewsCards = (newsData: NewsData) => {
    const newsArray = Object.values(newsData.props)
    const cardList = newsArray.map((news, index) => (
        <div className={styles.cardOutterContainer} key={index}>
            {news.imageSrc ? (
                <Image
                    key={news.imageSrc}
                    src={news.imageSrc}
                    alt={news.headline}
                    width={400}
                    height={300}
                    aspect-ratio={"auto"}
                    className={"imageSrc"}
                />
            ) : null}
            <div className={styles.cardInnerContainer}>
                <Link className={styles.cardLink} href={news.href}>
                    <h2 className={styles.cardHeadline}>{news.headline}</h2>
                </Link>
                <p className={styles.newsSummary}>{news.textSummary}</p>
            </div>
        </div>
    ))

    return cardList
}

export default RenderNewsCards
