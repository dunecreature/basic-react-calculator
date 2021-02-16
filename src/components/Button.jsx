import React from "react"
import "./Button.css"

const Button = (props) => {

  let className = "btn-box"
  if (isNaN(props.children)) {
    className += " symbol"
  }

  return <div onClick={() => props.onClick(props.children)} className={className}>{props.children}</div>
}

export default Button