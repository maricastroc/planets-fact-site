import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { OptionContainer } from './styles'
import { PlanetsContext } from '../../../../contexts/PlanetsContext'

interface OptionPlanetProps {
  name: string
  route: string
}

export function OptionPlanet({ name, route }: OptionPlanetProps) {
  const { setActiveTheme, currentPage, setCurrentPage } =
    useContext(PlanetsContext)
  return (
    <NavLink
      to={`${route}`}
      title={name}
      onClick={() => {
        setCurrentPage(name.toLowerCase())
        setActiveTheme('overview')
      }}
    >
      <OptionContainer
        className={`${
          currentPage === name.toLowerCase() ? 'active' : ''
        } ${name.toLowerCase()}`}
      >
        {name}
      </OptionContainer>
    </NavLink>
  )
}
