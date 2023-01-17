import React from "react";
import Image from "next/image";
import Link from 'next/link'

const RenderNewsCards = (newsData: any) => {
  console.log("newsData:", newsData);
  let cardList = []
  let headlineList = newsData.props.headlineList;
  let thumbnailList = newsData.props.thumbnailList;
  let newsLinkList = newsData.props.newsLinkList;

  for (let i = 0; i < headlineList.length; i++) {
    let title = headlineList[i];
    let thumb = thumbnailList[i];
    let link = newsLinkList[i]
    cardList.push((
      <>
        <h1 key={title}>{title}</h1>
        <Image key={thumb} src={thumb} alt={thumb} width={200} height={200} />
        <Link href={link}>Link</Link>
      </>
    ))
  }
  return cardList
};

export default RenderNewsCards;
