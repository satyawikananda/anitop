import { VercelRequest, VercelResponse } from "@vercel/node"
import { join } from "path"
import { readFile } from 'fs/promises';
import { Data } from "../../../types/common"

// const fileData = join(__dirname, '..', '..', '..', 'data/', 'couple.json')
const fileData = join(process.cwd(), 'data/couple.json')
console.log(fileData)


export default async (request: VercelRequest, response:VercelResponse) => {
    const { limit }: any = request.query
    const readData = await readFile(fileData, 'utf-8')
    const couple = JSON.parse(readData)
    let result = couple.slice(0, limit)
    const data: Data = {
        code: response.statusCode,
        message: "List of coupleships trending data",
        totalItems: limit === undefined 
            ? couple.length
            : result.length
            ? limit > couple.length
            ? null
            : result.length
            : couple.length,
        data: limit === undefined 
            ? couple
            : result
            ? limit > couple.length 
            ? null 
            : result 
            : couple,
    }
    response.status(200).send(data)
}