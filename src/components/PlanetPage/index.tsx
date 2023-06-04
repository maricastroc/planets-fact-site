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
import { BtnDesktop } from './components/BtnDesktop'
import { Footer } from '../Footer'

export function PlanetPage(props: PlanetDataProps) {
  const { setActiveTheme } = useContext(PlanetsContext)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const buttonMobile = ['overview', 'structure', 'surface']
  const buttonDesktop = [
    {
      position: '01',
      title: 'overview',
      theme: 'overview',
    },
    { position: '02', title: 'internal stucture', theme: 'structure' },
    {
      position: '03',
      title: 'surface geology',
      theme: 'surface',
    },
  ]

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
              imageGeology={props.imgGeology}
              content={props.overviewContent}
              source={props.overviewSource}
              btnDesktop={buttonDesktop.map((button, index) => (
                <BtnDesktop
                  key={index}
                  onChosen={() => {
                    setActiveTheme(button.theme)
                    emblaApi?.scrollTo(index)
                  }}
                  position={button.position}
                  theme={button.theme}
                  planet={props.name.toLowerCase()}
                  title={button.title}
                />
              ))}
            />
          </div>
          <div className="embla__slide">
            <PlanetSlide
              title={props.name}
              image={props.imgInternal}
              imageGeology={props.imgGeology}
              content={props.structureContent}
              source={props.structureSource}
              btnDesktop={buttonDesktop.map((button, index) => (
                <BtnDesktop
                  key={index}
                  onChosen={() => {
                    setActiveTheme(button.theme)
                    emblaApi?.scrollTo(index)
                  }}
                  position={button.position}
                  theme={button.theme}
                  planet={props.name.toLowerCase()}
                  title={button.title}
                />
              ))}
            />
          </div>
          <div className="embla__slide">
            <PlanetSlide
              title={props.name}
              image={props.imgPlanet}
              imageGeology={props.imgGeology}
              content={props.geologyContent}
              source={props.geologySource}
              btnDesktop={buttonDesktop.map((button, index) => (
                <BtnDesktop
                  key={index}
                  onChosen={() => {
                    setActiveTheme(button.theme)
                    emblaApi?.scrollTo(index)
                  }}
                  theme={button.theme}
                  position={button.position}
                  planet={props.name.toLowerCase()}
                  title={button.title}
                />
              ))}
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
      <Footer />
    </Container>
  )
}
