import Scrapper from './scrape/index'
import { writeFile } from "fs"
import { join } from "path"
import chalk from "chalk"
import { URL_FEMALE_CHARACTERS } from "./const"

const scrapeFemaleCharacters = async ():Promise<void> => {
    const femaleCharactersFile = join(__dirname, '..', 'data/', 'female-character.json')
    const response = await Scrapper.CharactersScrape(URL_FEMALE_CHARACTERS)
    const data = response
    writeFile(femaleCharactersFile, JSON.stringify(data), err => {
        if(err) console.log(err)
        console.log(chalk.blue.bgYellow(`\n =========Scraping data female characters successfully finished========= \n`))
    })
}

console.log(chalk.blue.bgYellow(`\n =========Scraping data female characters start========= \n`))
scrapeFemaleCharacters()