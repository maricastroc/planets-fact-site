import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetCard } from '../../components/PlanetCard'
import planetsListData from '../../data/planets-data.json'

export function Home() {
  const { openList } = useContext(PlanetsContext)
  return openList ? (
    <PlanetsList />
  ) : (
    <PlanetCard
      name={planetsListData[0].name}
      content={planetsListData[0].overview.content}
      img_planet={planetsListData[0].images.planet}
      source={planetsListData[0].overview.source}
      rotation={planetsListData[0].rotation}
      revolution={planetsListData[0].revolution}
      radius={planetsListData[0].radius}
      temperature={planetsListData[0].temperature}
    />
  )
}
