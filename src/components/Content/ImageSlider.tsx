import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { css } from "@emotion/react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "@emotion/styled";

const ImageSlider = ({data}: {data:{childImageSharp: {gatsbyImageData: IGatsbyImageData}}[]}) => {
  const swiperWrapper = css`
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 75%;
    padding: 0.5rem;

    .swiper {
      width: 100%;
      height: 500px;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #000;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `
  return (
    <div css={swiperWrapper}>
      <Swiper>
          { data.map((img, idx) => (
            <SwiperSlide>
              <Image image={img.childImageSharp.gatsbyImageData} alt={`image${idx}`} key={idx}/>
            </SwiperSlide>
          ))
          }
      </Swiper>
    </div>
  )
}

export default ImageSlider

const Image = styled(GatsbyImage)`
  width: 100%;
  border-radius: 10px 10px 0 0;
`