import { css } from "@emotion/react"
import { theme } from "components/Common/theme"

type ButtonProps = {
  text: string
}

const Button = ({text}: ButtonProps) => {

  const buttonStyle = css`
    border-top: 1px solid ${theme.colors.bg}
  `

  return (
    <button>{text}</button>
  )
}