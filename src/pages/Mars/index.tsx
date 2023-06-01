import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetCard } from '../../components/PlanetCard'
import { usePlanetData } from '../../utils/getPlanetData'

export function Mars() {
  const { openList } = useContext(PlanetsContext)
  const planetData = usePlanetData(3)
  return openList ? <PlanetsList /> : <PlanetCard {...planetData} />
}
