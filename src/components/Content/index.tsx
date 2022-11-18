import { css } from '@emotion/react'
import Button from './Button'
import ImageSlider from './ImageSlider'
import Paragraph from './Paragraph'
import Table from './Table'
import Title from './Title'

const Content = () => {
  const contentStyle = css`
    color: #ffffff;
    position: relative;
    .contentInfo {
      width: 25%;
      padding: 0.5rem;
    }
  `

  return (
    <div css={contentStyle}>
      <div className='contentInfo'>
        <Title text='BOLIVIA' align='center'/>
        <Paragraph />
        <Table />
        <Button />
      </div>
      <div>
        <ImageSlider />
      </div>
    </div>
  )
}

export default Content
