export interface ArticleMetaProps {
  summary: string
  readingTime: any
  lastmod: Date
  authorDetails: {
    name: string
    avatar: string
  }[]
}

export const ArticleMeta = ({ summary, readingTime }: ArticleMetaProps) => {
  return (
    <div className="text-center font-sans py-4">
      <p>{summary}</p>
      <span>
        <strong>{readingTime && readingTime.text}</strong>
      </span>
    </div>
  )
}
