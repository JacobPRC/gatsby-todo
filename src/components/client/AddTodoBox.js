import React, { useState } from "react"
import styled from "styled-components"
import { gql, useMutation } from "@apollo/client"

import * as S from "../styles"

const Box = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 10px 0;
  cursor: text;
  font-size: 14px;
  resize: none;
  width: 100%;
  height: 4rem;
`

const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      id
    }
  }
`

export default ({ cancel, refetch }) => {
  const [todo, setTodo] = useState()
  const [todos, setTodos] = useState([])
  const [addTodo] = useMutation(ADD_TODO)

  const submission = e => {
    e.preventDefault()
    addTodo({ variables: { text: todo } })
  }
  return (
    <>
      <Box
        onChange={e => setTodo(e.target.value)}
        placeholder="e.g Hire Jacob Cunningham at 6pm p1 #Errands"
        value={todo}
      ></Box>
      <S.Button onClick={e => submission(e)}>Add Task</S.Button>
      <S.Button onClick={cancel}>Cancel</S.Button>
    </>
  )
}
