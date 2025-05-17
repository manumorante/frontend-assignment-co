import { Show } from '@/types'

export const mockShow: Show = {
  id: '1',
  name: 'Test Show',
  image: {
    medium: 'test.jpg',
    original: 'test-original.jpg',
  },
  genres: ['Drama', 'Comedy'],
  summary: '<b>Summary</b>',
  rating: { average: 8.5 },
}

export const mockShows: Show[] = [mockShow]
