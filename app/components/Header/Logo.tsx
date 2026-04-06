import Image from "next/image"

export default function Logo () {
  return (
    <Image 
      src="/public/jerlapive_axelou.png" 
      alt="Logo"
      width={66}
      height={66}
    />
  )
}