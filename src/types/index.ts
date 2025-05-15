export interface ShowImage {
  medium: string
  original: string
}

export interface Show {
  id: string
  name: string
  summary?: string
  image: ShowImage
  genres?: string[]
  rating?: {
    average: number
  }
}

export type ShowDraft = Omit<Show, 'id'>
