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

const fetchNewsG1 = async (): Promise<{
    props: NewsData
}> => {
    const dataObj: NewsData = {}
    const g1 = "https://g1.globo.com/"
    try {
        const response = await axios.get(g1)
        const data = response.data
        const $ = cheerio.load(data)
        let headlineHTML = $("._evt h2")
        headlineHTML.map((i: any, e: any) => {
            let headline = e.children[0].children[0].data
            let href = e.children[0].attribs.href
            let textSummary = ""
            dataObj[i] = {
                headline: "",
                href: "",
                imageSrc: "",
                textSummary: "",
            }
            dataObj[i].headline = headline
            dataObj[i].href = href
            dataObj[i].textSummary = textSummary
        })
        let imgSrcHTML = $(".bstn-fd-picture-image")
        imgSrcHTML.map((i: any, e: any) => {
            const imageSrc = e.attribs.src
            dataObj[i].imageSrc = imageSrc
        })
        for (let i in dataObj) {
            try {
                const response = await axios.get(dataObj[i].href)
                const data = response.data
                const $ = cheerio.load(data)
                let textSummaryHTML = $(".content-text p")
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
        console.error(`Error when fetching news data from ${g1}:`, error)
        return {
            props: {},
        }
    }
}

export default fetchNewsG1
