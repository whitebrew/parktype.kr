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

  &::before {
    position: fixed;
    background-image: ${ currentThemeTitle === 'Black' && `radial-gradient(circle at 0% 50%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 0%, rgb(29, 29, 29) 100%, rgb(29, 29, 29) 100%)`};
    display: block;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

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
  setCurrentThemeTitle(value)
}
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header onClick={handleTheme}/>
        <Contents>
        {edges.map(
          ({
            node: { id, frontmatter },
          }) => (
            <Content {...frontmatter} key={id}/>
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
      sort: { fields: [frontmatter___order] }
    ) {
      edges {
        node {
          id
          frontmatter {
            order
            title
            productionPeriod
            fontStyle {
              ko
              en
              ps
            }
            format
            spec
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