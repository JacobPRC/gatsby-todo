import React, { useState } from "react"
import styled from "styled-components"

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

export default ({ cancel }) => {
  const [todo, setTodo] = useState([])
  return (
    <>
      <Box
        onChange={e => setTodo([{ done: false, value: e.target.value }])}
        placeholder="e.g Hire Jacob Cunningham at 6pm p1 #Errands"
        value={todo.value}
      ></Box>
      <S.Button
        onClick={() => {
          console.log(todo)
          setTodo([])
          console.log(todo)
        }}
      >
        Add Task
      </S.Button>
      <S.Button onClick={cancel}>Cancel</S.Button>
    </>
  )
}
