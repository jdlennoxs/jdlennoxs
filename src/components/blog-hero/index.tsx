import Link from '@/components/Link'
import { Card } from '../card/Card'
import Tag from '@/components/Tag'
import { ResponsiveImage } from '../responsive-image/responsive-image'

interface ReadingTime {
  text: string
}

interface BlogHeroProps {
  title: string
  summary: string
  readingTime: ReadingTime
  href: string
  imgSrc: string
  tags: string[]
}

export const BlogHero = ({ title, summary, readingTime, href, imgSrc, tags }: BlogHeroProps) => {
  return (
    <Card dark>
      <Link href={href} aria-label={`Link to ${title}`}>
        <div className="flex flex-col space-y-4 py-4">
          <div>
            {imgSrc ? <ResponsiveImage alt={title} src={imgSrc} /> : null}
            <blockquote className="sm:px-6 px-4">
              <span className="inline tracking-tight">
                <Tag text={tags[0] || ''} />
              </span>
              <h4 className="font-serif mt-4 mb-4 font-bold text-2xl tracking-tight">{title}</h4>
              <p className=" mb-4 ">{summary}</p>
            </blockquote>
            {/* <p>{readingTime.text}</p> */}
          </div>
        </div>
      </Link>
    </Card>
  )
}
