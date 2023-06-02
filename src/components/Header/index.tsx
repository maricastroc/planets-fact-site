import { useContext } from 'react'
import {
  Container,
  DesktopPlanetsContainer,
  Heading,
  IconContainer,
  Separator,
  Wrapper,
} from './styles'
import { List } from 'phosphor-react'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { planets } from '../../utils/getPlanetData'
import { OptionPlanet } from './components/Option'

export function Header() {
  const { openList, setOpenList, setActiveTheme } = useContext(PlanetsContext)

  return (
    <Wrapper>
      <Container>
        <Heading>The Planets</Heading>
        <IconContainer>
          <List
            size={32}
            onClick={() => {
              setOpenList(!openList)
              setActiveTheme('overview')
            }}
            className={openList ? 'active' : ''}
          />
        </IconContainer>
      </Container>
      <Separator />
      <DesktopPlanetsContainer>
        {planets.map((planet) => (
          <OptionPlanet
            key={planet.planet}
            name={planet.planet}
            route={planet.route}
          />
        ))}
      </DesktopPlanetsContainer>
    </Wrapper>
  )
}
