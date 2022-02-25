import { VercelRequest, VercelResponse } from "@vercel/node"
import { join } from "path"
import { readFile } from 'fs/promises';
import { Data } from "../../../types/common"

// const fileData = join(__dirname, '..', '..', '..', 'data/', 'male-character.json')
const fileData = join(process.cwd(), 'data/male-character.json')

export default async (request: VercelRequest, response:VercelResponse) => {
    const { limit }:any = request.query
    const readData = await readFile(fileData, 'utf-8')
    const maleCharacter = JSON.parse(readData)
    let result = maleCharacter.slice(0, limit)
    const data:Data = {
        code: response.statusCode,
        message: "List of male character trending data",
        totalItems: limit === undefined 
            ? maleCharacter.length
            : result.length
            ? limit > maleCharacter.length
            ? null
            : result.length
            : maleCharacter.length,
        data: limit === undefined 
            ? maleCharacter
            : result
            ? limit > maleCharacter.length 
            ? null 
            : result 
            : maleCharacter,
    }
    response.status(response.statusCode).send(data)
}