import React, { useContext, useState } from "react"
import styled from "styled-components"
import { gql, useQuery, useMutation } from "@apollo/client"

import { IdentityContext } from "../../identity-context"
import Layout from "../components/Layout/Layout"
import TodoBox from "../components/client/AddTodoBox"

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

const UPDATE_TODO_DONE = gql`
  mutation UpdateTodoDone($id: ID!) {
    updateTodoDone(id: $id) {
      text
      done
    }
  }
`

export default props => {
  const { user } = useContext(IdentityContext)
  const [clicked, setClicked] = useState(false)
  const { loading, error, data, refetch } = useQuery(GET_TODOS, {
    variables: { owner: props.location.state.user || user.id },
  })

  if (loading) return <div>Loading</div>
  if (error) return <div>{error.message}</div>

  const renderTodos = () =>
    data.todosByUser.data.map(item => {
      return <li key={item._id}>{item.text}</li>
    })

  const clickCheck = () => {
    if (clicked) return <TodoBox cancel={() => setClicked(!clicked)} />

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
          <ul>{renderTodos()}</ul>
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
