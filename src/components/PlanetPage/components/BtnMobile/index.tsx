import { useContext } from 'react'
import { Button, Theme, Target } from './styles'
import { PlanetsContext } from '../../../../contexts/PlanetsContext'

interface BtnMobileProps {
  title: string
  planet: string
  onChosen: () => void
}

export function BtnMobile({ title, planet, onChosen }: BtnMobileProps) {
  const { activeTheme } = useContext(PlanetsContext)

  return (
    <Button onClick={() => onChosen()}>
      <Theme>{title}</Theme>
      <Target
        className={`${
          activeTheme === title ? 'active' : ''
        } ${planet.toLowerCase()}`}
      />
    </Button>
  )
}
