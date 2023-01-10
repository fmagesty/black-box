import axios from "axios";
const cheerio = require("cheerio");

const fetchNews = async (inputValue) => {
  // fetch from G1:
  try {
    const result = await axios.get("https://g1.globo.com/");
    const data = result.data;
    const $ = cheerio.load(data);
    $("div");
    const headline = $("h2").prop('innerText')
    let image = $('._evt').find('.bstn-fd-picture-image').attr('src')
    console.log(headline, image);
    return {
      props: { headline, image },
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchNews;
