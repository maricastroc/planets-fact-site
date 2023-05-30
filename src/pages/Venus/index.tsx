import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetCard } from '../../components/PlanetCard'
import planetsListData from '../../data/planets-data.json'

export function Venus() {
  const { openList } = useContext(PlanetsContext)
  return openList ? (
    <PlanetsList />
  ) : (
    <PlanetCard
      name={planetsListData[1].name}
      content={planetsListData[1].overview.content}
      img_planet={planetsListData[1].images.planet}
      source={planetsListData[1].overview.source}
      rotation={planetsListData[1].rotation}
      revolution={planetsListData[1].revolution}
      radius={planetsListData[1].radius}
      temperature={planetsListData[1].temperature}
    />
  )
}
