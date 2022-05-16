import { Spacing } from '@ds.e/foundation'
import React from 'react'


interface MarginProps{
space? : keyof typeof Spacing,
children?: React.ReactNode,
left?: boolean,
right?: boolean,
top?: boolean,
bottom?: boolean
}
const Margin:React.FC<MarginProps> = ({space='xxs', children, left, right, top, bottom}) => {
  let className = ``

  if (! left && !right && !top && !bottom){
    className = `dse-margin-${space}`
  }
  if(left){
    className = `${className} dse-margin-left-${space}`
  }
  if(right){
    className = `${className} dse-margin-right-${space}`
  }
  if(top){
    className = `${className} dse-margin-top-${space}`
  }
  if(bottom){
    className = `${className} dse-margin-bottom-${space}`
  }
  return (
    <div className={className}>{children}</div>
  )
}

export default Margin