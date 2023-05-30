import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetCard } from '../../components/PlanetCard'
import planetsListData from '../../data/planets-data.json'

export function Earth() {
  const { openList } = useContext(PlanetsContext)
  return openList ? (
    <PlanetsList />
  ) : (
    <PlanetCard
      name={planetsListData[2].name}
      content={planetsListData[2].overview.content}
      img_planet={planetsListData[2].images.planet}
      source={planetsListData[2].overview.source}
      rotation={planetsListData[2].rotation}
      revolution={planetsListData[2].revolution}
      radius={planetsListData[2].radius}
      temperature={planetsListData[2].temperature}
    />
  )
}
