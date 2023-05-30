import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetCard } from '../../components/PlanetCard'
import planetsListData from '../../data/planets-data.json'

export function Mars() {
  const { openList } = useContext(PlanetsContext)
  return openList ? (
    <PlanetsList />
  ) : (
    <PlanetCard
      name={planetsListData[3].name}
      content={planetsListData[3].overview.content}
      img_planet={planetsListData[3].images.planet}
      source={planetsListData[3].overview.source}
      rotation={planetsListData[3].rotation}
      revolution={planetsListData[3].revolution}
      radius={planetsListData[3].radius}
      temperature={planetsListData[3].temperature}
    />
  )
}
