import { css } from "@emotion/react"
import { theme } from "components/Common/theme"
import { ThemeType } from "types/ContentItem.types"

type ButtonProps = {
  text: string
  link: string
  onClick?: (value : ThemeType['currentThemeTitle']) => void
}

const LinkButton = ({text, link, onClick, currentThemeTitle}: ButtonProps & ThemeType) => {
  const currentTheme = theme.colors[currentThemeTitle];

  const handleThemeButton = (e:any) => {
    onClick && onClick(e.target.text)
  }

  const buttonStyle = css`
    border-top: 1px solid ${currentTheme.border};
    color: ${currentTheme.text};
    width: calc(100%/2 - 0.3rem);
    padding: 0.5rem 0;
    text-align: center;
    font-weight: 400;
    &:hover {
      border-top: 1px solid ${currentTheme.hover};
    }
  `

  return (
    <a href={link} css={buttonStyle} onClick={handleThemeButton}>{text}</a>
  )
}

export default LinkButton