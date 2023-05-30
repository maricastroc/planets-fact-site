import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetCard } from '../../components/PlanetCard'
import planetsListData from '../../data/planets-data.json'

export function Uranus() {
  const { openList } = useContext(PlanetsContext)
  return openList ? (
    <PlanetsList />
  ) : (
    <PlanetCard
      name={planetsListData[6].name}
      content={planetsListData[6].overview.content}
      img_planet={planetsListData[6].images.planet}
      source={planetsListData[6].overview.source}
      rotation={planetsListData[6].rotation}
      revolution={planetsListData[6].revolution}
      radius={planetsListData[6].radius}
      temperature={planetsListData[6].temperature}
    />
  )
}
