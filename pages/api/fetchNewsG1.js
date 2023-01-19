import axios from "axios";
const cheerio = require("cheerio");


// maybe change from "List" to "Array" on variable names
const fetchNewsG1 = async () => {
  let thumbnailList = [];
  let headlineList = [];
  let newsLinkList = [];
  const g1 = "https://g1.globo.com/";

  try {
    const response = await axios.get(g1);
    const data = response.data;
    const $ = cheerio.load(data);

    // Populate thumbnails Array
    let imagesHTML = $("._evt").find(".bstn-fd-picture-image");
    // console.log("imagesHTML:",imagesHTML);
    imagesHTML.map((index, element) => {
      const attributes = element.attribs;
      Object.keys(attributes).map((key) => {
        // console.log(key, ': ', attributes[key]);
      });
      thumbnailList.push(attributes.src);
    });

    // Populate headlines Array
    let headlineHTML = $("._evt h2");
    headlineHTML.map((i, e) => {
      let headline = e.children[0].children[0].data;
      let href = e.children[0].attribs.href;
      headlineList.push(headline);
      newsLinkList.push(href);
    });
    return {
      props: { headlineList, thumbnailList, newsLinkList },
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchNewsG1;
