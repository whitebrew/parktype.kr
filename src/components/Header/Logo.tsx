import { css } from '@emotion/react'
import { Link } from 'gatsby'

const Logo = () => {
  const logoStyle = css`
    font-size: 2.25rem;
    margin-bottom: 2rem;
    line-height: 1;
    font-weight: bold;

    @media (max-width: 768px) {
      width: 50%;
      font-size: 170%;
    }
  `

  return ( 
    <h1 css={logoStyle}>
      <Link to="/">PARKTYPE</Link>
    </h1>
  )
}

export default Logo