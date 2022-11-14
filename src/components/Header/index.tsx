import { css } from "@emotion/react"
import styled from "@emotion/styled"
import LinkButton from "./LinkButton"
import Introduction from "./Introduction"
import Logo from "./Logo"

const Header = () => {

  const headerStyle = css`
    color: #ffffff;
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 0.04rem;
    padding: 0.5rem;
    height: 100vh;
    width: 18%;
    position: fixed;
  `

  return (
    <header css={headerStyle}>
      <Logo/>
      <Introduction/>
      <ButtonGroup>
        <LinkButton text="Contact"/>
        <LinkButton text="Instagram"/>
      </ButtonGroup>
    </header>
  )
} 

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
`

export default Header