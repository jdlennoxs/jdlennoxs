const CardWrapper = (Card) => {
  const WrappedCard = ({ ...props }) => (
    <div className="rounded-md bg-white overflow-hidden border">
      <Card {...props} />
    </div>
  )

  return WrappedCard
}

export default CardWrapper
