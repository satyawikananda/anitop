import Scrapper from './scrape/index'
import { writeFile } from "fs"
import { join } from "path"
import chalk from "chalk"
import { URL_OPENING_SONG } from "./const"

const scrapeOpeningSongs = async ():Promise<void> => {
    const openingSongsFile = join(__dirname, '..', 'data/', 'opening-song.json')
    const response = await Scrapper.OstSongsScrape(URL_OPENING_SONG)
    const data = response
    writeFile(openingSongsFile, JSON.stringify(data), err => {
        if(err) console.log(err)
        console.log(chalk.blue.bgYellow(`\n =========Scraping data opening song successfully finished========= \n`))
    })
}

console.log(chalk.blue.bgYellow(`\n =========Scraping data opening song start========= \n`))
scrapeOpeningSongs()