import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetCard } from '../../components/PlanetCard'
import planetsListData from '../../data/planets-data.json'

export function Jupiter() {
  const { openList } = useContext(PlanetsContext)
  return openList ? (
    <PlanetsList />
  ) : (
    <PlanetCard
      name={planetsListData[4].name}
      content={planetsListData[4].overview.content}
      img_planet={planetsListData[4].images.planet}
      source={planetsListData[4].overview.source}
      rotation={planetsListData[4].rotation}
      revolution={planetsListData[4].revolution}
      radius={planetsListData[4].radius}
      temperature={planetsListData[4].temperature}
    />
  )
}
