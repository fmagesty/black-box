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
      dataObj[i] = { headline: "", href: "", imageSrc: "" };
      dataObj[i].headline = headline;
      dataObj[i].href = href;
    });
    let imgSrcHTML = $(".bstn-fd-picture-image");
    imgSrcHTML.map((i, e) => {
      const imageSrc = e.attribs.src;
      dataObj[i].imageSrc = imageSrc
    })
    return {
      props: dataObj,
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchNewsG1;

// newsData UOL:
// {
//     "props": {
//         "0": {
//             "headline": "Pneumonia causou 1/3 das mortes evitáveis de crianças ianomâmis de até 5 anos em 2022",
//             "href": "https://www1.folha.uol.com.br/equilibrioesaude/2023/01/pneumonia-causou-13-das-mortes-evitaveis-de-criancas-yanomamis-em-2022.shtml",
//             "imageSrc": "https://conteudo.imguol.com.br/c/home/07/2023/01/22/criancas-yanomamis-sao-atendidas-por-agentes-de-saude-em-roraima-no-ultimo-dia-18-1674417774785_300x225.jpg"
//         },
//     }
// }

// newsData G1:
// {
//     "props": {
//         "headlineList": [
//             "Governo diz que vai acelerar recrutamento de médicos para atender indígenas",
//             "Gilmar Mendes diz que é urgente apurar responsabilidades pela situação dos yanomami ",
//             "Morre mulher yanomami fotografada em estado grave de desnutrição ",
//             "TSE dá prazo de 5 dias para Bolsonaro se manifestar sobre atos golpistas e postagem contra resultado das eleições",
//             "Restauradores trabalham para recuperar o patrimônio vandalizado no STF",
//             "Saiba quem é o vândalo que destruiu o relógio de Dom João VI em Brasília",
//             "'Jamais tivemos conhecimento', dizem Lemann, Telles e Sicupira sobre rombo na Americanas",
//             "3 morrem e 2 desaparecem após barco virar na fronteira com a Argentina",
//             "'Nunca tinha visto o rio tão enfurecido', diz homem que salvou vítimas"
//         ],
//         "thumbnailList": [
//             "https://s2.glbimg.com/zp8IJ8UHTUlH3pTeltH-fglPVUg=/0x93:1280x813/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/K/j/8e52opRki0x9x01oWRHQ/yanomami2.jpg",
//             "https://s2.glbimg.com/PR0QD8TQEsJOoDmCAEev393i6_I=/0x470:5500x3564/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/P/v/ptfTB3SoewaJkZxDNE5g/2023-01-19t223604z-1-lynxmpej0i12u-rtroptp-4-brazil-election.jpg",
//             "https://s2.glbimg.com/mkY5UuL1bxQoRTM8hY890_R_cYQ=/0x0:1042x586/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/0/j/VSJHpMQ6WNmovfwvN3VA/stf-depois-22.jpg",
//             "https://s2.glbimg.com/zWVuV1C1gZaGlv7nfVaGdwDVzj4=/0x0:1280x720/540x304/smart/filters:max_age(3600)/http://s01.video.glbimg.com/deo/vi/43/19/11301943",
//             "https://s2.glbimg.com/SvO2_CQBZxgDAboLKbbeK3HfHEQ=/0x0:800x450/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/R/D/FrMf5IT6GcBD9JzcZcig/image-4-.png",
//             "https://s2.glbimg.com/V98ExnxvzSTttbaxGwZM3Z-_tjw=/0x131:1600x1031/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/H/Z/OAc7zdQCWBvH28VeANGg/whatsapp-image-2023-01-22-at-09.17.24.jpeg"
//         ],
//         "newsLinkList": [
//             "https://g1.globo.com/saude/noticia/2023/01/22/mais-medicos-ministerio-da-saude-diz-que-vai-acelerar-recrutamento-de-profissionais-para-distritos-indigenas.ghtml",
//             "https://g1.globo.com/politica/noticia/2023/01/22/gilmar-mendes-diz-que-situacao-dos-yanomamis-e-uma-tragedia-muito-grande-e-defende-apuracao-urgente-das-responsabilidades.ghtml",
//             "https://g1.globo.com/rr/roraima/noticia/2023/01/22/morre-mulher-yanomami-fotografada-em-estado-grave-de-desnutricao.ghtml",
//             "https://g1.globo.com/politica/noticia/2023/01/22/ministro-do-tse-da-prazo-de-5-dias-para-bolsonaro-se-manifestar-sobre-atos-antidemocraticos-de-8-de-janeiro.ghtml",
//             "https://g1.globo.com/fantastico/noticia/2023/01/22/restauradores-trabalham-para-recuperar-o-patrimonio-vandalizado-por-terroristas-no-stf.ghtml",
//             "https://g1.globo.com/fantastico/noticia/2023/01/22/saiba-quem-e-o-vandalo-que-destruiu-o-relogio-de-dom-joao-vi-em-brasilia.ghtml",
//             "https://g1.globo.com/economia/noticia/2023/01/22/lemann-telles-e-sicupira-falam-pela-1a-vez-apos-rombo-contabil-da-americanas-jamais-tivemos-conhecimento.ghtml",
//             "https://g1.globo.com/rs/rio-grande-do-sul/noticia/2023/01/22/mortes-em-embarcacao-alecrim.ghtml",
//             "https://g1.globo.com/rs/rio-grande-do-sul/noticia/2023/01/22/instinto-de-ser-humano-diz-homem-que-resgatou-pessoas-de-barco.ghtml"
//         ]
//     }
// }
