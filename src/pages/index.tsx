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
        </Contents>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 18% 1fr;
  width: 100%;
  background: ${({theme}) => theme.colors.bg};
  padding: 0.5rem;
  box-sizing: border-box;
`

const Contents = styled.ul`
  margin-left: 7%;
`


export default IndexPage
