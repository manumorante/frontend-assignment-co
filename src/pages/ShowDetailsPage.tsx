import { EpisodeList } from '@/components'
import ShowProfile from '@/components/ShowProfile'

import { useParams } from 'react-router'

export default function ShowDetailsPage() {
  const { id } = useParams()
  if (!id) return null

  return (
    <div className="space-y-8">
      <ShowProfile id={id} />
      <EpisodeList showId={id} />
    </div>
  )
}
