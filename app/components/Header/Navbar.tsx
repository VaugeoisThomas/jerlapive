import Search from './Search'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center p-2 max-h-96 
    bg-linear-45 from-black-light to-black-lighter gap-5">
      <Link href="/">
        <Image
          src="/jerlapive.png"
          alt="Logo"
          loading="eager"
          width={66}
          height={66}
          className='rounded-full flex-none'
        />
      </Link>
      <ul className="flex items-center gap-4 flex-1">
        <Link href="/games">Mes jeux</Link>
        <Link href="/phasmophobia">Phasmophobia</Link>
        <Link href="/challenge">Mes défis</Link>
      </ul>
      <Search />
    </nav>
  )
}