import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.div`
  position: relative;

  img {
    width: 11.5rem;
    height: auto;
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
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1.5rem;
  max-width: 100vw;
  padding: 0 1.5rem;
`

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-family: 'Antonio', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
`

export const Paragraph = styled.p`
  font-size: 0.7rem;
  line-height: 200%;
  font-family: 'Spartan', sans-serif;
  font-weight: 400;
  opacity: 0.7;
`

export const Source = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-family: 'Spartan', sans-serif;
  opacity: 0.6;
  margin-top: 2rem;

  p {
    opacity: 0.6;
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
