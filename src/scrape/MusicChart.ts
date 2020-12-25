import fetcher from "../utils/fetcher"
import cheerio from "cheerio"
import { DataMusicChart, DataError } from "../../types/musicChart"

const dataScrape:DataMusicChart[] = []
const MusicChartScrape = async (url: string) => {
    try{
        const getUrl = await fetcher(url)
        const response = getUrl
        if(response.status == 200) {
            const html = response.data
            const $ = cheerio.load(html)
            const listSongs = $('.shuffle-song-entry')
            
            listSongs.each((i, el):void => {
                const title: string = $(el).find('.sse-top > .sse-details.sse-e > .sse-title').text().trim()
                const listArtist: string = $(el).find('.sse-top > .sse-details.sse-e > .sse-artist').text().trim()
                const urlYoutube: string = $(el).find('.sse-top > .sse-mv-pop.sse-e > .youtube-pop.sse-pop').data('url')
                const urlSpotify: string = $(el).find('.sse-top > .sse-mv-pop.sse-e > .spotify-pop.sse-pop').data('url')
                const urlItunes: string = $(el).find('.sse-top > .sse-mv-pop.sse-e > .itunes-pop.sse-pop > a').attr('href')
                const imageUrl: string = $(el).find('div.sse-top > div.sse-thumbnail.sse-e > img').attr('src')
                const rank: number = i + 1
                const peak: number = +$(el).find('div.sse-bottom > div > div.sse-peak.sse-stat-e.col-sm-4 > div.sse-stat-no').text().trim()
                let previously: string | number = $(el).find('div.sse-bottom > div > div.sse-prev.sse-stat-e.col-sm-4 > div.sse-stat-no').text().trim()
                const weeks: number = +$(el).find('div.sse-bottom > div > div.sse-week.sse-stat-e.col-sm-4 > div.sse-stat-no').text().trim()
                previously = previously === '-' ? '-' : +previously

                const artists:Array<string> = listArtist.split(', ')
                const youtube:string = urlYoutube !== undefined ? `https://www.youtube.com/watch?v=${urlYoutube}` : undefined
                const spotify:string = urlSpotify !== undefined ? `https://open.spotify.com/track/${urlSpotify}` : undefined
                const itunes:string = urlItunes !== undefined ? urlItunes : undefined

                dataScrape.push({
                    title,
                    artists,
                    imageUrl,
                    rank,
                    mediaUrl: {
                        youtube,
                        spotify,
                        itunes
                    },
                    stats: {
                        peak,
                        previously,
                        weeks
                    }
                })
            })
            return Promise.resolve(dataScrape)
        }
    }catch(e) {
        const error: DataError = {
            code: e.response.status,
            status: "Failed",
            message: e.response.statusText
        }
        return Promise.reject(error)
    }
}

export default MusicChartScrape