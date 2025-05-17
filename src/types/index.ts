export interface Image {
  medium: string
  original: string
}

export interface Show {
  id: string
  name: string
  summary: string
  image: Image
  genres: string[]
  rating: {
    average: number
  }
}

export interface Episode {
  id: string
  name: string
  season: number
  number: number
  image: Image
  summary: string
}
