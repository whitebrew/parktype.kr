import { css } from '@emotion/react'
import { FontStyle } from 'types/ContentItem.types'

const Table = ({data}:{data: FontStyle[]}) => {

  const tableStyle = css`
    margin-top: 20px;
    table {
      width: 100%;
      word-break: break-word;
      tr {
        border-top: 1px solid #5c5c5c;
        text-align: left;
      }
      td, th {
        padding: 0.3rem 0.1rem 0 0;
        font-size: 12px;
        line-height: 1.2;
      }
      th {
        font-weight: 500;
      }
    }
  `

  return (
    <div css={tableStyle}>
      <table>
        <tbody>
          <tr>
            <th>한글명</th>
            <th>영문명</th>
            <th>PS명</th>
          </tr>
          {data.map((style, idx) => (
            <tr key={idx}>
              <td>{style.ko}</td>
              <td>{style.en}</td>
              <td>{style.ps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table