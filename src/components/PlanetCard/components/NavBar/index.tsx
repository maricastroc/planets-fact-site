import { useContext } from 'react'
import {
  Container,
  Item,
  Label,
  TextContainer,
  Target,
  Separator,
} from './styles'
import { PlanetsContext } from '../../../../contexts/PlanetsContext'

interface NavBarProps {
  title: string
}

export function NavBar(props: NavBarProps) {
  const {
    overviewActive,
    setOverviewActive,
    surfaceActive,
    setSurfaceActive,
    structureActive,
    setStructureActive,
  } = useContext(PlanetsContext)

  return (
    <Container>
      <TextContainer>
        <Item
          onClick={() => {
            setOverviewActive(true)
            setStructureActive(false)
            setSurfaceActive(false)
          }}
        >
          <Label>Overview</Label>
          <Target
            className={`${
              overviewActive ? 'active' : ''
            } ${props.title.toLowerCase()}`}
          />
        </Item>
        <Item
          onClick={() => {
            setOverviewActive(false)
            setStructureActive(true)
            setSurfaceActive(false)
          }}
        >
          <Label>Structure</Label>
          <Target
            className={`${
              structureActive ? 'active' : ''
            } ${props.title.toLowerCase()}`}
          />
        </Item>
        <Item
          onClick={() => {
            setOverviewActive(false)
            setStructureActive(false)
            setSurfaceActive(true)
          }}
        >
          <Label>Surface</Label>
          <Target
            className={`${
              surfaceActive ? 'active' : ''
            } ${props.title.toLowerCase()}`}
          />
        </Item>
      </TextContainer>
      <Separator />
    </Container>
  )
}
