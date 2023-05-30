import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetCard } from '../../components/PlanetCard'
import planetsListData from '../../data/planets-data.json'

export function Saturn() {
  const { openList } = useContext(PlanetsContext)
  return openList ? (
    <PlanetsList />
  ) : (
    <PlanetCard
      name={planetsListData[5].name}
      content={planetsListData[5].overview.content}
      img_planet={planetsListData[5].images.planet}
      source={planetsListData[5].overview.source}
      rotation={planetsListData[5].rotation}
      revolution={planetsListData[5].revolution}
      radius={planetsListData[5].radius}
      temperature={planetsListData[5].temperature}
    />
  )
}
