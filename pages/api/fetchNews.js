import axios from "axios";
const cheerio = require("cheerio");

const fetchNews = async () => {
  let thumbnailList = [];
  let headlineList = [];
  let newsLinkList = [];
  const g1 = "https://g1.globo.com/"

  try {
    const response = await axios.get(g1);
    const data = response.data;
    const $ = cheerio.load(data);
    // Populate thumbnails Array
    let images = $("._evt").find(".bstn-fd-picture-image");
    // console.log("images:",images);
    images.map((index, element) => {
      const attributes = element.attribs;
      Object.keys(attributes).map((key) => {
        // console.log(key, ': ', attributes[key]);
      });
      thumbnailList.push(attributes.src);
    });

    // Populate headlines Array
    let htmlElement = $("._evt h2")
    htmlElement.map((i,e) => {
      let headline = e.children[0].children[0].data
      let href = e.children[0].attribs.href
      headlineList.push(headline)
      newsLinkList.push(href)
    })
    return {
      props: { headlineList, thumbnailList,newsLinkList },
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchNews;
