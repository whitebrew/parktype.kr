import { css } from '@emotion/react'

const Paragraph = ({productionPeriod, format ,spec}:{productionPeriod:string, format:string[], spec:string[]}) => {
  const paragraphStyle = css`
    line-height: 1.3;
    .font-info {
      margin-top: 20px;
      word-break: break-word;
      p {
        display: flex;
        span {
          &:first-of-type {
            flex-shrink: 0;
            font-weight: bold;
            margin-right: 4px;
          }
        }
        &:first-of-type {
          span {
            flex-shrink: 1;
          }
        }
      }
    }
  `
   
  return (
    <div css={paragraphStyle}>
      <div className='font-info'>
        <p><span>Years of Production: </span><span>{productionPeriod}</span></p>
        <p>
          <span>Format: </span>
          <span>{format}</span>
        </p>
        <p>
          <span>Spec: </span>
          <span>{spec}</span>
        </p>
      </div>
    </div>
  )
}

export default Paragraph
