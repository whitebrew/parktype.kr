import { css } from '@emotion/react'
import React from 'react'

const Paragraph = ({description, available, productionPeriod, glyphset}:{description: string, available:string, productionPeriod:string, glyphset:string}) => {
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
      <p className='font-desc'>{description}</p>
      <div className='font-info'>
        <p>Available: <span>{available}</span></p>
        <p>Years of Production: <span>{productionPeriod}</span></p>
        <p>Glyphset: <span>{glyphset}</span></p>
      </div>
    </div>
  )
}

export default Paragraph
