import { Container, Heading, Paragraph } from './styles'

interface ItemsListProps {
  label: string
  data: string
}

export function ItemList(props: ItemsListProps) {
  return (
    <Container>
      <Paragraph>{props.label}</Paragraph>
      <Heading>{props.data}</Heading>
    </Container>
  )
}
