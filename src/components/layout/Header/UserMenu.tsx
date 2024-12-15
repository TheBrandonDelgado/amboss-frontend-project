import Link from 'next/link'
import Image from 'next/image'

export default function UserMenu() {
  return (
    <div className="flex items-center gap-3">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-[280px] h-[36px] px-4 py-2 bg-transparent text-white placeholder-white text-sm border rounded-lg border-white/15 focus:outline-none"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Dashboard Button */}
      <Link 
        href="/" 
        className="w-[130px] h-[36px] flex items-center gap-2 px-4 py-2 bg-transparent rounded-lg text-sm text-white font-semibold border border-white/15 hover:bg-gray-700/50"
      >
        <Image src="/images/dashboard.png" alt="Dashboard" width={12} height={12} />
        <span>Dashboard</span>
      </Link>

      {/* Profile Menu */}
      <div className="relative h-[36px] w-[36px]">
        <button className="rounded-full overflow-hidden">
          <Image 
            src="/images/profile-photo.png" 
            alt="Profile"
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  )
} 