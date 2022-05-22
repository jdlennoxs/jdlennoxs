interface TimelineItems {
  date: string
  role: string
  description: string
}

interface TimelineProps {
  history: TimelineItems[]
}

/**
 * Primary UI component for user interaction
 */
export const Timeline = ({ history }: TimelineProps) => {
  return (
    <ul>
      {history.map((item, index) => (
        <li
          key={`timeline${index}`}
          className='relative ml-2.5 !my-0 pl-5 border-l border-primary pb-6
            before:content-[""] before:h-[15px] before:w-[15px] before:bg-light before:rounded-full 
            before:absolute before:left-[-.4rem] before:border before:border-primary'
        >
          <div className="leading-[15px] mb-4 pt-0.5">{item.date}</div>
          <div className="font-semibold">{item.role}</div>
          <div>{item.description}</div>
        </li>
      ))}
    </ul>
  )
}
