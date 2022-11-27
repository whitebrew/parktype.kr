import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { css } from "@emotion/react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import SwiperCore, { Autoplay } from "swiper";
import { useState } from "react";

const ImageSlider = ({data, onClick}: {data:{childImageSharp: {gatsbyImageData: IGatsbyImageData}}[], onClick:() => void}) => {
  const [swiper, setSwiper] = useState<SwiperCore>();

  const handleSwiperClick = (e:any) => {
    console.log('click', e);
    
  }

  return (
    <div css={swiperWrapper}>
      <div className="swiper-container">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onSwiper={setSwiper}
        >
            { data.map((img, idx) => (
              <SwiperSlide
                key={idx}
                onMouseEnter={() => {
                  swiper?.autoplay.stop();
                }}
                onMouseLeave={() => {
                  swiper?.autoplay.start();
                }}
                onClick={(e) => {
                  handleSwiperClick(e)
                  onClick()
                }}
              >
                <Image image={img.childImageSharp.gatsbyImageData} alt={`image${idx}`}/>
              </SwiperSlide>
            ))
            }
        </Swiper>
        <div className="slider_ctrl">
          <button
            className="btn_slider prev"
            onClick={() => {
              swiper?.slidePrev();
            }}
          >
          </button>
          <button
            className="btn_slider next"
            onClick={() => {
              swiper?.slideNext();
            }}
          >
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider

const Image = styled(GatsbyImage)`
  width: 100%;
`

const swiperWrapper = css`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  padding: 0.5rem;

  .swiper-container {
    position: relative;
    cursor: url('../../plus.png'), auto;
  }

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #000;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .btn_slider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30%;
    z-index: 10;
    &.prev {
      left: 0;
      cursor: url('../../arrow-left.png'), auto;
    }
    &.next {
      right: 0;
      cursor: url('../../arrow-right.png'), auto;
    }
  }
`