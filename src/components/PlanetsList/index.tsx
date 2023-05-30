import { Item } from './components/Item'
import { Container } from './styles'

export function PlanetsList() {
  return (
    <Container>
      <Item title="Mercury" labelColor="mercury-label" route="" />
      <Item title="Venus" labelColor="venus-label" route="venus" />
      <Item title="Earth" labelColor="earth-label" route="earth" />
      <Item title="Mars" labelColor="mars-label" route="mars" />
      <Item title="Jupiter" labelColor="jupiter-label" route="jupiter" />
      <Item title="Saturn" labelColor="saturn-label" route="saturn" />
      <Item title="Uranus" labelColor="uranus-label" route="uranus" />
      <Item title="Neptune" labelColor="neptune-label" route="neptune" />
    </Container>
  )
}
