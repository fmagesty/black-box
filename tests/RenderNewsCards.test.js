//   RenderNewsCards component test:

// To test the RenderNewsCards component, you can use Jest and Enzyme to check if the component renders the correct number of news cards and if the card's headline and link match the expected values.
// You can test if each card has the right classname, it's displaying the right headline, and the link is directing to the right place.

  it("should render news cards", () => {
    const newsData = {
      "props": {
        "0": {
            "headline": "Pneumonia causou 1/3 das mortes evitáveis de crianças ianomâmis de até 5 anos em 2022",
            "href": "https://www1.folha.uol.com.br/equilibrioesaude/2023/01/pneumonia-causou-13-das-mortes-evitaveis-de-criancas-yanomamis-em-2022.shtml",
            "imageSrc": "https://conteudo.imguol.com.br/c/home/07/2023/01/22/criancas-yanomamis-sao-atendidas-por-agentes-de-saude-em-roraima-no-ultimo-dia-18-1674417774785_300x225.jpg"
        },
        "1": {
            "headline": "Test headline",
