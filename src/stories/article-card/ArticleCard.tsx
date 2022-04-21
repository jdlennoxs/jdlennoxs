import Link from '@/components/Link'
import { Card } from '../card/Card'
import { ResponsiveImage } from '../responsive-image/responsive-image'

interface ArticleCardProps {
  title: string
  href: string
  imgSrc: string
}

export const ArticleCard = ({ title, href, imgSrc }: ArticleCardProps) => {
  return (
    <Card rounded>
      <Link href={href} aria-label={`Link to ${title}`}>
        {imgSrc ? <ResponsiveImage alt={title} src={imgSrc} /> : null}
        <div>
          <blockquote className="p-4 text-center leading-5">
            <h4 className="font-bold inline text-md text-dark">{title}</h4>
          </blockquote>
        </div>
      </Link>
    </Card>
  )
}
