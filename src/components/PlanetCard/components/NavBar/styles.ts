import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1.5rem;
  gap: 2.3rem;
`

export const Separator = styled.span`
  width: 100%;
  height: 0.01rem;
  background-color: ${(props) => props.theme['dark-gray']};
  opacity: 0.8;
`
