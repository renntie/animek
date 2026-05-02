import { useNavigate } from 'react-router-dom'
import { IconPlay } from '../assets/icons'

export default function AnimeCard({ anime }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (anime?.url || anime?.link) {
      navigate(`/detail?url=${encodeURIComponent(anime.url || anime.link)}`)
    }
  }

  // Field mapping sesuai response API aktual
  const title = anime?.title || anime?.judul || 'Unknown'
  const poster = anime?.thumbnail || anime?.poster || anime?.image
  const episode = anime?.episode || anime?.eps || anime?.latest_episode
  const type = anime?.type

  return (
    <div
      onClick={handleClick}
      className="group relative bg-darkCard rounded-xl overflow-hidden cursor-pointer card-hover border border-white/5"
    >
      {/* Poster */}
      <div className="relative aspect-[3/4] overflow-hidden bg-darkCard">
        {poster ? (
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        {/* Fallback */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-purple-900/20"
          style={{ display: poster ? 'none' : 'flex' }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-700">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21,15 16,10 5,21" />
          </svg>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <div className="w-12 h-12 bg-purple-600/90 rounded-full flex items-center justify-center purple-glow">
            <IconPlay size={20} className="ml-1" />
          </div>
        </div>

        {/* Episode Badge */}
        {episode && (
          <div className="absolute top-2 left-2 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold px-2 py-0.5 rounded-md">
            {episode}
          </div>
        )}

        {/* Badge tipe (TV/Movie) — pojok kanan atas */}
        {type && (
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-gray-300 text-xs font-medium px-2 py-0.5 rounded-md">
            {type}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white line-clamp-2 leading-tight group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  )
}
