import { VercelResponse } from "@vercel/node"

type characters = {
    maleCharacter: String,
    femaleCharacter: String
}
type ostSongs = {
    openingSong: String,
    endingSong: String
}
type listApi = {
    musicChart: String,
    coupleShip: String,
    characters: characters,
    ostSongs: ostSongs,
    topAnime: String
}
interface Data {
    listApi: listApi,
    author: String,
    note: String,
    source: String
}

export default (_, response: VercelResponse) => {
    const data: Data = {
        listApi: {
            musicChart: "https://anitop.vercel.app/api/v1/music-chart",
            coupleShip: "https://anitop.vercel.app/api/v1/couple-ship",
            characters: {
                maleCharacter: "https://anitop.vercel.app/api/v1/male-character",
                femaleCharacter: "https://anitop.vercel.app/api/v1/female-character"
            },
            ostSongs: {
                openingSong: "https://anitop.vercel.app/api/v1/opening-song",
                endingSong: "https://anitop.vercel.app/api/v1/ending-song"
            },
            topAnime: "https://anitop.vercel.app/api/v1/top-anime"
        },
        note: "Every endpoint API has a query params named limit and type data of limit is number",
        author: "Satya Wikananda",
        source: "https://github.com/satyawikananda/anitop"
    }

    response.status(200).send(data)
}