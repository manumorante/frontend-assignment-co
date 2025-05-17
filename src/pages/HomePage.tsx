import { Link } from 'react-router'

// Estilos simplificados - solo los que realmente se reutilizan
const styles = {
  // Estilos para los cards que se repiten
  cardWrapper: 'w-full flex',
  card: 'rounded-base border border-zinc-200 bg-white shadow-xs transition-shadow duration-300 md:hover:shadow-lg px-4 py-5 sm:p-6 flex-1 flex flex-col',
  cardTitle: 'text-lg font-medium text-zinc-900',
  cardDesc: 'mt-2 text-sm text-zinc-500',
}

// Datos de las tarjetas - sin referencias a pacientes
const cards = [
  {
    to: '/shows',
    title: 'Show List',
    description: 'View the list of all available shows 20 at a time with infinite scroll.',
  },
  {
    to: '/shows/1',
    title: 'Profile Show Page',
    description:
      'Explore detailed information about individual shows including ratings and genres.',
  },
  {
    to: '/favorites',
    title: 'Favorites',
    description: 'Access your saved favorite shows in one convenient location.',
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-full items-center justify-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl pt-8 text-center sm:py-16">
          <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
            <span className="block font-bold text-zinc-800">Correcto</span>
            <span className="block font-light text-zinc-600">Frontend Assingment</span>
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-base text-zinc-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            I'm excited to be able to showcase my skills with a challenge similar to what my
            colleagues at your company might be doing every day—at least one of them in this case!
          </p>
        </div>

        <div className="grid max-w-7xl grid-cols-1 justify-center gap-4 py-12 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div key={index} className={styles.cardWrapper}>
              <Link to={card.to} className="flex flex-1">
                <aside className={styles.card}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.description}</p>
                </aside>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
