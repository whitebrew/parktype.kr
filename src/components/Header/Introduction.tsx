import { css } from "@emotion/react"

const Introduction = () => {
  return (
    <p css={introductionStyle}>
      My practice is focused on typographic systems but includes custom
      typefaces, letterings, graphic design and art direction. Most of my work
      is derived from historical models in order to re-contextualize their
      function in a contemporary setting.
    </p>
  )
}

export default Introduction

const introductionStyle = css`
  @media (max-width: 768px) {
    width: 50%;
  }
`