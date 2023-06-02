import { Container, TextContainer, Separator } from './styles'
import { ButtonList } from '../ButtonList'

interface NavBarProps {
  planet: string
}

export function NavBar(props: NavBarProps) {
  return (
    <Container>
      <TextContainer>
        <ButtonList id={1} planet={props.planet} theme="overview" />
        <ButtonList id={2} planet={props.planet} theme="structure" />
        <ButtonList id={3} planet={props.planet} theme="surface" />
      </TextContainer>
      <Separator />
    </Container>
  )
}
