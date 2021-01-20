import styled from "styled-components"

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const Box = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 10px 0;
  cursor: text;
  font-size: 14px;
  resize: none;
  width: 100%;
  height: 4rem;
`

export const Conatiner = styled.div`
  padding-left: 55px;
  padding-right: 55px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

export const PlusButton = styled.button`
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
export const Circle = styled.div`
  color: #dd4b39;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  text-align: center;
  font-size: 1rem;
`
