import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 1.25rem;

  a {
    width: 100%;
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};

    &:focus {
      box-shadow: none;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IconContainer = styled.div`
  svg {
    color: ${(props) => props.theme['base-text']};
    opacity: 0.5;
  }
`

export const TextContainer = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: flex-end;
  justify-content: flex-start;
`

export const Title = styled.h2`
  font-size: 0.94rem;
  font-family: 'Spartan', sans-serif;
  line-height: 90%;
  font-weight: 700;
  text-transform: uppercase;
`

export const Label = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  &.mercury-label {
    background-color: ${(props) => props.theme['mercury-color']};
  }

  &.venus-label {
    background-color: ${(props) => props.theme['venus-color']};
  }

  &.earth-label {
    background-color: ${(props) => props.theme['earth-label']};
  }

  &.mars-label {
    background-color: ${(props) => props.theme['mars-label']};
  }

  &.jupiter-label {
    background-color: ${(props) => props.theme['jupiter-label']};
  }

  &.saturn-label {
    background-color: ${(props) => props.theme['saturn-label']};
  }

  &.uranus-label {
    background-color: ${(props) => props.theme['uranus-label']};
  }

  &.neptune-label {
    background-color: ${(props) => props.theme['neptune-label']};
  }
`

export const Separator = styled.span`
  width: 100%;
  height: 0.015rem;
  background-color: ${(props) => props.theme['dark-gray']};
  opacity: 0.8;
`
