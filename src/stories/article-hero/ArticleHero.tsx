import { ResponsiveImage } from '../responsive-image/responsive-image'

interface ArticleHeroProps {
  title: string
  imgSrc?: string
  summary: string
}

export const ArticleHero = ({ title, imgSrc, summary }: ArticleHeroProps) => {
  return (
    <div className="pt-6 grid grid-rows-2 gap-y-4 xl:m-6">
      <div className="content-width">
        <blockquote className="py-4 md:p-6 text-center grid gap-y-4 grid-rows-2 ">
          <h1 className="font-serif font-bold text-3xl text-dark">{title}</h1>
          <p>{summary}</p>
        </blockquote>
      </div>
      {imgSrc ? <ResponsiveImage alt={title} src={imgSrc} aspectRatio={9 / 16} /> : null}
    </div>
  )
}
