import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="border border-rose-600 rounded-md py-1 px-2 mr-3 text-xs text-rose-600 hover:text-rose-700  hover:border-rose-700 dark:hover:text-primary-400 w-max">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
