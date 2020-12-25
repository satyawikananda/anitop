import Scrapper from './scrape/index'
import { writeFile } from "fs"
import { join } from "path"
import chalk from "chalk"
import { URL_MUSIC_CHART } from "./const"

const scrapeMusicChart = async ():Promise<void> => {
    const musicChartFile = join(__dirname, '..', 'data/', 'music-chart.json')
    const response = await Scrapper.MusicChartScrape(URL_MUSIC_CHART)
    const data = response
    writeFile(musicChartFile, JSON.stringify(data), err => {
        if(err) console.log(err)
        console.log(chalk.blue.bgYellow(`\n =========Scraping data anime music chart successfully finished========= \n`))
    })
}

console.log(chalk.blue.bgYellow(`\n =========Scraping data anime music chart start========= \n`))
scrapeMusicChart()