import { useContext } from 'react'
import { Button, Theme, Target } from './styles'
import { PlanetsContext } from '../../../../contexts/PlanetsContext'

interface ButtonListProps {
  id: number
  theme: string
  planet: string
}

type ThemeMapping = {
  [key: string]: {
    [key: string]: boolean
  }
}

export function ButtonList(props: ButtonListProps) {
  const { activeTheme, setActiveTheme, setSlideLeft } =
    useContext(PlanetsContext)

  const themeMapping: ThemeMapping = {
    overview: {
      structure: false,
      surface: false,
    },
    structure: {
      overview: true,
      surface: false,
    },
    surface: {
      structure: true,
      overview: true,
    },
  }

  const handleButtonClick = () => {
    const shouldSlideLeft = themeMapping[props.theme]?.[activeTheme] ?? false
    setActiveTheme(props.theme)
    setSlideLeft(shouldSlideLeft)
  }

  return (
    <Button onClick={handleButtonClick}>
      <Theme>{props.theme}</Theme>
      <Target
        className={`${
          activeTheme === props.theme ? 'active' : ''
        } ${props.planet.toLowerCase()}`}
      />
    </Button>
  )
}
