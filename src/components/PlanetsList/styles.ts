import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.75rem 0 0;
  padding: 0 1.5rem;
  width: 100%;

  @media (min-width: 698px) {
    display: none;
  }
`
