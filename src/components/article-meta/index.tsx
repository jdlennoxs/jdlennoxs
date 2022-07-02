export interface ArticleMetaProps {
  summary: string
  readingTime: any
}

export const ArticleMeta = ({ summary, readingTime }: ArticleMetaProps) => {
  return (
    <div className="text-center font-sans py-4">
      <p>
        <strong>Summary: </strong>
        {summary}
      </p>
      <span>
        <strong>{readingTime && readingTime.text}</strong>
      </span>
    </div>
  )
}
