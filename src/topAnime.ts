import Scrapper from './scrape/index'
import { writeFile } from "fs"
import { join } from "path"
import chalk from "chalk"
import { URL_TOP_ANIME } from "./const"

const scrapeTopAnime = async ():Promise<void> => {
    const topAnimeFile = join(__dirname, '..', 'data/', 'top-anime.json')
    const response = await Scrapper.TopAnimeScrape(URL_TOP_ANIME)
    const data = response
    writeFile(topAnimeFile, JSON.stringify(data), err => {
        if(err) console.log(err)
        console.log(chalk.blue.bgYellow(`\n =========Scraping data top anime successfully finished========= \n`))
    })
}

console.log(chalk.blue.bgYellow(`\n =========Scraping data top anime start========= \n`))
scrapeTopAnime()