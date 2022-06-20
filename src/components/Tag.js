import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="font-semibold text-blue-500 mr-2">{text.split(' ').join('-')}</a>
    </Link>
  )
}

export default Tag
