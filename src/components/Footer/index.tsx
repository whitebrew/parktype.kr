import { css } from "@emotion/react";

const Footer = () => {
  const footerStyle = css`
    color: #ffffff;
    position: relative;
    width: 75%;
    margin-left: 25%;
    margin-bottom: 4rem;
    mix-blend-mode: difference;
    
    h4 {
      padding: 1rem 0; 
      font-size: 14px;
      font-weight: bold;
    }
    p {
      font-size: 13px;
      line-height: 1.5;
      word-break: keep-all;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin: 4rem 0 0;
      padding: 0.5rem;
    }
  `
  return (
    <div css={footerStyle}>
      <h4>License</h4>
      <p>
      PARKTYPE에서 제공하는 모든 무료폰트의 저작권은 각 폰트의 제작사에게 있습니다.<br></br>
      무료폰트 (범위제한)은 다운로드 링크를 통해 해당 폰트 제작사 페이지에서 직접 다운로드 하여 사용 가능합니다.<br></br>
      무료폰트 (범위제한)의 폰트 사용범위는 PARKTYPE이 아닌 폰트 제작사에서 규정하는 것으로 PARKTYPE은 
      사용범위에 대한 어떠한 책임과 권리를 갖지 않습니다.<br></br>
      무료폰트 (범위제한) 이용 시, 폰트 사용범위를 확인하시고 사용하시기 바랍니다.<br></br>
      무료폰트 (범위제한)의 폰트 사용범위 위반에 따라 발생되는 문제에 대해서는 PARKTYPE은 어떠한 법적 책임을 지지 않습니다.
      </p>
    </div>
  );
}

export default Footer