import { Container, Heading, Paragraph } from './styles'

interface ItemsListProps {
  label: string
  data: string
}

export function ItemList({ label, data }: ItemsListProps) {
  return (
    <Container>
      <Paragraph>{label}</Paragraph>
      <Heading>{data}</Heading>
    </Container>
  )
}
