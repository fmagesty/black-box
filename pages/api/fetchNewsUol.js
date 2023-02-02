import axios from "axios";
const cheerio = require("cheerio");

// maybe change from "List" to "Array" on variable names.
const fetchNewsUol = async () => {
  const dataObj = {};
  const uol = "https://noticias.uol.com.br/";

  try {
    const response = await axios.get(uol);
    const data = response.data;
    const $ = cheerio.load(data);
    let headlineHTML = $(".thumb-title");
    headlineHTML.map((i, e) => {
      let headline = e.children[0].data;
      dataObj[i] = { headline: "", href: "", imageSrc: "", textSummary: "" };
      dataObj[i].headline = headline;
    });
    let hrefHTML = $(".thumbnails-wrapper");
    hrefHTML.map((i, e) => {
      let href = e.children[0].attribs.href;
      dataObj[i].href = href;
    });
    let imgSrcHTML = $(".thumb-layer");
    imgSrcHTML.map((i, e) => {
      const imageSrc = e.children[0].next.attribs["data-src"];
      imageSrc ? (dataObj[i].imageSrc = imageSrc) : (dataObj[i].imageSrc = "");
    });
    for (let i in dataObj) {
      try {
        const response = await axios.get(dataObj[i].href);
        const data = response.data;
        const $ = cheerio.load(data);
        let textSummaryHTML = $("p");
        let textSummary = "";
        textSummaryHTML.map((j, f) => {
          if (f.children[0] && textSummary.length < 280) {
            textSummary += f.children[0].data + " ";
          }
          console.log(textSummary);
        });
        textSummary.length > 0
          ? (dataObj[i].textSummary = textSummary + "...")
          : (dataObj[i].textSummary = "");
      } catch (error) {
        console.log(error);
      }
    }
    return {
      props: dataObj,
    };
  } catch (error) {
    console.log("error:", error);
  }
};

export default fetchNewsUol;
