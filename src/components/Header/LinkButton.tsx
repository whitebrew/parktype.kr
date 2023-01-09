import { css } from "@emotion/react"
import { ThemeType } from "types/ContentItem.types"

type ButtonProps = {
  text: string
  link: string
  onClick?: (value : ThemeType['currentThemeTitle']) => void
}

const LinkButton = ({text, link, onClick}: ButtonProps) => {

  const handleThemeButton = (e:any) => {
    onClick && onClick(e.target.text)
  }

  const buttonStyle = css`
    border-top: 1px solid #5c5c5c;
    color: #ffffff;
    width: calc(100%/2 - 0.3rem);
    padding: 0.5rem 0;
    text-align: center;
    font-weight: 400;
    &:hover {
      border-top: 1px solid #ffffff};
    }
  `

  return (
    <a href={link} css={buttonStyle} onClick={handleThemeButton}>{text}</a>
  )
}

export default LinkButton