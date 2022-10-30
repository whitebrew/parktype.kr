import React from 'react'
import Button from './Button'
import ImageSlider from './ImageSlider'
import Paragraph from './Paragraph'
import Table from './Table'
import Title from './Title'

const Content = () => {
  return (
    <>
      <div>
        <Title />
        <Paragraph />
        <Table />
        <Button />
      </div>
      <div>
        <ImageSlider />
      </div>
    </>
  )
}

export default Content
