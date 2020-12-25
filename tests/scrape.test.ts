import Scrapper from "../src/scrape/index"
import { URL_MUSIC_CHART } from "../src/const"

describe('Scrape the data', () => {
    test('it should be scrape the data', async () => {
        const response = await Scrapper.MusicChartScrape(URL_MUSIC_CHART)
        expect(response).toBeTruthy()
    })
})