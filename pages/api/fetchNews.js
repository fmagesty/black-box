import axios from "axios";
const cheerio = require("cheerio");

const fetchNews = async (inputValue) => {
  let thumbnailList = [];
  let headlineList = [];
  let newsLinkList = [];

  try {
    const result = await axios.get("https://g1.globo.com/");
    const data = result.data;
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
    let bla = $("._evt h2")
    bla.map((i,e) => {
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
