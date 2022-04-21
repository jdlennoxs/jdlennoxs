import Link from '@/components/Link'
import { Card } from '../card/Card'
import { ResponsiveImage } from '../responsive-image/responsive-image'

interface BlogHeroProps {
  title: string
  href: string
  imgSrc: string
  summary: string
}

export const BlogHero = ({ title, href, imgSrc, summary }: BlogHeroProps) => {
  return (
    <Card rounded>
      <Link href={href} aria-label={`Link to ${title}`}>
        {imgSrc ? <ResponsiveImage alt={title} src={imgSrc} /> : null}
        <div>
          <blockquote className="py-6 text-center grid gap-y-4 grid-rows-2 ">
            <h4 className="font-serif font-bold text-3xl text-dark">{title}</h4>
            <p className="font-mono">{summary}</p>
          </blockquote>
        </div>
      </Link>
    </Card>
  )
}
