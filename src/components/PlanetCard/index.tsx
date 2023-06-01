import { ArrowSquareUpRight } from 'phosphor-react'
import {
  Container,
  Heading,
  ImageContainer,
  ImageContainerItem,
  ItemsListContainer,
  Navbar,
  Paragraph,
  Separator,
  Source,
  SourceLink,
  TextContainer,
  TextNavbar,
} from './styles'
import { ItemList } from './components/ItemList'
import { useContext } from 'react'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetDataProps } from '../../utils/getPlanetData'
import { ButtonList } from './components/ButtonList'

export function PlanetCard(props: PlanetDataProps) {
  const { activeTheme } = useContext(PlanetsContext)
  const renderImage = () => {
    const { imgPlanet, imgInternal, imgGeology } = props

    if (activeTheme === 'surface') {
      return (
        <>
          <img src={imgPlanet} alt="" />
          <ImageContainerItem>
            <img src={imgGeology} alt="" />
          </ImageContainerItem>
        </>
      )
    }

    return (
      <img src={activeTheme === 'structure' ? imgInternal : imgPlanet} alt="" />
    )
  }

  return (
    <Container>
      <Navbar>
        <TextNavbar>
          <ButtonList id={1} planet={props.name} theme="overview" />
          <ButtonList id={2} planet={props.name} theme="structure" />
          <ButtonList id={3} planet={props.name} theme="surface" />
        </TextNavbar>
        <Separator />
      </Navbar>
      <ImageContainer>{activeTheme && renderImage()}</ImageContainer>
      <TextContainer>
        <Heading>{props.name}</Heading>
        <Paragraph>
          {props[`${activeTheme}Content` as keyof PlanetDataProps] ||
            props.geologyContent}
        </Paragraph>
        <Source>
          <p>Source:</p>
          <SourceLink>
            <a
              href={
                activeTheme !== 'surface'
                  ? props[`${activeTheme}Source` as keyof PlanetDataProps]
                  : props.geologySource
              }
              target="_blank"
              rel="noreferrer"
            >
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
