export interface ShowImage {
  medium: string
  original: string
}

export interface Show {
  id: number
  name: string
  summary?: string
  image?: ShowImage
}

export type ShowDraft = Omit<Show, 'id'>
