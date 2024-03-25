import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-16">
      <Link href="/">
        <span className="hover:underline">Blog</span>
      </Link>
      .
    </h2>
  )
}
