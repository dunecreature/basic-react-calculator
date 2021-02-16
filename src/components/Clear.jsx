import React from "react"
import "./Clear.css"

const Clear = (props) => {
  return <div onClick={props.onClick}className="clear-btn">Clear</div>
}

export default Clear