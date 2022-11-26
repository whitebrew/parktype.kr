import Header from 'components/Header'
import { ThemeProvider } from '@emotion/react'
import GlobalStyle from 'components/Common/GlobalStyle'
import { theme } from 'components/Common/theme'
import Content from 'components/Content'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import {ContentListItemType} from 'types/ContentItem.types'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: ContentListItemType[]
    }
  }
}

const IndexPage = function ({data: {allMarkdownRemark: { edges }}}:IndexPageProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header/>
        <Contents>
        {edges.map(
        ({
          node: { id, frontmatter },
        }) => {
          console.log('frontmatter: ', frontmatter)
          return <Content {...frontmatter} key={id}/>
        }
          
      )}
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
  min-height: 100vh;
`

const Contents = styled.ul`
  width: 75%;
  margin-left: 25%;
`

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