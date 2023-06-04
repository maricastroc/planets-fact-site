import styled from 'styled-components'

export const Container = styled.section`
  max-width: 100vw;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 698px) {
    gap: 7rem;
  }

  @media (min-width: 1015px) {
    flex-direction: row;
    gap: clamp(3rem, 8vw, 7rem);
  }
`

export const ImageContainer = styled.div`
  position: relative;

  img {
    width: 11.5rem;
    height: auto;
  }

  @media (min-width: 698px) {
    img {
      width: 23rem;
      height: auto;
    }
  }

  @media (min-width: 1015px) {
    img {
      width: clamp(28rem, 43vw, 30rem);
      height: auto;
    }
  }
`

export const ImageContainerSurface = styled.div`
  position: absolute;
  left: 26%;
  top: 58%;

  img {
    width: 5.5rem;
    height: auto;
  }

  @media (min-width: 698px) {
    left: 33%;
    top: 70%;

    img {
      width: 8rem;
      height: auto;
    }
  }

  @media (min-width: 1015px) {
    left: 36%;
    top: 73%;

    img {
      width: 8.5rem;
      height: auto;
    }
  }
`

export const TextWrapper = styled.div`
  display: flex;

  @media (min-width: 698px) {
    display: flex;
    flex-direction: row;
    gap: 4.375rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
  }

  @media (min-width: 1015px) {
    flex-direction: column;
    gap: 2.5rem;
    width: clamp(25rem, 40vw, 28rem);
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  max-width: 85vw;

  @media (min-width: 698px) {
    text-align: left;
    width: 100%;
  }
`

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-family: 'Antonio', sans-serif;
  font-weight: 500;
  text-transform: uppercase;

  @media (min-width: 1015px) {
    font-size: 5rem;
  }
`

export const Paragraph = styled.p`
  font-size: 0.7rem;
  line-height: 200%;
  font-family: 'Spartan', sans-serif;
  font-weight: 400;
  opacity: 0.7;

  @media (min-width: 698px) {
    font-size: 0.75rem;
  }

  @media (min-width: 1015px) {
    font-size: 0.875rem;
    opacity: 0.8;
  }
`

export const Source = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-family: 'Spartan', sans-serif;
  opacity: 0.6;

  p {
    opacity: 0.6;
  }

  @media (min-width: 698px) {
    font-size: 0.75rem;
    align-items: start;
    justify-content: flex-start;
  }

  @media (min-width: 1015px) {
    font-size: 0.875rem;
  }
`

export const SourceLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  a {
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
    margin-left: 0.5rem;

    &:focus {
      box-shadow: none;
    }
  }

  svg {
    color: ${(props) => props.theme['base-text']};
    margin-top: -0.15rem;
  }
`

export const ButtonsContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 698px) {
    display: flex;
    cursor: pointer;
    width: 100%;
  }
`
