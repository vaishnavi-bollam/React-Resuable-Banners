// Write your code here.

const BannerCards = props => {
  const {BannerCard, uniqueKey} = props
  const {headerText, description, className} = BannerCard
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </li>
  )
}

export default BannerCards
