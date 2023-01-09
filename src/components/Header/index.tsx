import { css } from "@emotion/react"
import styled from "@emotion/styled"
import LinkButton from "./LinkButton"
import Introduction from "./Introduction"
import Logo from "./Logo"
import Title from "components/Content/Title"
import { ThemeType } from "types/ContentItem.types"

const Header = ({onClick}: {onClick: (value : ThemeType['currentThemeTitle']) => void}) => {

  const headerStyle = css`
    color: #ffffff;
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 0.04rem;
    padding: 0.5rem;
    height: 100vh;
    width: 18%;
    position: fixed;
    box-sizing: border-box;
    mix-blend-mode: difference;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      position: relative;
      font-size: 13px;
      .headerInfo {
        display: flex;
      }
    }
  `

  return (
    <header css={headerStyle}>
      <div className="headerInfo">
        <Logo/>
        <Introduction/>
      </div>
      <ButtonGroup>
        <LinkButton text="Contact" link="mailto:ppparktype@gmail.com" />
        <LinkButton text="Instagram" link="https://www.instagram.com/parktype" />
      </ButtonGroup>
      <StyleTheme>
        <Title text='Page Display' align="center"/>
        <ButtonGroup>
          <LinkButton text="White" link="#" onClick={onClick} />
          <LinkButton text="Black" link="#" onClick={onClick} />
          <LinkButton text="Cream" link="#" onClick={onClick} />
          <LinkButton text="Neon" link="#" onClick={onClick} />
        </ButtonGroup>
      </StyleTheme>
    </header>
  )
} 

export default Header



const ButtonGroup = styled.div`
  display: flex;
  margin-top: 1rem;
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