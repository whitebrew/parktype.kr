import { css } from "@emotion/react"
import Introduction from "./Introduction"
import Logo from "./Logo"

const Header = () => {

  const headerStyle = css`
    color: #ffffff;
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 0.04rem;
    padding: 0.5rem;
  `

  return (
    <header css={headerStyle}>
      <Logo/>
      <Introduction/>
    </header>
  )
} 

export default Header