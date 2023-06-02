import { Container, TextContainer, Separator } from './styles'
import { ButtonList } from '../ButtonList'

interface NavBarProps {
  planet: string
}

export function NavBar(props: NavBarProps) {
  return (
    <Container>
      <TextContainer>
        <ButtonList planet={props.planet} theme="overview" />
        <ButtonList planet={props.planet} theme="structure" />
        <ButtonList planet={props.planet} theme="surface" />
      </TextContainer>
      <Separator />
    </Container>
  )
}
