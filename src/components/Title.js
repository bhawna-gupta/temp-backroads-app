const Title = ({text, subText}) => {
  return (
    <div className="section-title">
      <h2>
        {text} <span>{subText}</span>
      </h2>
    </div>
  )
}
export default Title