import { ReactChild } from 'react'

interface CardProps {
  /**
   * Is this the principal call to action on the page?
   */
  rounded?: boolean
  /**
   * What background color to use
   */
  border?: boolean
  dark?: boolean
  /**
   * The child component to be rendered
   */
  children: ReactChild
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  rounded = false,
  border = false,
  dark = false,
  className,
  children,
}: CardProps) => {
  const borderStyles = border && 'border-2 border-gray-200 border-opacity-60'
  const roundedStyles = rounded && 'rounded-md'
  const darkStyles = dark ? 'bg-base text-white' : 'bg-white'
  return (
    <div
      className={`overflow-hidden md:m-4 ${className} ${borderStyles} ${roundedStyles} ${darkStyles}`}
    >
      {children}
    </div>
  )
}
