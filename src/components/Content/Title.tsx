import { css } from "@emotion/react"

const Title = ({text, align}:{text:string, align:string}) => {
  const titleStyle = css`
    text-align: ${align};
    font-size: 2rem;
  `

  return <h2 css={titleStyle}>{text}</h2>
}

export default Title