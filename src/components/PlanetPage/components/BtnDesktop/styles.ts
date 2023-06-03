import styled from 'styled-components'

export const Button = styled.button`
  display: none;
  padding: 0.8rem 1.25rem;
  background-color: transparent;
  color: ${(props) => props.theme['base-text']};
  text-align: left;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.2);

  @media (min-width: 698px) {
    cursor: pointer;
    display: flex;

    &.active {
      border: 1px solid;
      border-color: rgba(255, 255, 255, 0.8);

      &.mercury {
        background-color: ${(props) => props.theme['mercury-color']};
      }

      &.venus {
        background-color: ${(props) => props.theme['venus-color']};
      }

      &.earth {
        background-color: ${(props) => props.theme['earth-color']};
      }

      &.mars {
        background-color: ${(props) => props.theme['mars-color']};
      }

      &.jupiter {
        background-color: ${(props) => props.theme['jupiter-color']};
      }

      &.saturn {
        background-color: ${(props) => props.theme['saturn-color']};
      }

      &.uranus {
        background-color: ${(props) => props.theme['uranus-color']};
      }

      &.neptune {
        background-color: ${(props) => props.theme['neptune-color']};
      }
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  text-transform: uppercase;
`

export const Number = styled.p`
  font-size: 0.56rem;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  letter-spacing: 0.15rem;
  opacity: 0.5;
`

export const Label = styled.p`
  font-size: 0.55rem;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  letter-spacing: 0.15rem;
  opacity: 0.9;
`
