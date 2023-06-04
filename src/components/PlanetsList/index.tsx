import { Item } from './components/Item'
import { Container } from './styles'

export function PlanetsList() {
  const planets = [
    { title: 'Mercury', labelColor: 'mercury-label', route: '' },
    { title: 'Venus', labelColor: 'venus-label', route: 'venus' },
    { title: 'Earth', labelColor: 'earth-label', route: 'earth' },
    { title: 'Mars', labelColor: 'mars-label', route: 'mars' },
    { title: 'Jupiter', labelColor: 'jupiter-label', route: 'jupiter' },
    { title: 'Saturn', labelColor: 'saturn-label', route: 'saturn' },
    { title: 'Uranus', labelColor: 'uranus-label', route: 'uranus' },
    { title: 'Neptune', labelColor: 'neptune-label', route: 'neptune' },
  ]

  return (
    <Container>
      {planets.map((planet) => (
        <Item
          key={planet.title}
          title={planet.title}
          labelColor={planet.labelColor}
          route={planet.route}
        />
      ))}
    </Container>
  )
}
