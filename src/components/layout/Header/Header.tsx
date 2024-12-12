import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'
import UserMenu from './UserMenu'

export default function Header() {
  return (
    <header className="border-b border-neutral-800 w-full">
      <div className="mx-8 py-[10px] flex items-center justify-between">
        <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center">
                <Image 
                    src="/images/amboss-logo.png"
                    alt="Logo"
                    width={136}
                    height={18}
                />
            </Link>
            
            <Navigation />
        </div>
        
        <UserMenu />
      </div>
    </header>
  )
} 