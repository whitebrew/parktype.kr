import Header from 'components/Header'
import { ThemeProvider } from '@emotion/react'
import GlobalStyle from 'components/Common/GlobalStyle'
import { theme } from 'components/Common/theme'
import Content from 'components/Content'
import styled from '@emotion/styled'

const IndexPage = function () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header/>
        <Contents>
          <Content/>
          <Content/>
        </Contents>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  background: ${({theme}) => theme.colors.bg};
  padding: 0.5rem;
  box-sizing: border-box;
  font-weight: 300;
`

const Contents = styled.ul`
  width: 75%;
  margin-left: 25%;
`

export default IndexPage