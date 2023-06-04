import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 20px;
  padding: 0 1.5rem;

  p {
    margin-top: 1rem;
    font-size: 0.65rem;
    font-family: 'Spartan', sans-serif;
    color: ${(props) => props.theme['base-footer']};
    opacity: 0.6;
  }

  a {
    font-family: 'Spartan', sans-serif;
    opacity: 1;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.65rem;
    font-weight: 700;
    text-decoration: none;
  }

  @media (min-width: 1015px) {
    p,
    a {
      font-size: 0.7rem;
    }
  }
`
