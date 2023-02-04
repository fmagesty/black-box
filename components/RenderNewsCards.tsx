import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/RenderNewsCards.module.css"

const RenderNewsCards = (newsData: any) => {
    console.log("newsData:", newsData)
    let cardList = []
    for (let i = 0; i < Object.keys(newsData.props).length; i++) {
        let headline = newsData.props[i].headline
        let imageSrc = newsData.props[i].imageSrc
        let href = newsData.props[i].href
        let textSummary = newsData.props[i].textSummary

        cardList.push(
            <div className={styles.cardOutterContainer} key={i}>
                {imageSrc ? (
                    <Image
                        key={imageSrc}
                        src={imageSrc}
                        alt={headline}
                        width={400}
                        height={300}
                        aspect-ratio={"auto"}
                        className={"imageSrc"}
                    />
                ) : null}
                <div className={styles.cardInnerContainer}>
                    <Link className={styles.cardLink} href={href}>
                        <h2 className={styles.cardHeadline}>{headline}</h2>
                    </Link>
                    <p className={styles.newsSummary}>{textSummary}</p>
                </div>
            </div>
        )
    }
    return cardList
}

export default RenderNewsCards
