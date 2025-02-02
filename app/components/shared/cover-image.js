import cn from "classnames"
import Link from "next/link"
import Image from "next/image"
import { base64IMG } from "../misc/base64-image"

export default function CoverImage({ title, url, slug, width, height }) {
  const image = (
    <Image
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm", {
        "hover:shadow-md transition-shadow duration-200": slug,
      })}
      layout="responsive"
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={base64IMG}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link legacyBehavior href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
