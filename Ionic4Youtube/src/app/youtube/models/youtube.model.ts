
export interface YoutubeModel {
    kind: string
    etag: string
    pageInfo : PageInfo 
    items: Items[]
}

export interface PageInfo {
    totalResults: number
    resultsPerPage: number
}

export interface Items {
    id: string
    etag: string
    snippet: Snippet
}

export interface Snippet {
    title: string
    channelId: string
    description: string
    thumbnails: Thumbnails
    publishedAt: string
}

export interface Thumbnails {
    channelTitle: string
    default: Thumbnail
    medium: Thumbnail
    high: Thumbnail
    standard: Thumbnail
    maxres: Thumbnail
    localized: Localized
}

export interface Thumbnail {
    url: string
    width: number
    height: number
}

export interface Localized {
    title: string
    description: string
}