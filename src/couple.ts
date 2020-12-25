import Scrapper from './scrape/index'
import { writeFile } from "fs"
import { join } from "path"
import chalk from "chalk"
import { URL_COUPLE_SHIP } from "./const"

const scrapeCouples = async ():Promise<void> => {
    const coupleFile = join(__dirname, '..', 'data/', 'couple.json')
    const response = await Scrapper.CoupleScrape(URL_COUPLE_SHIP)
    const data = response
    writeFile(coupleFile, JSON.stringify(data), err => {
        if(err) console.log(err)
        console.log(chalk.blue.bgYellow(`\n =========Scraping data couple successfully finished========= \n`))
    })
}

console.log(chalk.blue.bgYellow(`\n =========Scraping data couple start========= \n`))
scrapeCouples()