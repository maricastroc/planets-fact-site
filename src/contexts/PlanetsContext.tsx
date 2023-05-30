import { createContext, ReactNode, useState } from 'react'

interface PlanetsContextData {
  openList: boolean
  setOpenList: (value: boolean) => void
  overviewActive: boolean
  setOverviewActive: (value: boolean) => void
  structureActive: boolean
  setStructureActive: (value: boolean) => void
  surfaceActive: boolean
  setSurfaceActive: (value: boolean) => void
}

export const PlanetsContext = createContext<PlanetsContextData>(
  {} as PlanetsContextData,
)

interface PlanetsContextProviderProps {
  children: ReactNode
}

export function PlanetsContextProvider({
  children,
}: PlanetsContextProviderProps) {
  const [openList, setOpenList] = useState(false)
  const [overviewActive, setOverviewActive] = useState(true)
  const [structureActive, setStructureActive] = useState(false)
  const [surfaceActive, setSurfaceActive] = useState(false)

  const PlanetsContextValue: PlanetsContextData = {
    openList,
    setOpenList,
    overviewActive,
    setOverviewActive,
    structureActive,
    setStructureActive,
    surfaceActive,
    setSurfaceActive,
  }

  return (
    <PlanetsContext.Provider value={PlanetsContextValue}>
      {children}
    </PlanetsContext.Provider>
  )
}
