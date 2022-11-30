import { css } from '@emotion/react'
import { theme } from 'components/Common/theme'
import { FontStyle, ThemeType } from 'types/ContentItem.types'

const Table = ({data, currentThemeTitle}:{data: FontStyle[]} & ThemeType) => {
  const currentTheme = theme.colors[currentThemeTitle];
  const tableStyle = css`
    margin-top: 20px;
    table {
      width: 100%;
      tr {
        border-top: 1px solid ${currentTheme.border};
        text-align: left;
      }
      td, th {
        padding: 0.3rem 0;
        font-size: 12px;
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
            <th>WEIGHT</th>
            <th>WIDTH</th>
            <th>ITALIC</th>
          </tr>
          {data.map((style, idx) => (
            <tr key={idx}>
              <td>{style.weight}</td>
              <td>{style.width}</td>
              <td>{style.italic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table