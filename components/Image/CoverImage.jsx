import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({
  title,
  src,
  slug,
  height,
  width,
  coverImagePriority,
}) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={`shadow-sm w-full ${slug ? 'hover:shadow-md transition-shadow duration-200' : ''}`}
      width={width}
      height={height}
      priority={coverImagePriority ? coverImagePriority : false}
      blurDataURL={src}
      placeholder="blur"
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <span aria-label={title}>{image}</span>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
