import ShowProfile from '@/components/ShowProfile'
import { useParams } from 'react-router'

export default function ShowDetailsPage() {
  const { id } = useParams()
  if (!id) return null

  return (
    <div>
      <ShowProfile id={id} />
    </div>
  )
}
