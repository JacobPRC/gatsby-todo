import React, { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import styled from "styled-components"

const deleteTodo = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      _id
    }
  }
`

const TrashIcon = styled.span`
  cursor: pointer;
  padding-left: 2%;
`

const Label = styled.label`
  padding-left: 2%;
`

export default ({ id, text }) => {
  const [done, setDone] = useState(false)
  const [destroyTodo] = useMutation(deleteTodo)

  const deleteItem = () => {
    destroyTodo({ variables: { id } })
    window.location.reload(false)
  }

  const isDone = () => {
    if (done)
      return (
        <Label htmlFor="todo">
          <del>{text}</del>
          <TrashIcon onClick={() => deleteItem()}>🗑️</TrashIcon>
        </Label>
      )
    return <Label htmlFor="todo">{text}</Label>
  }

  return (
    <div>
      <input
        onClick={() => setDone(!done)}
        type="checkbox"
        key={id}
        name="todo"
      />
      {isDone()}
    </div>
  )
}
