import fetchNewsUol from "./fetchNewsUol"
import RenderNewsCards from "./RenderNewsCards"

describe("fetchNewsUol and RenderNewsCards", () => {
    it("should fetch news data from the UOL website and render it as a list of cards", async () => {
        const newsData = await fetchNewsUol()
        expect(newsData).toHaveProperty("props")
        expect(typeof newsData.props).toBe("object")

        const cardList = RenderNewsCards(newsData)
        expect(Array.isArray(cardList)).toBe(true)
        expect(cardList.length).toBeGreaterThan(0)
        expect(cardList[0].type).toBe("div")
    })
})
