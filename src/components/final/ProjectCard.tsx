import Image from 'next/image'
import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
import CardWrapper from '@/components/final/CardWrapper'
import Tag from '@/components/Tag'

interface CardProps {
  title: any
  readingTime?: any
  lastmod?: any
  date?: any
  href: any
  imgSrc: any
  type?: any
  description?: any
}

const CoverImage = ({ href, title, imgSrc }) => (
  <div className="w-full border-b" style={{ fontSize: '0' }}>
    {href ? (
      <Image
        alt={title}
        src={imgSrc}
        layout="responsive"
        width={420}
        height={360}
        className="object-cover object-center"
      />
    ) : (
      <Image
        alt={title}
        src={imgSrc}
        width={420}
        height={360}
        className="object-cover object-center"
      />
    )}
  </div>
)

const ProjectCard = ({ title, href, imgSrc, type, summary }: CardProps) => {
  return (
    <div className=" min-h-[80px]">
      <Link href={href} aria-label={`Link to ${title}`}>
        {imgSrc ? <CoverImage title={title} imgSrc={imgSrc} href={href} /> : null}
        <div>
          <blockquote className=" bg-white p-4 ">
            <span>
              <h4 className="inline text-lg text-dark">{title}</h4>
              <p className="text-subtle"> {summary}</p>
            </span>
            {/* <div className='flex flex-col mt-8'>
                            <Tag text="tags" />
                        </div> */}
          </blockquote>
        </div>
      </Link>
    </div>
  )
}

export default CardWrapper(ProjectCard)
