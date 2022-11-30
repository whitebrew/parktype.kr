import { css } from "@emotion/react"
import { theme } from "components/Common/theme"
import { Link } from "gatsby"

const Button = ({link}: {link: string}) => {

  return (
    <Link to={link} css={buttonStyle}>TRY / BUY BOLIVIA</Link>
  )
}

export default Button

const buttonStyle = css`
  display: block;
  border: 1px solid ${theme.colors.black.border};
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 4rem;
  text-align: center;
  padding: 1rem 0 1rem 0;
  color: ${theme.colors.black.text};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.black.active};
  }
`