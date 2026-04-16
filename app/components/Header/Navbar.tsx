import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

  return (
    <nav className="flex justify-between items-center p-2 max-h-20 
     bg-linear-45 from-black-light to-black-lighter shadow-md shadow-green-shadow">
      <Link href="/">
        <Image
          src="/jerlapive.png"
          alt="Logo"
          loading="eager"
          width={66}
          height={66}
          className='rounded-full'
        />
      </Link>
      <ul className="flex items-center gap-4 px-4">
        <a className="nav-link" href="/games">Mes jeux</a>
        <a className="nav-link" href="/phasmophobia">Phasmophobia</a>
        <a className="nav-link" href="/challenge">Mes défis</a>
      </ul>
    </nav>
  )
}