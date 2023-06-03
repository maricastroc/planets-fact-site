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
  image_geology: string
  btn_desktop: ReactNode
}

export function PlanetSlide(props: PlanetSlideProps) {
  const { activeTheme } = useContext(PlanetsContext)

  console.log(activeTheme)
  return (
    <Container>
      <ImageContainer>
        <img src={props.image} alt="" />
        {activeTheme === 'surface' && (
          <ImageContainerSurface>
            <img src={props.image_geology} alt="" />
          </ImageContainerSurface>
        )}
      </ImageContainer>
      <TextWrapper>
        <TextContainer>
          <Heading>{props.title}</Heading>
          <Paragraph>{props.content}</Paragraph>
          <Source>
            <p>Source:</p>
            <SourceLink>
              <a href={props.source} target="_blank" rel="noreferrer">
                Wikipedia
              </a>
              <ArrowSquareUpRight weight="fill" size={16} />
            </SourceLink>
          </Source>
        </TextContainer>
        <ButtonsContainer>{props.btn_desktop}</ButtonsContainer>
      </TextWrapper>
    </Container>
  )
}
