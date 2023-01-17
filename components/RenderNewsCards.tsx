import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/RenderNewsCards.module.css";

const RenderNewsCards = (newsData: any) => {
  console.log("newsData:", newsData);
  let cardList = [];
  let headlineList = newsData.props.headlineList;
  let thumbnailList = newsData.props.thumbnailList;
  let newsLinkList = newsData.props.newsLinkList;

  for (let i = 0; i < headlineList.length; i++) {
    let title = headlineList[i];
    let thumb = thumbnailList[i];
    let link = newsLinkList[i];
    cardList.push(
      <div className={styles.cardOutterContainer}>
        <Image key={thumb} src={thumb} alt={thumb} width={276} height={155} />
        <div className={styles.cardInnerContainer}>
          <h4 className={styles.cardHeadline} key={title}>
            {title}
          </h4>
          <Link className={styles.cardLink} href={link}>
            fonte
          </Link>
        </div>
      </div>
    );
  }
  return cardList;
};

export default RenderNewsCards;
