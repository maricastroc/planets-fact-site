import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1015px) {
    width: 100vw;
    padding: 1.5rem 3rem 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
  }
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

  @media (min-width: 1015px) {
    width: 100vw;
    padding: 0;
  }
`

export const Heading = styled.h1`
  font-size: 1.75rem;
  font-family: 'Antonio', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 698px) {
    text-align: center;
  }

  @media (min-width: 1015px) {
    max-width: 100vw;
    text-align: left;
  }
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
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  @media (min-width: 1015px) {
    margin-top: 1rem;
    align-self: center;
    justify-content: flex-end;
    max-width: 100vw;
    margin-bottom: 0;
  }
`
