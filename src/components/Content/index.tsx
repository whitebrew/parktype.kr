import { css } from '@emotion/react'
import { theme } from 'components/Common/theme'
import { useState } from 'react'
import { ContentFrontmatterType } from 'types/ContentItem.types'
import Button from './Button'
import ImageSlider from './ImageSlider'
import Modal from './Modal'
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

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSwiperClick = () => {
    setIsModalOpen(true);
  }

  return (
    <div css={contentStyle}>
      <div className='contentInfo'>
        <Title text={title} align='center'/>
        <Paragraph description={description} available={available} productionPeriod={productionPeriod} glyphset={glyphset}/>
        <Table data={fontStyle} />
        <Button link={link}/>
      </div>
      <div>
        <ImageSlider data={images} onClick={handleSwiperClick}/>
      </div>
      <Modal
        data={images}
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Content

const contentStyle = css`
  color: ${theme.colors.black.text};
  position: relative;
  margin-top: 40px;
  font-size: 14px;

  &:first-of-type {
    margin-top: 0;
  }

  .contentInfo {
    width: 25%;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    .contentInfo{
      width: 100%;
    }
  }

`