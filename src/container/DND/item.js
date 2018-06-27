import React from 'react'

const Item = (props) => {
  return (
    <div className="item">
      <p>{props.item.value}</p>
    </div>
  )
}
export default Item;