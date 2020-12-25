import Scrapper from './scrape/index'
import { writeFile } from "fs"
import { join } from "path"
import chalk from "chalk"
import { URL_MALE_CHARACTERS } from "./const"

const scrapeMaleCharacters = async ():Promise<void> => {
    const maleCharactersFile = join(__dirname, '..', 'data/', 'male-character.json')
    const response = await Scrapper.CharactersScrape(URL_MALE_CHARACTERS)
    const data = response
    writeFile(maleCharactersFile, JSON.stringify(data), err => {
        if(err) console.log(err)
        console.log(chalk.blue.bgYellow(`\n =========Scraping data male characters successfully finished========= \n`))
    })
}

console.log(chalk.blue.bgYellow(`\n =========Scraping data male characters start========= \n`))
scrapeMaleCharacters()