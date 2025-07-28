import React from 'react'

export default function TailButtonLine({caption, color, onHandle}) {
  
  const btcolor = {
    "blue" : "bg-blue-200",
    "orange" : "bg-orange-200",
    "lime" : "bg-lime-200",
  }

  const bgHover = {
    "blue" : "hover:bg-blue-600",
    "orange" : "hover:bg-orange-600",
    "lime" : "hover:bg-lime-600"
  }

  return (
    <button className={`${btcolor[color]}`} onClick={onHandle}>{caption}</button>
  )
}
