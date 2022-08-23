export default function PageTitle({ children }) {
  return (
    <h1
      className="text-3xl md:text-4xl
      font-semibold font-sans
    leading-9 sm:leading-10 md:leading-14
    tracking-wide 
    text-base dark:text-gray-100"
    >
      {children}
    </h1>
  )
}
