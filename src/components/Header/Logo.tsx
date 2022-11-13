import { css } from '@emotion/react'
import { Link } from 'gatsby'

const Logo = () => {
  const logoStyle = css`
    font-size: 2.25rem;
    margin-bottom: 2rem;
    line-height: 1;
  `

  return ( 
    <h1 css={logoStyle}>
      <Link to="/">David Einwaller<br/>(Graphic &)<br/>Type Design</Link>
    </h1>
  )
}

export default Logo