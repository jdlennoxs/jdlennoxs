import Link from '@/components/Link'
import { Card } from '../card/Card'
import Tag from '@/components/Tag'
import { ResponsiveImage } from '../responsive-image/responsive-image'

interface ReadingTime {
  text: string
}

interface BlogCardProps {
  title: string
  summary: string
  readingTime: ReadingTime
  href: string
  imgSrc: string
  tags: string[]
}

export const BlogCard = ({ title, summary, readingTime, href, imgSrc, tags }: BlogCardProps) => {
  return (
    <Card rounded>
      <Link href={href} aria-label={`Link to ${title}`}>
        {imgSrc ? <ResponsiveImage alt={title} src={imgSrc} /> : null}
        <div className=" sm:px-6 px-4 flex flex-col space-y-3 divide-y">
          <blockquote className="h-32 grow">
            <span className="inline tracking-tight text-xs">
              <Tag text={tags ? tags[0] : ''} />
            </span>
            <h4 className="font-serif mt-2 mb-2 font-bold text-xl tracking-tight text-dark">
              {title}
            </h4>

            {/* <p className=' mt-2 leading-5'>{summary}</p> */}
          </blockquote>

          {/* <p className='shrink'>{readingTime.text}</p> */}
        </div>
      </Link>
    </Card>
  )
}
