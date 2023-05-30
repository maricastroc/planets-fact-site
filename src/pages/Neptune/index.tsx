import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetCard } from '../../components/PlanetCard'
import planetsListData from '../../data/planets-data.json'

export function Neptune() {
  const { openList } = useContext(PlanetsContext)
  return openList ? (
    <PlanetsList />
  ) : (
    <PlanetCard
      name={planetsListData[7].name}
      content={planetsListData[7].overview.content}
      img_planet={planetsListData[7].images.planet}
      source={planetsListData[7].overview.source}
      rotation={planetsListData[7].rotation}
      revolution={planetsListData[7].revolution}
      radius={planetsListData[7].radius}
      temperature={planetsListData[7].temperature}
    />
  )
}
