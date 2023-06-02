import { NavLink } from 'react-router-dom'
import { OptionContainer } from './styles'

interface OptionPlanetProps {
  name: string
  route: string
}

export function OptionPlanet(props: OptionPlanetProps) {
  return (
    <NavLink to={`${props.route}`} title={props.name}>
      <OptionContainer>{props.name}</OptionContainer>
    </NavLink>
  )
}
