import { createContext, ReactNode, useState } from 'react'

interface PlanetsContextData {
  openList: boolean
  setOpenList: (value: boolean) => void
  activeTheme: string
  setActiveTheme: (value: string) => void
  slideLeft: boolean
  setSlideLeft: (value: boolean) => void
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
  const [slideLeft, setSlideLeft] = useState(false)

  const PlanetsContextValue: PlanetsContextData = {
    openList,
    setOpenList,
    activeTheme,
    setActiveTheme,
    slideLeft,
    setSlideLeft,
  }

  return (
    <PlanetsContext.Provider value={PlanetsContextValue}>
      {children}
    </PlanetsContext.Provider>
  )
}
