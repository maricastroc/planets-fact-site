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
import { NavBar } from './components/NavBar'
import { useState } from 'react'

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
  const [rotateImage, setRotateImage] = useState(false)
  return (
    <Container>
      <NavBar title={props.name} />
      <ImageContainer>
        <img
          className={rotateImage ? 'active' : ''}
          src={props.img_planet}
          alt=""
          onClick={() => setRotateImage(!rotateImage)}/>
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
