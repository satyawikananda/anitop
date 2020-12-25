import { NowRequest, NowResponse } from "@vercel/node"
import { join } from "path"
import { promises as fsPromises } from 'fs';
import { Data } from "../../../types/common"

const fileData = join(__dirname, '..', '..', '..', 'data/', 'female-character.json')

export default async (request: NowRequest, response:NowResponse) => {
    const { limit }: any = request.query
    const readData = await fsPromises.readFile(fileData, 'utf-8')
    const femaleCharacter = JSON.parse(readData)
    let result = femaleCharacter.slice(0, limit)
    const data:Data = {
        code: response.statusCode,
        message: "List of female character trending data",
        totalItems: limit === undefined 
            ? femaleCharacter.length
            : result.length
            ? limit > femaleCharacter.length
            ? null
            : result.length
            : femaleCharacter.length,
        data: limit === undefined 
            ? femaleCharacter
            : result
            ? limit > femaleCharacter.length 
            ? null 
            : result 
            : femaleCharacter,
    }
    response.status(response.statusCode).send(data)
}