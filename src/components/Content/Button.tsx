import { css } from "@emotion/react"
import { Link } from "gatsby"

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
      color: #0051FF;
    }

  `
  return (
    <Link to={link} css={buttonStyle}>TRY / BUY BOLIVIA</Link>
  )
}

export default Button