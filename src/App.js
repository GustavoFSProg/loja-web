import React, { useState } from 'react'
import api from './services/api'
import {
  ContainerImg,
  Container,
  ContainerLista,
  Lista,
  BodyContainer,
  ContainerData,
} from './style'

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
                <ContainerImg>
                  <img
                    style={{ width: '25%' }}
                    src={`https://loja-sistem.herokuapp.com/files/${list.image}`}
                    alt="imagem"
                  />

                  <ContainerData>
                    <Lista>
                      <strong>Produto: </strong>
                      {list.title}
                    </Lista>
                    <Lista>
                      <strong>Descrição: </strong>
                      {list.description}
                    </Lista>
                    <Lista>
                      <strong>Preço: </strong>
                      {list.price}
                    </Lista>
                  </ContainerData>
                </ContainerImg>
              </ContainerLista>
            </ul>
          )
        })}

       
      </BodyContainer>
    </Container>
  )
}

export default App
