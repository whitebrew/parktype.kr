import { css } from '@emotion/react'

const Title = ({ text, align }: { text: string; align: string }) => {
  const titleStyle = css`
    text-align: ${align};
    font-size: 2rem;
    font-weight: 500;

    @media (max-width: 1140px) and (min-width: 769px) {
      font-size: 1.6rem;
    }
  `

  return <h2 css={titleStyle}>{text}</h2>
}

export default Title
