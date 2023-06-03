import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { OptionContainer } from './styles'
import { PlanetsContext } from '../../../../contexts/PlanetsContext'

interface OptionPlanetProps {
  name: string
  route: string
}

export function OptionPlanet(props: OptionPlanetProps) {
  const { setActiveTheme } = useContext(PlanetsContext)
  return (
    <NavLink
      to={`${props.route}`}
      title={props.name}
      onClick={() => setActiveTheme('overview')}
    >
      <OptionContainer>{props.name}</OptionContainer>
    </NavLink>
  )
}
