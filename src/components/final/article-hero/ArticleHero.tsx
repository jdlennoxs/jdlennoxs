import { ResponsiveImage } from '../responsive-image/responsive-image'

interface ArticleHeroProps {
  title: string
  imgSrc?: string
  summary: string
}

export const ArticleHero = ({ title, imgSrc, summary }: ArticleHeroProps) => {
  return (
    <div className="flex">
      <div className="full-width">
        <div className="p-6 grid md:grid-cols-2 gap-y-4">
          {imgSrc ? <ResponsiveImage alt={title} src={imgSrc} aspectRatio={6 / 5} /> : null}
          <blockquote className="p-6 order-first flex flex-col text-center justify-center">
            <h1 className="font-serif font-bold text-2xl lg:text-3xl text-dark">{title}</h1>
            <p>{summary}</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
