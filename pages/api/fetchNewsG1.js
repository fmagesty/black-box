import axios from "axios";
const cheerio = require("cheerio");

const fetchNewsG1 = async () => {
  const dataObj = {};
  const g1 = "https://g1.globo.com/";

  try {
    const response = await axios.get(g1);
    const data = response.data;
    const $ = cheerio.load(data);
    let headlineHTML = $("._evt h2");
    headlineHTML.map((i, e) => {
      let headline = e.children[0].children[0].data;
      let href = e.children[0].attribs.href;
      let textSummary = ""; // Add a new property for text summary
      dataObj[i] = { headline: "", href: "", imageSrc: "", textSummary: "" };
      dataObj[i].headline = headline;
      dataObj[i].href = href;
      dataObj[i].textSummary = textSummary;
    });
    let imgSrcHTML = $(".bstn-fd-picture-image");
    imgSrcHTML.map((i, e) => {
      const imageSrc = e.attribs.src;
      dataObj[i].imageSrc = imageSrc;
    });

    // Add a loop to get the text summary for each news
    for (let i in dataObj) {
      try {
        const response = await axios.get(dataObj[i].href);
        const data = response.data;
        const $ = cheerio.load(data);
        let textSummaryHTML = $(".content-text p");
        let textSummary = "";
        textSummaryHTML.map((j, f) => {
          if (f.children[0] && textSummary.length < 280) { // make the text summary not go over 280 chars
            textSummary += f.children[0].data + " ";
          }
        });
        textSummary.length > 0 ? dataObj[i].textSummary = textSummary + "..." : dataObj[i].textSummary = ''
      } catch (error) {
        console.log(error);
      }
    }

    return {
      props: dataObj,
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchNewsG1;
