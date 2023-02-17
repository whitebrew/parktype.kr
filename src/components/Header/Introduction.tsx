import { css } from '@emotion/react'

const Introduction = () => {
  const introductionStyle = css`
    font-weight: 400;
    @media (max-width: 1140px) and (min-width: 769px) {
      font-size: 13px;
    }
    @media (max-width: 768px) {
      width: 50%;
    }
    .sub-title {
      font-size: 1rem;
      font-weight: 500;
    }
  `
  return (
    <p css={introductionStyle}>
      <span className="sub-title">TYPEFACE BRANDING STUDIO</span>
      <br></br>
      <br></br>I enjoy making letters in any way. I try to keep the results of
      seeing, touching, and handling letters here. He learns calligraphy in his
      teens, touches fonts in his 20s, and now in his 30s, he is doing typeface
      branding. I hope that the talent you have can be developed and useful.
    </p>
  )
}

export default Introduction
