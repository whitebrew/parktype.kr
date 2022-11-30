import { css } from "@emotion/react"
import { theme } from "components/Common/theme"
import { ThemeType } from "types/ContentItem.types"

const Button = ({link, currentThemeTitle}: {link: string} & ThemeType) => {
  const currentTheme = theme.colors[currentThemeTitle];

  const buttonStyle = css`
    display: block;
    border: 1px solid ${currentTheme.border};
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 4rem;
    text-align: center;
    padding: 1rem 0 1rem 0;
    color: ${currentTheme.text};
    cursor: pointer;
    &:hover {
      color: ${currentTheme.active};
    }
  `

  return (
    <a href={link} css={buttonStyle}>TRY / BUY BOLIVIA</a>
  )
}

export default Button

