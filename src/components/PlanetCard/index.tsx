import { ArrowSquareUpRight } from 'phosphor-react'
import {
  Container,
  Heading,
  ImageContainer,
  ItemsListContainer,
  Paragraph,
  Source,
  SourceLink,
  TextContainer,
} from './styles'
import { ItemList } from './components/ItemList'

interface PlanetCardProps {
  name: string
  img_planet: string
  content: string
  source: string
  rotation: string
  revolution: string
  radius: string
  temperature: string
}

export function PlanetCard(props: PlanetCardProps) {
  return (
    <Container>
      <ImageContainer>
        <img src={props.img_planet} alt="" />
      </ImageContainer>
      <TextContainer>
        <Heading>{props.name}</Heading>
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
      <ItemsListContainer>
        <ItemList label="Rotation time" data={props.rotation} />
        <ItemList label="Revolution time" data={props.revolution} />
        <ItemList label="Radius" data={props.radius} />
        <ItemList label="Average temp." data={props.temperature} />
      </ItemsListContainer>
    </Container>
  )
}
