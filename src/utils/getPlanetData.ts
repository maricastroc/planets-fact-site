import { useMemo } from 'react'
import planetsListData from '../data/planets-data.json'

export interface PlanetDataProps {
  name: string
  overviewContent: string
  overviewSource: string
  structureContent: string
  structureSource: string
  geologyContent: string
  geologySource: string
  imgPlanet: string
  imgInternal: string
  imgGeology: string
  rotation: string
  revolution: string
  radius: string
  temperature: string
}

export function usePlanetData(index: number) {
  const planet = useMemo(() => planetsListData[index], [index])

  return useMemo(
    () => ({
      name: planet.name,
      overviewContent: planet.overview.content,
      overviewSource: planet.overview.source,
      structureContent: planet.structure.content,
      structureSource: planet.structure.source,
      geologyContent: planet.geology.content,
      geologySource: planet.geology.source,
      imgPlanet: planet.images.planet,
      imgInternal: planet.images.internal,
      imgGeology: planet.images.geology,
      rotation: planet.rotation,
      revolution: planet.revolution,
      radius: planet.radius,
      temperature: planet.temperature,
    }),
    [planet],
  )
}
