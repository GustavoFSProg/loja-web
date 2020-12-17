import React, { useState } from 'react'
import api from './services/api'
import { Container, ContainerLista, Lista, BodyContainer } from './style'

function App() {
  const [lista, setLista] = useState([])

  async function getAll() {
    const { data } = await api.get('/')

    setLista(data)

    console.log(`Lista: ${lista}`)
    return lista
  }

  getAll()

  return (
    <Container>
      <BodyContainer>
        {lista.map((list) => {
          return (
            <ul key={list.id}>
              <ContainerLista>
                <img
                  style={{ width: '25%' }}
                  src={`https://loja-sistem.herokuapp.com/files/${list.image}`}
                  alt="imagem"
                />

                <Lista>{list.title}</Lista>
                <Lista>{list.description}</Lista>
                <Lista>{list.title}</Lista>
              </ContainerLista>
            </ul>
          )
        })}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </BodyContainer>
    </Container>
  )
}

export default App
