import { NowRequest, NowResponse } from "@vercel/node"
import { join } from "path"
import { promises as fsPromises } from 'fs';
import { Data } from "../../../types/common"

const fileData = join(__dirname, '..', '..', '..', 'data/', 'couple.json')

export default async (request: NowRequest, response:NowResponse) => {
    const { limit }: any = request.query
    const readData = await fsPromises.readFile(fileData, 'utf-8')
    const couple = JSON.parse(readData)
    let result = couple.slice(0, limit)
    const data:Data = {
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