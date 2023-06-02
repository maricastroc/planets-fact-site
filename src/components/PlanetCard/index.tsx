import { ArrowSquareUpRight } from 'phosphor-react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {
  Container,
  Heading,
  ImageContainer,
  ImageContainerSurface,
  ImageContainerSurfaceChild,
  ItemsListContainer,
  Paragraph,
  Source,
  SourceLink,
  TextContainer,
} from './styles'
import { ItemList } from './components/ItemList'
import { useContext } from 'react'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetDataProps } from '../../utils/getPlanetData'
import { NavBar } from './components/NavBar'

export function PlanetCard(props: PlanetDataProps) {
  const { activeTheme } = useContext(PlanetsContext)

  const renderImage = () => {
    const { imgPlanet, imgInternal, imgGeology } = props

    if (activeTheme === 'surface') {
      return (
        <>
          <ImageContainerSurface>
            <img src={imgPlanet} alt="" />
            <ImageContainerSurfaceChild>
              <img src={imgGeology} alt="" />
            </ImageContainerSurfaceChild>
          </ImageContainerSurface>
        </>
      )
    }

    return (
      <img src={activeTheme === 'structure' ? imgInternal : imgPlanet} alt="" />
    )
  }

  return (
    <Container>
      <NavBar planet={props.name} />
      <ImageContainer>
        <TransitionGroup>
          <CSSTransition
            key={activeTheme}
            classNames="slide"
            timeout={200} // Tempo de duração da animação em milissegundos
            unmountOnExit
          >
            {renderImage()}
          </CSSTransition>
        </TransitionGroup>
      </ImageContainer>
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
