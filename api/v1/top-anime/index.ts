import { VercelRequest, VercelResponse } from "@vercel/node"
import { join } from "path"
import { readFile } from 'fs/promises';
import { Data } from "../../../types/common"

// const fileData = join(__dirname, '..', '..', '..', 'data/', 'top-anime.json')
const fileData = join(process.cwd(), 'data/top-anime.json')

export default async (request: VercelRequest, response:VercelResponse) => {
    const { limit }: any = request.query
    const readData = await readFile(fileData, 'utf-8')
    const topAnime = JSON.parse(readData)
    let result = topAnime.slice(0, limit)
    const data:Data = {
        code: response.statusCode,
        message: "List of top anime data",
        totalItems: limit === undefined 
            ? topAnime.length
            : result.length
            ? limit > topAnime.length
            ? null
            : result.length
            : topAnime.length,
        data: limit === undefined 
            ? topAnime
            : result
            ? limit > topAnime.length 
            ? null 
            : result 
            : topAnime,
    }
    response.status(response.statusCode).send(data)
}