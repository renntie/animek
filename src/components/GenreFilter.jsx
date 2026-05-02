const GENRES = [
  { label: 'Semua', slug: '' },
  { label: 'Aksi', slug: 'aksi' },
  { label: 'Komedi', slug: 'komedi' },
  { label: 'Romantis', slug: 'romantis' },
  { label: 'Fantasi', slug: 'fantasi' },
  { label: 'Horror', slug: 'horror' },
  { label: 'Slice of Life', slug: 'slice-of-life' },
  { label: 'Sport', slug: 'sport' },
]

export default function GenreFilter({ activeGenre, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {GENRES.map(genre => (
        <button
          key={genre.slug}
          onClick={() => onChange(genre.slug)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            activeGenre === genre.slug
              ? 'bg-purple-600 text-white purple-glow'
              : 'bg-darkCard text-gray-400 border border-white/10 hover:border-purple-600/50 hover:text-white'
          }`}
        >
          {genre.label}
        </button>
      ))}
    </div>
  )
}

export { GENRES }
