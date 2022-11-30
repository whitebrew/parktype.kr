import { css } from "@emotion/react"
import styled from "@emotion/styled"
import LinkButton from "./LinkButton"
import Introduction from "./Introduction"
import Logo from "./Logo"
import Title from "components/Content/Title"
import { theme } from "components/Common/theme"

const Header = () => {

  return (
    <header css={headerStyle}>
      <div className="headerInfo">
        <Logo/>
        <Introduction/>
      </div>
      <ButtonGroup>
        <LinkButton text="Contact"/>
        <LinkButton text="Instagram"/>
      </ButtonGroup>
      <StyleTheme>
        <Title text='Page Display' align="center"/>
        <ButtonGroup>
          <LinkButton text="White"/>
          <LinkButton text="Black"/>
          <LinkButton text="Cream"/>
          <LinkButton text="Neon"/>
        </ButtonGroup>
      </StyleTheme>
    </header>
  )
} 

export default Header

const headerStyle = css`
  color: ${theme.colors.black.text};
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.04rem;
  padding: 0.5rem;
  height: 100vh;
  width: 18%;
  position: fixed;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    background: ${theme.colors.black.bg};
    font-size: 13px;
    .headerInfo {
      display: flex;
    }
  }
`

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  
`

const StyleTheme = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0.5rem;
  width: calc(100% - 0.5rem);
  @media (max-width: 768px) {
    display: none;
  }
`