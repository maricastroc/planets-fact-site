import { ArrowSquareUpRight } from 'phosphor-react'
import { useContext } from 'react'
import {
  Container,
  Heading,
  ImageContainer,
  ImageContainerSurface,
  Paragraph,
  Source,
  SourceLink,
  TextContainer,
} from './styles'
import { PlanetsContext } from '../../contexts/PlanetsContext'

interface PlanetSlideProps {
  title: string
  content: string
  source: string
  image: string
  image_geology: string
}

export function PlanetSlide(props: PlanetSlideProps) {
  const { activeTheme } = useContext(PlanetsContext)
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
    </Container>
  )
}
