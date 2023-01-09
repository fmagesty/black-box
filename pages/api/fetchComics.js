import axios from "axios";
const cheerio = require("cheerio");

const fetchComics = async (inputValue) => {
  try {
    const result = await axios.get("https://xkcd.com/");
    const data = result.data;
    const $ = cheerio.load(data);
    $("div");
    const title = $("#ctitle").text();
    // const lastScraped = new Date().toISOString();
    let image = $('#middleContainer').find('img').attr('src')
    image = "https:" + image
    console.log(image);
    return {
      props: { title, image },
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchComics;
