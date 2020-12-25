type Stats = {
    peak: Number,
    previously: String | Number,
    weeksOnTop: Number,
    status: String,
    stat: String
}

type CoupleImages = {
    imageUrlOne: String,
    imageUrlTwo: String
}

export interface Couple {
    names: Array<string>,
    anime: String,
    coupleImages: CoupleImages,
    rank: Number,
    stats: Stats
}

export interface OstSongs {
    title: String,
    artists: Array<string>,
    imageUrl: String,
    rank: Number,
    stats: Stats
}

export interface Character {
    name: String,
    anime: String,
    imageUrl: String,
    rank: Number,
    stats: Stats
}

export interface TopAnime {
    title: String,
    imageUrl: String,
    studio: String,
    rank: Number,
    stats: Stats
}

export interface Data {
    code: Number,
    message: String,
    totalItems: Number,
    data: Array<TopAnime> 
        | Array<Character>
        | Array<OstSongs>
        | Array<Couple>
}

export interface DataError {
    code: Number,
    status: String,
    message: String
}