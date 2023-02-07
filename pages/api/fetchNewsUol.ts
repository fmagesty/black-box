import axios from "axios"
import cheerio from "cheerio"

interface NewsItem {
    headline: string
    href: string
    imageSrc: string
    textSummary: string
}

interface NewsData {
    [key: number]: NewsItem
}

const fetchNewsUol = async (): Promise<{
    props: NewsData
}> => {
    const dataObj: NewsData = {}
    const uol = "https://noticias.uol.com.br/"
    try {
        const response = await axios.get(uol)
        const data = response.data
        const $ = cheerio.load(data)
        let headlineHTML = $(".thumb-title")
        headlineHTML.map((i: any, e: any) => {
            let headline = e.children[0].data
            dataObj[i] = {
                headline: "",
                href: "",
                imageSrc: "",
                textSummary: "",
            }
            dataObj[i].headline = headline
        })
        let hrefHTML = $(".thumbnails-wrapper")
        hrefHTML.map((i: any, e: any) => {
            let href = e.children[0].attribs.href
            dataObj[i].href = href
        })
        let imgSrcHTML = $(".thumb-layer")
        imgSrcHTML.map((i: any, e: any) => {
            const imageSrc = e.children[0].next.attribs["data-src"]
            imageSrc
                ? (dataObj[i].imageSrc = imageSrc)
                : (dataObj[i].imageSrc = "")
        })
        for (let i in dataObj) {
            try {
                const response = await axios.get(dataObj[i].href)
                const data = response.data
                const $ = cheerio.load(data)
                let textSummaryHTML = $(".text p")
                let textSummary = ""
                textSummaryHTML.map((j: number, f: any) => {
                    if (f.children[0] && textSummary.length < 280) {
                        // make the text summary not go over 280 chars
                        textSummary += f.children[0].data + " "
                    }
                })
                textSummary.length > 0
                    ? (dataObj[i].textSummary = textSummary + "...")
                    : (dataObj[i].textSummary = "")
            } catch (error) {
                console.error(
                    `Error when fetching text summary for ${dataObj[i].href}:`,
                    error
                )
            }
        }
        return {
            props: dataObj,
        }
    } catch (error) {
        console.error(`Error when fetching news data from ${uol}:`, error)
        return {
            props: {},
        }
    }
}

export default fetchNewsUol
