import { css } from "@emotion/react"
import { theme } from "components/Common/theme"

type ButtonProps = {
  text: string
}

const LinkButton = ({text}: ButtonProps) => {

  const buttonStyle = css`
    border-top: 1px solid ${theme.colors.black.border};
    color: ${theme.colors.black.text};
    width: calc(100%/2 - 0.3rem);
    padding: 0.5rem 0;
    text-align: center;

  `

  return (
    <a href="/" css={buttonStyle}>{text}</a>
  )
}

export default LinkButton