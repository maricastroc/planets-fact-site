import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { PlanetsContext } from '../../../../contexts/PlanetsContext'
import { CaretRight } from 'phosphor-react'
import {
  Content,
  IconContainer,
  ItemContainer,
  Label,
  Separator,
  TextContainer,
  Title,
  Wrapper,
} from './styles'

interface ItemProps {
  title: string
  labelColor: string
  route: string
}

export function Item(props: ItemProps) {
  const { setOpenList } = useContext(PlanetsContext)

  return (
    <ItemContainer onClick={() => setOpenList(false)}>
      <NavLink to={`/${props.route}`} title={props.title}>
        <Wrapper>
          <Content>
            <TextContainer>
              <Label className={props.labelColor} />
              <Title>{props.title}</Title>
            </TextContainer>
            <IconContainer>
              <CaretRight size={14} />
            </IconContainer>
          </Content>
          <Separator />
        </Wrapper>
      </NavLink>
    </ItemContainer>
  )
}
