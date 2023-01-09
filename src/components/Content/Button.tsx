import { css } from "@emotion/react"

const Button = ({link}: {link: string}) => {

  const buttonStyle = css`
    display: block;
    border: 1px solid #5c5c5c;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 4rem;
    text-align: center;
    padding: 1rem 0 1rem 0;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      color: #0051ff;
    }
  `

  return (
    <a target="_blank" href={link} css={buttonStyle}>DOWN</a>
  )
}

export default Button

