import {
  Container,
  EmblaContainer,
  ItemsListContainer,
  Navbar,
  Navlabels,
  Separator,
} from './styles'
import { ItemList } from './components/ItemList'
import { useContext } from 'react'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetDataProps } from '../../utils/getPlanetData'
import useEmblaCarousel from 'embla-carousel-react'
import { PlanetSlide } from '../PlanetSlide'
import { BtnMobile } from './components/BtnMobile'

export function PlanetPage(props: PlanetDataProps) {
  const { setActiveTheme } = useContext(PlanetsContext)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const buttonMobile = ['overview', 'structure', 'surface']
  return (
    <Container>
      <Navbar>
        <Navlabels>
          {buttonMobile.map((button, index) => (
            <BtnMobile
              key={index}
              title={button}
              planet={props.name}
              onChosen={() => {
                setActiveTheme(button)
                emblaApi?.scrollTo(index)
              }}
            />
          ))}
        </Navlabels>
        <Separator />
      </Navbar>
      <EmblaContainer ref={emblaRef} className="embla">
        <div className="embla__container">
          <div className="embla__slide">
            <PlanetSlide
              title={props.name}
              image={props.imgPlanet}
              image_geology={props.imgGeology}
              content={props.overviewContent}
              source={props.overviewSource}
            />
          </div>
          <div className="embla__slide">
            <PlanetSlide
              title={props.name}
              image={props.imgInternal}
              image_geology={props.imgGeology}
              content={props.structureContent}
              source={props.structureSource}
            />
          </div>
          <div className="embla__slide">
            <PlanetSlide
              title={props.name}
              image={props.imgPlanet}
              image_geology={props.imgGeology}
              content={props.geologyContent}
              source={props.geologySource}
            />
          </div>
        </div>
      </EmblaContainer>
      <ItemsListContainer>
        <ItemList label="Rotation time" data={props.rotation} />
        <ItemList label="Revolution time" data={props.revolution} />
        <ItemList label="Radius" data={props.radius} />
        <ItemList label="Average temp." data={props.temperature} />
      </ItemsListContainer>
    </Container>
  )
}
