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

export function BtnDesktop({
  position,
  title,
  theme,
  planet,
  onChosen,
}: BtnDesktopProps) {
  const { activeTheme } = useContext(PlanetsContext)

  console.log(activeTheme)

  return (
    <Button
      className={`${
        activeTheme === theme ? 'active' : ''
      } ${planet.toLowerCase()}`}
      onClick={() => onChosen()}
    >
      <TextContainer>
        <Number>{position}</Number>
        <Label>{title}</Label>
      </TextContainer>
    </Button>
  )
}
