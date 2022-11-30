import { theme } from 'components/Common/theme'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export type FontStyle = {
  weight: string
  width: string
  italic: string
}

export type ContentFrontmatterType = {
  date: string
  title: string
  description: string
  available: string
  productionPeriod: string
  glyphset: string
  fontStyle: FontStyle[]
  link: string
  images: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }[]
}

export type ContentListItemType = {
  node: {
    id: string
    frontmatter: ContentFrontmatterType
  }
}

export type ThemeType = {
  currentThemeTitle : keyof typeof theme.colors
}