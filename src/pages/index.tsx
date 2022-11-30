import Header from 'components/Header'
import { ThemeProvider } from '@emotion/react'
import GlobalStyle from 'components/Common/GlobalStyle'
import { theme } from 'components/Common/theme'
import Content from 'components/Content'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import {ContentListItemType, ThemeType} from 'types/ContentItem.types'
import { useState } from 'react'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: ContentListItemType[]
    }
  }
}

const IndexPage = function ({data: {allMarkdownRemark: { edges }}}:IndexPageProps) {
  const [currentThemeTitle, setCurrentThemeTitle] = useState<keyof typeof theme.colors>('Black')
  const currentTheme = theme.colors[currentThemeTitle];

  const Container = styled.div`
  background: ${currentTheme.bg};
  padding: 0.5rem;
  box-sizing: border-box;
  font-weight: 400;
  min-height: 100vh;
  background-image: ${ currentThemeTitle === 'Black' && `radial-gradient(circle at 0% 50%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 0%, rgb(29, 29, 29) 100%, rgb(29, 29, 29) 100%)`};

  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: 4rem;
  }
`

  const Contents = styled.ul`
    width: 75%;
    margin-left: 25%;
    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
    }
  `

const handleTheme = (value : ThemeType['currentThemeTitle']) => {
  console.log(value);
  setCurrentThemeTitle(value)
}
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header currentThemeTitle={currentThemeTitle} onClick={handleTheme}/>
        <Contents>
        {edges.map(
          ({
            node: { id, frontmatter },
          }) => (
            <Content currentThemeTitle={currentThemeTitle} {...frontmatter} key={id}/>
          )
        )} 
        </Contents>
      </Container>
      <div id="modal-root"/>
    </ThemeProvider>
  )
}



export default IndexPage

export const getContentList = graphql`
  query getContentList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "YYYY.MM.DD.")
            available
            productionPeriod
            glyphset
            fontStyle {
              weight
              width
              italic
            }
            link
            images {
              childImageSharp {
                gatsbyImageData(width: 900)
              }
            }
          }
        }
      }
    }
  }
`