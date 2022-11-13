import { css } from '@emotion/react'
import React from 'react'

const Paragraph = () => {
  const paragraphStyle = css`
    line-height: 1.3;
    .font-desc {
      margin-top: 20px;
      
    }
    .font-info {
      margin-top: 20px;
    }
  `
   
  return (
    <div css={paragraphStyle}>
      <p className='font-desc'>
        This typeface started as an interpretation of Albert Hollenstein’s
        famous «Brasilia» from 1958. A second version (G) with vertical
        terminals was drawn in order to let the modernistic feeling collide with
        a more humanistic expression. The untypical long tails of /f, /j, /r and
        /t are emphasized and accompanied with stylistic alternatives to give it
        a more contemporary feeling.
      </p>
      <div className='font-info'>
        <p>Available: <span>○</span></p>
        <p>Years of Production: <span>2017–2019</span></p>
        <p>Glyphset: <span>Latin Extended-A</span></p>
      </div>
    </div>
  )
}

export default Paragraph
