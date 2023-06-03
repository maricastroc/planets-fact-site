import { useContext } from 'react'
import { PlanetsContext } from '../../../../contexts/PlanetsContext'
import { Button, Label, TextContainer, Number } from './styles'

export interface BtnDesktopProps {
  position: string
  title: string
  theme: string
  planet: string
  onChosen: () => void
}

export function BtnDesktop(props: BtnDesktopProps) {
  const { activeTheme } = useContext(PlanetsContext)

  console.log(activeTheme)

  return (
    <Button
      className={`${
        activeTheme === props.theme ? 'active' : ''
      } ${props.planet.toLowerCase()}`}
      onClick={() => props.onChosen()}
    >
      <TextContainer>
        <Number>{props.position}</Number>
        <Label>{props.title}</Label>
      </TextContainer>
    </Button>
  )
}
