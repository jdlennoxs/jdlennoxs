export default function PageTitle({ children }) {
  return (
    <h1
      className="text-3xl md:text-4xl
      font-semibold
    leading-9 sm:leading-10 md:leading-14
    tracking-wider 
    text-gray-800 dark:text-gray-100"
    >
      {children}
    </h1>
  )
}
