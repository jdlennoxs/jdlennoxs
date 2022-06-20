import Image from 'next/image'
import useDimensions from 'react-cool-dimensions'

interface ResponsiveImageProps {
  alt: string
  src: string
  aspectRatio?: number
}

export const ResponsiveImage = ({ aspectRatio = 9 / 16, alt, ...props }: ResponsiveImageProps) => {
  const { observe, width } = useDimensions<HTMLDivElement | null>()
  return (
    <div className="max-height-container" ref={observe}>
      <Image
        {...props}
        alt={alt}
        layout="responsive"
        width={width}
        height={width * aspectRatio}
        objectFit="cover"
      />
    </div>
  )
}
