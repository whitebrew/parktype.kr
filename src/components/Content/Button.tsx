import { css } from "@emotion/react"

const Button = () => {

  const buttonStyle = css`
    border: 1px solid #5c5c5c;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 4rem;
    text-align: center;
    padding: 1rem 0 1rem 0;
    color: #ffffff;

  `
  return (
    <button css={buttonStyle}>TRY/BUY BOLIVIA</button>
  )
}

export default Button