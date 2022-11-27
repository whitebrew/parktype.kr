import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ContentFrontmatterType } from 'types/ContentItem.types'
import Button from './Button'
import ImageSlider from './ImageSlider'
import Paragraph from './Paragraph'
import Table from './Table'
import Title from './Title'

const Content = ({
  title,
  date,
  description,
  available,
  productionPeriod,
  glyphset,
  fontStyle,
  link,
  images,
}:ContentFrontmatterType) => {
  const contentStyle = css`
    color: #ffffff;
    min-height: 80vh;
    position: relative;
    margin-top: 40px;
    &:first-of-type {
      margin-top: 0;
    }
    .contentInfo {
      width: 25%;
      padding: 0.5rem;
    }
  `

  return (
    <div css={contentStyle}>
      <div className='contentInfo'>
        <Title text={title} align='center'/>
        <Paragraph description={description} available={available} productionPeriod={productionPeriod} glyphset={glyphset}/>
        <Table data={fontStyle} />
        <Button link={link}/>
      </div>
      <div>
        <ImageSlider data={images}/>
      </div>
    </div>
  )
}

export default Content


