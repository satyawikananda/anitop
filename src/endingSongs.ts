import Scrapper from './scrape/index'
import { writeFile } from "fs"
import { join } from "path"
import chalk from "chalk"
import { URL_ENDING_SONG } from "./const"

const scrapeEndingSongs = async ():Promise<void> => {
    const endingSongsFile = join(__dirname, '..', 'data/', 'ending-song.json')
    const response = await Scrapper.OstSongsScrape(URL_ENDING_SONG)
    const data = response
    writeFile(endingSongsFile, JSON.stringify(data), err => {
        if(err) console.log(err)
        console.log(chalk.blue.bgYellow(`\n =========Scraping data ending song successfully finished========= \n`))
    })
}

console.log(chalk.blue.bgYellow(`\n =========Scraping data ending song start========= \n`))
scrapeEndingSongs()