import Tag from '@/components/Tag'
import { ResponsiveImage } from '../responsive-image/responsive-image'
import formatDate from '@/lib/utils/formatDate'

interface ArticleHeroProps {
  title: string
  imgSrc?: string
  tags: string
  lastmod: string
  summary: string
}

export const ArticleHero = ({ title, imgSrc, tags, lastmod }: ArticleHeroProps) => {
  return (
    <div className="flex">
      <div className="full-width">
        <div className="p-8 grid lg:grid-cols-2 gap-x-8 gap-y-4 max-w-7xl mx-auto">
          {imgSrc ? <ResponsiveImage alt={title} src={imgSrc} aspectRatio={1} /> : null}
          <blockquote className="p-8  flex flex-col text-center justify-center">
            <Tag text={tags ? tags[0] : ''} />
            <h1 className="max-w-md mx-auto font-serif font-bold text-3xl text-dark pt-6">
              {title}
            </h1>
            <time>{formatDate(lastmod)}</time>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
