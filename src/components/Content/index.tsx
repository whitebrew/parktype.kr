import { css } from '@emotion/react'
import { theme } from 'components/Common/theme'
import { useState } from 'react'
import { ContentFrontmatterType, ThemeType } from 'types/ContentItem.types'
import Button from './Button'
import ImageSlider from './ImageSlider'
import Modal from './Modal'
import Paragraph from './Paragraph'
import Table from './Table'
import Title from './Title'

type ContentProps = ContentFrontmatterType & ThemeType

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
  currentThemeTitle
}:ContentProps) => {
  const currentTheme = theme.colors[currentThemeTitle];

  const contentStyle = css`
  color: ${currentTheme.text};
  position: relative;
  margin-top: 40px;
  font-size: 14px;
  mix-blend-mode: difference;

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

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSwiperClick = () => {
    setIsModalOpen(true);
  }

  return (
    <div css={contentStyle}>
      <div className='contentInfo'>
        <Title text={title} align='center'/>
        <Paragraph description={description} available={available} productionPeriod={productionPeriod} glyphset={glyphset}/>
        <Table data={fontStyle} currentThemeTitle={currentThemeTitle}/>
        <Button link={link} currentThemeTitle={currentThemeTitle}/>
      </div>
      <div>
        <ImageSlider data={images} currentThemeTitle={currentThemeTitle} onClick={handleSwiperClick}/>
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

