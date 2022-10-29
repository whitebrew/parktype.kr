import React from 'react'
import Header from 'components/Header'
import { ThemeProvider } from '@emotion/react'
import GlobalStyle from 'components/Common/GlobalStyle'
import { theme } from "components/Common/theme";

const IndexPage = function () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header></Header>
    </ThemeProvider>
  )
}

export default IndexPage