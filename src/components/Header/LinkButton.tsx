import { css } from "@emotion/react"

type ButtonProps = {
  text: string
}

const LinkButton = ({text}: ButtonProps) => {

  const buttonStyle = css`
    border-top: 1px solid #ffffff;
    color: #ffffff;
    width: 47%;
    margin-right: 0.3rem;
    padding-top: 0.5rem;
    text-align: center;
  `

  return (
    <a href="/" css={buttonStyle}>{text}</a>
  )
}

export default LinkButton