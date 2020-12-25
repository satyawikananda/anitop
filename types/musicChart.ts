type MediaUrl = {
    youtube: String,
    spotify: String,
    itunes: String
}

type Stats = {
    peak: Number,
    previously: String | Number,
    weeks: Number
}

export interface DataMusicChart {
    title: String,
    artists: Array<string>,
    imageUrl: String,
    mediaUrl: MediaUrl,
    rank: Number,
    stats: Stats
}

export interface Data {
    code: Number,
    message: String,
    totalItems: Number,
    data: Array<DataMusicChart>
}

export interface DataError {
    code: Number,
    status: String,
    message: String
}