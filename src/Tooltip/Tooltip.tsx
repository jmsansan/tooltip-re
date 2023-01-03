import { ReactNode } from 'react'
import './Tooltip.css'

interface TooltipProps {
  children: ReactNode,
  props: object
}

const Tooltip = ({children, ...props}: TooltipProps) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export default Tooltip
