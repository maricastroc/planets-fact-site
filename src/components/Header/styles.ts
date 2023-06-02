import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;

  @media (min-width: 698px) {
    justify-content: center;
    padding: 1.5rem 1.5rem 1rem;
  }
`

export const Heading = styled.h1`
  font-size: 1.75rem;
  font-family: 'Antonio', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
`
export const IconContainer = styled.div`
  svg {
    cursor: pointer;
    transition: 200ms;
    color: ${(props) => props.theme['base-text']};

    &:hover,
    &.active {
      color: ${(props) => props.theme['light-gray']};
    }
  }

  @media (min-width: 698px) {
    display: none;
  }
`
export const Separator = styled.span`
  width: 100%;
  height: 0.015rem;
  background-color: ${(props) => props.theme['dark-gray']};
  opacity: 0.8;

  @media (min-width: 698px) {
    display: none;
  }
`

export const DesktopPlanetsContainer = styled.div`
  display: none;
  gap: 2.05rem;
  width: 100%;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};

    &:focus {
      box-shadow: none;
    }
  }

  @media (min-width: 698px) {
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
  }
`
