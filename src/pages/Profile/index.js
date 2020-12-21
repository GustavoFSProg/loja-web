import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import {
  ContainerImg,
  Container,
  ContainerLista,
  Lista,
  BodyContainer,
  ContainerData,
  TextContainer,
} from './style'

function Profile() {
  const [lista, setLista] = useState([])

  // const history = useHistory()

  async function getById() {
    const id = localStorage.getItem('ID')

    console.log(`id: ${id}`)

    // const { data } = await api.get(`/`)
    const { data } = await api.get(`/find/${id}`)

    setLista(data)

    console.log(data)

    return lista
  }

  useEffect(() => {
    getById()
  })
  return (
    <>
      <Container>
        <BodyContainer>
          <TextContainer>
            <h2>Loja Virtual</h2>
          </TextContainer>

          <ul key={lista._id}>
            <ContainerLista>
              <ContainerImg>
                <img
                  style={{ width: '25%' }}
                  src={`https://loja-sistem.herokuapp.com/files/${lista.image}`}
                  alt="imagem"
                />

                <ContainerData>
                  <Lista>
                    <strong>Produto: </strong>
                    {lista.title}
                  </Lista>
                  <Lista>
                    <strong>Descrição: </strong>
                    {lista.description}
                  </Lista>
                  <Lista>
                    <strong>Preço: </strong>
                    {lista.price}
                  </Lista>
                </ContainerData>
              </ContainerImg>
            </ContainerLista>
          </ul>
        </BodyContainer>
      </Container>
    </>
  )
}

export default Profile
