import Header from 'components/Header'
import { ThemeProvider } from '@emotion/react'
import GlobalStyle from 'components/Common/GlobalStyle'
import { theme } from 'components/Common/theme'
import Content from 'components/Content'

const IndexPage = function () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>
      <Content/>
    </ThemeProvider>
  )
}

export default IndexPage
