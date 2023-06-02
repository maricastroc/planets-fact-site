import styled from 'styled-components'

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  @media (min-width: 698px) {
    display: none;
  }
`

export const Theme = styled.h3`
  font-size: 0.56rem;
  text-transform: uppercase;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  letter-spacing: 0.1rem;
`

export const Target = styled.span`
  margin-top: 1rem;
  height: 0.25rem;
  background-color: transparent;

  &.active {
    height: 0.25rem;

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
`
