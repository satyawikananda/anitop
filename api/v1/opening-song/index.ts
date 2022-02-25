import { VercelRequest, VercelResponse } from "@vercel/node"
import { join } from "path"
import { readFile } from 'fs/promises';
import { Data } from "../../../types/common"

// const fileData = join(__dirname, '..', '..', '..', 'data/', 'opening-song.json')
const fileData = join(process.cwd(), 'data/opening-song.json')

export default async (request: VercelRequest, response:VercelResponse) => {
    const { limit }: any = request.query
    const readData = await readFile(fileData, 'utf-8')
    const openingSongs = JSON.parse(readData)
    let result = openingSongs.slice(0, limit)
    const data:Data = {
        code: response.statusCode,
        message: "List of opening song trending data",
        totalItems: limit === undefined 
            ? openingSongs.length
            : result.length
            ? limit > openingSongs.length
            ? null
            : result.length
            : openingSongs.length,
        data: limit === undefined 
            ? openingSongs
            : result
            ? limit > openingSongs.length 
            ? null 
            : result 
            : openingSongs,
    }
    response.status(response.statusCode).send(data)
}