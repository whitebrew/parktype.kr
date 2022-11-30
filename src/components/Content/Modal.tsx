import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";

type Props = {
  data:  {
    childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
    };
  }[]
  visible: boolean
  onClose: () => void
}

const Modal = ({ data, visible, onClose }: Props) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = visible ? (
    <div css={modalStyle} tabIndex={-1}>
      <div css={swiperWrapper}>
        <div className="swiper-container">
          <Swiper
            loop={true}
            onSwiper={setSwiper}
          >
              { data.map((img, idx) => (
                <SwiperSlide
                  key={idx}
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
            <img src="../../arrow-left.png" alt="prev" />
          </button>
          <button
            className="btn_slider next"
            onClick={() => {
              swiper?.slideNext();
            }}
          >
            <img src="../../arrow-right.png" alt="next" />
          </button>
        </div>
        </div>
      </div>
      <div css={closeBtnStyle} onClick={onClose}>
        <img src="../../close.png" alt="close" />
      </div>
    </div>
  ) : null

  if (isBrowser) {
    const modalElement = document.getElementById('modal-root') as HTMLElement;
    return ReactDOM.createPortal(modalContent, modalElement);
  }

  return null;
};

export default Modal;

const Image = styled(GatsbyImage)`
  height: 100%;
`

const modalStyle = css`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`

const swiperWrapper = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 100%;
  padding: 0.5rem;

  .swiper-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .swiper {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
  }


  .btn_slider {
    position: fixed;
    top: 50%;
    z-index: 100;
    transform: translateY(-50%);
    cursor: pointer;
    height: 100%;
    &.prev {
      left: -50px;
    }
    &.next {
      right: -50px;
    }
  }

`

const closeBtnStyle = css`
  position: fixed;
  right: 20px;
  top: 20px;
`