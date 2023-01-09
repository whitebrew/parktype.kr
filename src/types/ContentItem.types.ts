import { theme } from 'components/Common/theme'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export type FontStyle = {
  ko: string
  en: string
  ps: string
}

export type ContentFrontmatterType = {
  order: number
  title: string
  productionPeriod: string
  fontStyle: FontStyle[]
  format: string[]
  spec: string[]
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