import React, { useContext, useState } from "react"
import styled from "styled-components"
import { gql, useQuery, useMutation } from "@apollo/client"
import netlifyIdentity from "netlify-identity-widget"

import { IdentityContext } from "../../identity-context"
import Layout from "../components/Layout/Layout"
import Item from "../components/client/Item"
import * as S from "../components/styles"

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
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

const Conatiner = styled.div`
  padding-left: 55px;
  padding-right: 55px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const PlusButton = styled.button`
  text-decoration: none;
  text-align: left;
  width: 100%;
  margin-left: -2px;
  padding: 0 0 8px;
  color: grey;
  font-size: 14px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;

  &:hover {
    color: #dd4b39;
  }

  &:hover .plus-icon {
    color: #fff;
    background-color: #dd4b39;
  }

  &:focus {
    border: none;
  }
`
const Circle = styled.div`
  color: #dd4b39;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  text-align: center;
  font-size: 1rem;
`

const GET_TODOS = gql`
  query TodosByUser($owner: String!) {
    todosByUser(owner: $owner) {
      data {
        _id
        text
        owner
      }
    }
  }
`
const ADD_TODO = gql`
  mutation CreateTodo($text: String!, $user: String!) {
    createTodo(data: { text: $text, owner: $user }) {
      _id
    }
  }
`

export default () => {
  const { user } = useContext(IdentityContext)
  const [clicked, setClicked] = useState(false)
  const forProd = !user ? "error" : user.id
  const { loading, error, data, refetch } = useQuery(GET_TODOS, {
    variables: { owner: forProd },
  })

  if (loading) return <div>Loading</div>
  if (error) return <div>{error.message}</div>

  const renderTodos = () =>
    data.todosByUser.data.map(item => (
      <Item
        refetch={() => refetch()}
        key={item._id}
        id={item._id}
        text={item.text}
      />
    ))

  const clickCheck = () => {
    const TodoBox = () => {
      const [todo, setTodo] = useState()
      const [addTodo] = useMutation(ADD_TODO)

      const user = netlifyIdentity.currentUser()

      const submission = e => {
        e.preventDefault()
        addTodo({ variables: { text: todo, user: user.id } })
        setClicked(!clicked)
        refetch()
      }

      return (
        <>
          <Box
            onChange={e => setTodo(e.target.value)}
            placeholder="e.g Hire Jacob Cunningham at 6pm p1 #Errands"
            value={todo}
            onKeyDown={e => (e.key === "Enter" ? submission(e) : null)}
          ></Box>
          <S.Button onClick={e => submission(e)}>Add Task</S.Button>
          <S.Button onClick={() => setClicked(!clicked)}>Cancel</S.Button>
        </>
      )
    }

    if (clicked) {
      refetch()
      return <TodoBox />
    }

    if (!clicked) {
      refetch()
      return (
        <>
          <PlusButton onClick={() => setClicked(!clicked)}>
            <Circle className="plus-icon">
              <span>+</span>
            </Circle>{" "}
            Add task
          </PlusButton>
          <Column>{renderTodos()}</Column>
        </>
      )
    }
  }
  return (
    <Layout>
      <h1>Hello {user.user_metadata.full_name}</h1>
      <Conatiner>{clickCheck()}</Conatiner>
    </Layout>
  )
}
