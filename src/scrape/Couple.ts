import fetcher from "../utils/fetcher"
import cheerio from "cheerio"
import { Couple, DataError } from "../../types/common"

const dataScrape:Couple[] = []
const CoupleScrape = async (url: string) => {
    try{
        const getUrl = await fetcher(url)
        const response = getUrl
        if(response.status == 200) {
            const html = response.data
            const $ = cheerio.load(html)
            const listAnimes = $('.at-mcc-entry')

            listAnimes.each((_, el) => {
                const names: Array<string> = $(el).find('div.at-mcc-e-details > div.entry-title').text().trim().split(' x ')
                const imageUrlOne: string = $(el).find('div.at-mcc-e-details > div.at-mcc-e-thumbnail:nth-child(1) > img').attr('src')
                const imageUrlTwo: string = $(el).find('div.at-mcc-e-details > div.at-mcc-e-thumbnail:nth-child(2) > img').attr('src')
                const anime: string = $(el).find('div.at-mcc-e-details > div.entry-detail').text().trim()
                const rank: number = +$(el).find('div.at-mcc-e-rank > div').text().trim()
                const peak: number = +$(el).find('div.at-mcc-e-movement > div.stats > div.peak.stats-entry > span').text().trim()
                let previously: string | number = $(el).find('div.at-mcc-e-movement > div.stats > div.prev.stats-entry > span').text().trim()
                previously = previously === '-' ? '-' : +previously
                const weeksOnTop: number = +$(el).find('div.at-mcc-e-movement > div.stats > div.weeks.stats-entry > span').text().trim()
                const status: string = $(el).find('div.at-mcc-e-movement > div.arrow-container > img').attr('alt')
                const stat: string = $(el).find('div.at-mcc-e-movement > div.arrow-number').text().trim()

                dataScrape.push({
                    names,
                    coupleImages: {
                        imageUrlOne,
                        imageUrlTwo
                    },
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

export default CoupleScrape