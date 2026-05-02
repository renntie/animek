import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 animate-fade-in">
      {/* Glowing 404 */}
      <div className="relative mb-6">
        <p className="text-[10rem] font-black leading-none text-gradient select-none opacity-20 absolute inset-0 blur-2xl">
          404
        </p>
        <p className="text-[8rem] font-black leading-none text-gradient select-none relative">
          404
        </p>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Halaman Tidak Ditemukan</h1>
        <p className="text-gray-500 text-sm max-w-sm">
          Sepertinya anime yang kamu cari telah pergi ke isekai lain. Coba cari dari beranda.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2.5 bg-darkCard border border-white/10 text-gray-300 text-sm font-medium rounded-xl hover:border-purple-600/50 hover:text-white transition-all"
        >
          Kembali
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-5 py-2.5 bg-purple-700 hover:bg-purple-600 text-white text-sm font-medium rounded-xl transition-colors purple-glow"
        >
          Ke Beranda
        </button>
      </div>

      {/* Decorative */}
      <div className="mt-16 flex flex-col items-center gap-2 text-gray-700">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21,15 16,10 5,21" />
        </svg>
        <p className="text-xs">Animek — Streaming Anime Sub Indo</p>
      </div>
    </div>
  )
}
