import React, { useContext, useState } from "react"
import { gql, useQuery, useMutation } from "@apollo/client"
import netlifyIdentity from "netlify-identity-widget"

import { IdentityContext } from "../../identity-context"
import Layout from "../components/Layout/Layout"
import Item from "../components/client/Item"
import * as S from "../components/styles"
import * as AS from "../components/PageStyles/app-styles"

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
      <Item key={item._id} id={item._id} text={item.text} />
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
          <AS.Box
            onChange={e => setTodo(e.target.value)}
            placeholder="e.g Hire Jacob Cunningham at 6pm p1 #Errands"
            value={todo}
            onKeyDown={e => (e.key === "Enter" ? submission(e) : null)}
          ></AS.Box>
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
          <AS.PlusButton onClick={() => setClicked(!clicked)}>
            <AS.Circle className="plus-icon">
              <span>+</span>
            </AS.Circle>{" "}
            Add task
          </AS.PlusButton>
          <AS.Column>{renderTodos()}</AS.Column>
        </>
      )
    }
  }
  return (
    <Layout>
      <h1>Hello {user.user_metadata.full_name}</h1>
      <AS.Conatiner>{clickCheck()}</AS.Conatiner>
    </Layout>
  )
}
