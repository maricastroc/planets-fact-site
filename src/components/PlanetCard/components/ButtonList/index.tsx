import { useContext } from 'react'
import { Button, Theme, Target } from './styles'
import { PlanetsContext } from '../../../../contexts/PlanetsContext'

interface ButtonListProps {
  theme: string
  planet: string
}

export function ButtonList(props: ButtonListProps) {
  const { activeTheme, setActiveTheme } = useContext(PlanetsContext)

  return (
    <Button
      onClick={() => {
        setActiveTheme(props.theme)
      }}
    >
      <Theme>{props.theme}</Theme>
      <Target
        className={`${
          activeTheme === props.theme ? 'active' : ''
        } ${props.planet.toLowerCase()}`}
      />
    </Button>
  )
}
