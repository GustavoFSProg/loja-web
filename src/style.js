// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  /* margin: 32px auto; */
  background: white;
  justify-content: center;
  display: flex;
`
export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: -22px;
`

export const ContainerLista = styled.div`
  background: #f2f2f2;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  border: 1px solid #d9d9d9;
`
export const Lista = styled.ul`
  text-decoration: none;
  color: black;
  font-family: arial;
  font-size: 15px;
  /* margin-left: 10px; */
`
export const ListaUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`
