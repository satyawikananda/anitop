import fetcher from "../utils/fetcher"
import cheerio from "cheerio"
import { Character, DataError } from "../../types/common"

const dataScrape:Character[] = []
const CharactersScrape = async (url: string) => {
    try{
        const getUrl = await fetcher(url)
        const response = getUrl
        if(response.status == 200) {
            const html = response.data
            const $ = cheerio.load(html)
            const listAnimes = $('.at-mcc-entry')

            listAnimes.each((_, el) => {
                const name: string = $(el).find('div.at-mcc-e-details > div.entry-title').text().trim()
                const imageUrl: string = $(el).find('div.at-mcc-e-details > div.at-mcc-e-thumbnail > img').attr('src')
                const anime: string = $(el).find('div.at-mcc-e-details > div.entry-detail').text().trim()
                const rank: number = +$(el).find('div.at-mcc-e-rank > div').text().trim()
                const peak: number = +$(el).find('div.at-mcc-e-movement > div.stats > div.peak.stats-entry > span').text().trim()
                let previously: string | number = $(el).find('div.at-mcc-e-movement > div.stats > div.prev.stats-entry > span').text().trim()
                previously = previously === '-' ? '-' : +previously
                const weeksOnTop: number = +$(el).find('div.at-mcc-e-movement > div.stats > div.weeks.stats-entry > span').text().trim()
                const status: string = $(el).find('div.at-mcc-e-movement > div.arrow-container > img').attr('alt')
                const stat: string = $(el).find('div.at-mcc-e-movement > div.arrow-number').text().trim()

                dataScrape.push({
                    name,
                    imageUrl,
                    anime,
                    rank,
                    stats: {
                        peak,
                        previously,
                        weeksOnTop,
                        status,
                        stat
                    }
                })
            })
            return Promise.resolve(dataScrape)
        }
    }catch(e){
        const error: DataError = {
            code: e.response.status,
            status: "Failed",
            message: e.response.statusText
        }
        return Promise.reject(error)
    }
}

export default CharactersScrape