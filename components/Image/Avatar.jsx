import Image from 'next/image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        height={48}
        width={48}
        className="w-12 h-12 rounded-full"
        alt={name}
      />
      <div className="text-xl font-bold ml-4">{name}</div>
    </div>
  )
}
