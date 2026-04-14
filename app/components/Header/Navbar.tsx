import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 max-h-20 
    bg-linear-45 from-black-light to-black-lighter">
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
        <Link className="hover:bg-gray-background hover:rounded-2xl hover:shadow-md shadow-green-shadow py-4 px-4" href="/games">Mes jeux</Link>
        <Link className="hover:bg-gray-background hover:rounded-2xl hover:shadow-md shadow-green-shadow py-4 px-4" href="/phasmophobia">Phasmophobia</Link>
        <Link className="hover:bg-gray-background hover:rounded-2xl hover:shadow-md shadow-green-shadow py-4 px-4" href="/challenge">Mes défis</Link>
      </ul>
    </nav>
  )
}