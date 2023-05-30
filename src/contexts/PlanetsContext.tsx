import { createContext, ReactNode, useState } from 'react'

interface PlanetsContextData {
  openList: boolean
  setOpenList: (value: boolean) => void
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

  const PlanetsContextValue: PlanetsContextData = {
    openList,
    setOpenList,
  }

  return (
    <PlanetsContext.Provider value={PlanetsContextValue}>
      {children}
    </PlanetsContext.Provider>
  )
}
