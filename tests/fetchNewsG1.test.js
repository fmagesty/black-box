//fetchNewsG1 function test:

// To test the fetchNewsG1 function, you can use Jest's mock function to mock the axios call and return a mocked response.
// After that you can test the function if it returns a data object with the expected shape.

it("should fetch data from G1 website", async () => {
    const data = {
      "props": {
        "0": {
            "headline": "Pneumonia causou 1/3 das mortes evitáveis de crianças ianomâmis de até 5 anos em 2022",
            "href": "https://www1.folha.uol.com.br/equilibrioesaude/2023/01/pneumonia-causou-13-das-mortes-evitaveis-de-criancas-yanomamis-em-2022.shtml",
        =-    "imageSrc": "https://conteudo.imguol.com.br/c/home/07/2023/01/22/criancas-yanomamis-sao-atendidas-por-agentes-de-saude-em-roraima-no-ultimo-dia-18-1674417774785_300x225.jpg"
        },
      }
    };
    axios.get = jest.fn().mockResolvedValue({ data });
    const newsData = await fetchNewsG1();
    expect(newsData).toEqual(data);
  });
