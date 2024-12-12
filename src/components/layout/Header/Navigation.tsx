import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-10 text-sm text-neutral-400 font-medium">
      <Link href="/" className="hover:text-[#FF0080] transition-colors">
        Products
      </Link>
      <Link href="/" className="hover:text-[#FF0080] transition-colors">
        Marketplace
      </Link>
      <Link href="/" className="hover:text-[#FF0080] transition-colors">
        Stats
      </Link>
      <Link href="/" className="hover:text-[#FF0080] transition-colors">
        Pricing
      </Link>
      <Link href="/" className="hover:text-[#FF0080] transition-colors">
        Communities
      </Link>
    </nav>
  )
} 