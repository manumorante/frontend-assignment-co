import { ReactNode } from 'react'
import { Link } from 'react-router'

interface EmptyStateProps {
  icon: ReactNode
  title: string
  actionTo: string
}

export default function EmptyState({ icon, title, actionTo }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
      <div className="">{icon}</div>
      <h2 className="text-lg font-light opacity-55">{title}</h2>

      <Link to={actionTo} className="button secondary">
        Explorar
      </Link>
    </div>
  )
}
