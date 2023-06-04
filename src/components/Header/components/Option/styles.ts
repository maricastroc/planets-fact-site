import styled from 'styled-components'

export const OptionContainer = styled.p`
  position: relative;
  display: none;
  font-size: 0.65rem;
  font-family: 'Spartan', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  opacity: 0.7;
  letter-spacing: 0.06rem;
  transition: 300ms;

  &:hover,
  &.active {
    opacity: 1;

    &::before {
      content: ''; /* Adicione o conteúdo vazio para que o pseudo-elemento seja renderizado */
      position: absolute;
      top: 29px; /* Ajuste a distância desejada da linha superior */
      left: 0;
      width: 100%;
      height: 3px;
      background-color: transparent;
    }

    &.mercury {
      &::before {
        background-color: ${(props) => props.theme['mercury-color']};
      }
    }

    &.venus {
      &::before {
        background-color: ${(props) => props.theme['venus-color']};
      }
    }

    &.earth {
      &::before {
        background-color: ${(props) => props.theme['earth-color']};
      }
    }

    &.mars {
      &::before {
        background-color: ${(props) => props.theme['mars-color']};
      }
    }

    &.jupiter {
      &::before {
        background-color: ${(props) => props.theme['jupiter-color']};
      }
    }

    &.saturn {
      &::before {
        background-color: ${(props) => props.theme['saturn-color']};
      }
    }

    &.uranus {
      &::before {
        background-color: ${(props) => props.theme['uranus-color']};
      }
    }

    &.neptune {
      &::before {
        background-color: ${(props) => props.theme['neptune-color']};
      }
    }
  }

  @media (min-width: 698px) {
    display: flex;
  }

  @media (min-width: 1015px) {
    &:hover,
    &.active {
      opacity: 1;

      &::before {
        height: 5px;
        top: -45px; /* Ajuste a distância desejada da linha superior */
      }
    }
  }
`
