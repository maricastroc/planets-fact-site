import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.2);
  padding: 0.9rem 0.95rem;
  width: 100%;

  @media (min-width: 698px) {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 0.68rem;
  }

  @media (min-width: 1015px) {
    padding: 1.25rem 1.25rem;
    width: clamp(10rem, 20vw, 13.1rem);
  }
`

export const Paragraph = styled.p`
  text-transform: uppercase;
  font-size: 0.5rem;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  opacity: 0.5;

  @media (min-width: 1015px) {
    font-size: 0.65rem;
  }
`

export const Heading = styled.h2`
  text-transform: uppercase;
  font-size: 1.25rem;
  font-family: 'Antonio', sans-serif;
  font-weight: 500;

  @media (min-width: 698px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1015px) {
    font-size: 2rem;
  }
`
