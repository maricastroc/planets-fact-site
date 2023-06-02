import { useContext } from 'react'
import { Button, Theme, Target } from './styles'
import { PlanetsContext } from '../../../../contexts/PlanetsContext'

interface BtnMobileProps {
  title: string
  planet: string
  onChosen: () => void
}

export function BtnMobile(props: BtnMobileProps) {
  const { activeTheme } = useContext(PlanetsContext)

  return (
    <Button onClick={() => props.onChosen()}>
      <Theme>{props.title}</Theme>
      <Target
        className={`${
          activeTheme === props.title ? 'active' : ''
        } ${props.planet.toLowerCase()}`}
      />
    </Button>
  )
}
