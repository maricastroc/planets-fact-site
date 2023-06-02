import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetPage } from '../../components/PlanetPage'
import { usePlanetData } from '../../utils/getPlanetData'

export function Venus() {
  const { openList } = useContext(PlanetsContext)
  const planetData = usePlanetData(1)
  return openList ? <PlanetsList /> : <PlanetPage {...planetData} />
}
