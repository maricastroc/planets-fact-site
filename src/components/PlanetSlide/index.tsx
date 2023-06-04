import { ArrowSquareUpRight } from 'phosphor-react'
import { ReactNode, useContext } from 'react'
import {
  ButtonsContainer,
  Container,
  Heading,
  ImageContainer,
  ImageContainerSurface,
  Paragraph,
  Source,
  SourceLink,
  TextContainer,
  TextWrapper,
} from './styles'
import { PlanetsContext } from '../../contexts/PlanetsContext'

interface PlanetSlideProps {
  title: string
  content: string
  source: string
  image: string
  imageGeology: string
  btnDesktop: ReactNode
}

export function PlanetSlide({
  title,
  content,
  source,
  image,
  imageGeology,
  btnDesktop,
}: PlanetSlideProps) {
  const { activeTheme } = useContext(PlanetsContext)

  console.log(activeTheme)
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt="" />
        {activeTheme === 'surface' && (
          <ImageContainerSurface>
            <img src={imageGeology} alt="" />
          </ImageContainerSurface>
        )}
      </ImageContainer>
      <TextWrapper>
        <TextContainer>
          <Heading>{title}</Heading>
          <Paragraph>{content}</Paragraph>
          <Source>
            <p>Source:</p>
            <SourceLink>
              <a href={source} target="_blank" rel="noreferrer">
                Wikipedia
              </a>
              <ArrowSquareUpRight weight="fill" size={16} />
            </SourceLink>
          </Source>
        </TextContainer>
        <ButtonsContainer>{btnDesktop}</ButtonsContainer>
      </TextWrapper>
    </Container>
  )
}
