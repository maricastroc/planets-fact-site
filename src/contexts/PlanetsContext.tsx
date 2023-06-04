import { createContext, ReactNode, useState } from 'react'

interface PlanetsContextData {
  openList: boolean
  setOpenList: (value: boolean) => void
  activeTheme: string
  setActiveTheme: (value: string) => void
  currentPage: string
  setCurrentPage: (value: string) => void
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
  const [openList, setOpenList] = useState<boolean>(false)
  const [activeTheme, setActiveTheme] = useState<string>('overview')
  const [currentPage, setCurrentPage] = useState('mercury')

  const PlanetsContextValue: PlanetsContextData = {
    openList,
    setOpenList,
    activeTheme,
    setActiveTheme,
    currentPage,
    setCurrentPage,
  }

  return (
    <PlanetsContext.Provider value={PlanetsContextValue}>
      {children}
    </PlanetsContext.Provider>
  )
}
