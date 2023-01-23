import axios from "axios";
const cheerio = require("cheerio");

// maybe change from "List" to "Array" on variable names.
const fetchNewsUol = async () => {
  const dataObj = {}
  const uol = "https://noticias.uol.com.br/";

  try {
    const response = await axios.get(uol);
    const data = response.data;
    const $ = cheerio.load(data);
    let headlineHTML = $(".thumb-title");
    headlineHTML.map((i, e) => {
      let headline = e.children[0].data;
      dataObj[i] = { headline: "", href: "", imageSrc: "" };
      dataObj[i].headline = headline
    });
    let hrefHTML = $(".thumbnails-wrapper");
    hrefHTML.map((i, e) => {
      let href = e.children[0].attribs.href;
      dataObj[i].href = href;
    });
    let imgSrcHTML = $(".thumb-layer");
    imgSrcHTML.map((i, e) => {
      const imageSrc = e.children[0].next.attribs["data-src"];
      imageSrc ? dataObj[i].imageSrc = imageSrc : dataObj[i].imageSrc = ''
    });
    return {
      props: dataObj
    };
  } catch (error) {
    console.log("error:", error);
  }
};

export default fetchNewsUol;
