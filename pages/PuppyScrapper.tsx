import fetchPuppyPictures from "./api/fetchPuppyPictures"
import { useState, useEffect } from "react"
import styles from "../styles/PuppyScrapper.module.css"
import Loading from "../components/Loading"
import Image from "next/image"
import Head from "next/head"
import Header from "../components/Header"

const PuppyScrapper = () => {
    const [imageSrcs, setImageSrcs] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        fetchData()
        const intervalId = setInterval(() => {
            setCurrentIndex(
                (currentIndex) => (currentIndex + 1) % imageSrcs.length
            )
        }, 1000)
        return () => clearInterval(intervalId)
    }, [imageSrcs.length])

    const fetchData = async () => {
        setIsLoading(true)
        let imageSrcs = []
        for (let i = 0; i < 20; i++) {
            const response = await fetchPuppyPictures()
            if (response && response.props)
                imageSrcs.push(response.props.imageSrc)
        }
        setImageSrcs(imageSrcs)
        setIsLoading(false)
    }
    return (
        <div className={styles.puppyScrapper}>
            <Head>
                <title>News Scrapper</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {isLoading ? (
                <Loading />
            ) : (
                imageSrcs.map((imageSrc, index) => (
                    <Image
                        className={styles.puppyImage}
                        key={index}
                        src={imageSrc}
                        alt="puppy-image"
                        width={250}
                        height={250}
                    />
                ))
            )}
        </div>
    )
}

export default PuppyScrapper
