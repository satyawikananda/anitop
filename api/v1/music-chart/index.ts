import { VercelRequest, VercelResponse } from "@vercel/node"
import { join } from "path"
import { readFile } from 'fs/promises';
import { Data } from "../../../types/musicChart"

// const fileData = join(__dirname, '..', '..', '..', 'data/', 'music-chart.json')
const fileData = join(process.cwd(), 'data/music-chart.json')

export default async (request: VercelRequest, response:VercelResponse) => {
    const { limit }: any = request.query

    const readData = await readFile(fileData, 'utf-8')
    const musicChart = JSON.parse(readData)
    let result = musicChart.slice(0, limit)
    const data:Data = {
        code: response.statusCode,
        message: "List of anime music chart data",
        totalItems: limit === undefined 
            ? musicChart.length
            : result.length
            ? limit > musicChart.length
            ? null
            : result.length
            : musicChart.length,
        data: limit === undefined 
            ? musicChart
            : result
            ? limit > musicChart.length 
            ? null 
            : result 
            : musicChart,
    }
    response.status(response.statusCode).send(data)
}