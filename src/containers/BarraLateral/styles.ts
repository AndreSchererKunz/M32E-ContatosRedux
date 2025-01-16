import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: green;
  height: 100vh;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 16px;

  h1 {
    font-family: 'Roboto Mono', sans-serif;
    color: ${variaveis.preto};
  }

  img {
    height: 4em;
  }
`
