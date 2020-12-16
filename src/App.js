import React, { useEffect, useState } from 'react'
import api from './services/api'

function App() {
  const [lista, setLista] = useState([])

  async function getAll() {
    const { data } = await api.get('/')

    setLista(data)

    console.log(`Lista: ${lista}`)
    return lista
  }

  getAll()

  // useEffect(() => {
  //   getAll()
  // })
  return (
    <div className="App">
      <header className="App-header">
        {lista.map((list) => {
          return (
            <ul key={list.id}>
              <li>{list.title}</li>
              <li>{list.description}</li>
              <li>{list.title}</li>
              <img
                style={{ width: '18%' }}
                src={`http://localhost:3001/files/${list.image}`}
                alt="imagem"
              />
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
      </header>
    </div>
  )
}

export default App
