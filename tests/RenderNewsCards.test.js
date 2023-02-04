import React from "react"
import { shallow } from "enzyme"
import RenderNewsCards from "./RenderNewsCards"

describe("RenderNewsCards", () => {
    it("should render news cards", () => {
        const newsData = {
            props: {
                0: {
                    headline:
                        "Pneumonia causou 1/3 das mortes evitáveis de crianças ianomâmis de até 5 anos em 2022",
                    href: "https://www1.folha.uol.com.br/equilibrioesaude/2023/01/pneumonia-causou-13-das-mortes-evitaveis-de-criancas-yanomamis-em-2022.shtml",
                    imageSrc:
                        "https://conteudo.imguol.com.br/c/home/07/2023/01/22/criancas-yanomamis-sao-atendidas-por-agentes-de-saude-em-roraima-no-ultimo-dia-18-1674417774785_300x225.jpg",
                    textSummary: "Test text summary",
                },
                1: {
                    headline: "Test headline",
                    href: "https://www.example.com",
                    imageSrc: "https://via.placeholder.com/400x300",
                    textSummary: "Test text summary",
                },
            },
        }

        const wrapper = shallow(<RenderNewsCards {...newsData} />)

        // Check if the correct number of cards are rendered
        expect(wrapper.find(".cardOutterContainer").length).toBe(
            Object.keys(newsData.props).length
        )

        // Check if the first card's headline and link match the expected values
        expect(
            wrapper
                .find(".cardOutterContainer")
                .at(0)
                .find(".cardHeadline")
                .text()
        ).toBe(newsData.props["0"].headline)
        expect(
            wrapper
                .find(".cardOutterContainer")
                .at(0)
                .find(".cardLink")
                .prop("href")
        ).toBe(newsData.props["0"].href)

        // Check if the second card's headline and link match the expected values
        expect(
            wrapper
                .find(".cardOutterContainer")
                .at(1)
                .find(".cardHeadline")
                .text()
        ).toBe(newsData.props["1"].headline)
        expect(
            wrapper
                .find(".cardOutterContainer")
                .at(1)
                .find(".cardLink")
                .prop("href")
        ).toBe(newsData.props["1"].href)
    })
})
