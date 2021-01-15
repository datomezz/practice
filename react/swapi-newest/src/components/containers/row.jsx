const Row = ({left, right}) => {
  return (
    <div className="row justify-content-between mb-5">
      {left}
      {right}
    </div>
  )
}

export default Row;