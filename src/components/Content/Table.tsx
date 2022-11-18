import { css } from '@emotion/react'

const Table = () => {
  const tableStyle = css`
    margin-top: 20px;
    table {
      width: 100%;
      tr {
        border-top: 1px solid #ffffff;
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
          <tr>
            <td>UltraLight</td>
            <td>Condensed</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Light</td>
            <td>Condensed</td>
            <td>Yes</td>
          </tr>
            <tr>
            <td>Regular</td>
            <td>Condensed</td>
            <td>Yes</td>
          </tr>
            <tr>
            <td>Medium</td>
            <td>Condensed</td>
            <td>Yes</td>
          </tr>
            <tr>
            <td>Bold</td>
            <td>Condensed</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>UltraLight</td>
            <td>Normal</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Light</td>
            <td>Normal</td>
            <td>Yes</td>
          </tr>
            <tr>
            <td>Regular</td>
            <td>Normal</td>
            <td>Yes</td>
          </tr>
            <tr>
            <td>Medium</td>
            <td>Normal</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Bold</td>
            <td>Normal</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>UltraLight</td>
            <td>Wide</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Light</td>
            <td>Wide</td>
            <td>Yes</td>
          </tr>
            <tr>
            <td>Regular</td>
            <td>Wide</td>
            <td>Yes</td>
          </tr>
            <tr>
            <td>Medium</td>
            <td>Wide</td>
            <td>Yes</td>
          </tr>
            <tr>
            <td>Bold</td>
            <td>Wide</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table