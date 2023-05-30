import { useContext } from 'react'
import { Container, Heading, IconContainer, Separator, Wrapper } from './styles'
import { List } from 'phosphor-react'
import { PlanetsContext } from '../../contexts/PlanetsContext'

export function Header() {
  const { openList, setOpenList } = useContext(PlanetsContext)

  return (
    <Wrapper>
      <Container>
        <Heading>The Planets</Heading>
        <IconContainer>
          <List
            size={32}
            onClick={() => setOpenList(!openList)}
            className={openList ? 'active' : ''}
          />
        </IconContainer>
      </Container>
      <Separator />
    </Wrapper>
  )
}
