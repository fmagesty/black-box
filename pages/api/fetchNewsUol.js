import axios from "axios";
const cheerio = require("cheerio");

// maybe change from "List" to "Array" on variable names.
const fetchNewsUol = async () => {
  let headlineList = [];
  let newsLinkList = [];
  let thumbnailList = [];
  const uol = "https://noticias.uol.com.br/";

  try {
    const response = await axios.get(uol);
    const data = response.data;
    const $ = cheerio.load(data);

    // Populate headlineList Array
    let headlineHTML = $(".thumb-title");
    headlineHTML.map((i, e) => {
      let headline = e.children[0].data;
      headlineList.push(headline);
    });

    // Populate newsLinkList Array
    let newsLinkHTML = $(".thumbnails-wrapper");
    newsLinkHTML.map((i, e) => {
      let newsLink = e.children[0].attribs.href;
      newsLinkList.push(newsLink);
    });

    // Populate newsLinkList Array
    // let imagesHTML = $("._evt").find(".bstn-fd-picture-image");
    let imagesHTML = $(".thumb-layer");
    imagesHTML.map((i, e) => {
      const imageSrc = e.children[0].next.attribs.src;
      thumbnailList.push(imageSrc);
      console.log(thumbnailList);
    });

    return {
      props: { headlineList, newsLinkList, thumbnailList },
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchNewsUol;
