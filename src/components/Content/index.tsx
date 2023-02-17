import { css } from '@emotion/react'
import { useState } from 'react'
import { ContentFrontmatterType } from 'types/ContentItem.types'
import Button from './Button'
import ImageSlider from './ImageSlider'
import Modal from './Modal'
import Paragraph from './Paragraph'
import Table from './Table'
import Title from './Title'

type ContentProps = ContentFrontmatterType

const Content = ({
  title,
  order,
  productionPeriod,
  fontStyle,
  format,
  spec,
  link,
  images,
}: ContentProps) => {
  const contentStyle = css`
    color: #ffffff;
    position: relative;
    margin-top: 40px;
    font-size: 14px;
    mix-blend-mode: difference;

    &:first-of-type {
      margin-top: 0;
    }

    .contentInfo {
      width: 25%;
      min-height: 80vh;
      height: auto;
      padding: 0.5rem;
    }

    @media (max-width: 1140px) and (min-width: 769px) {
      font-size: 13px;
    }

    @media (max-width: 768px) {
      font-size: 13px;
      .contentInfo {
        width: 100%;
        min-height: auto;
      }
    }
  `

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [initialSlide, setInitialSlide] = useState<undefined | number>(
    undefined,
  )

  const handleSwiperClick = (idx: number) => {
    setInitialSlide(idx)
    setIsModalOpen(true)
  }

  return (
    <div css={contentStyle}>
      <div className="contentInfo">
        <Title text={title} align="center" />
        <Paragraph
          productionPeriod={productionPeriod}
          format={format}
          spec={spec}
        />
        <Table data={fontStyle} />
        <Button link={link} />
      </div>
      <div>
        <ImageSlider data={images} onClick={handleSwiperClick} />
      </div>
      <Modal
        data={images}
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialSlide={initialSlide}
      />
    </div>
  )
}

export default Content
