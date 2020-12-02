import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/Layout"
import * as S from "../components/styles"

const Form = styled.form`
  border: 1px solid #dedede;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 1.5rem;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`
const Center = styled.div`
  text-align: center;
`

const Label = styled.label`
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: 0;
  font-weight: 600;
`
const Span = styled.span`
  color: #e44232;
`

const TextArea = styled.textarea`
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  padding: 14px 1rem;
  width: 100%;
  height: 100px;
  resize: vertical;
  font-size: 0.75rem;
  line-height: 1.5;
  letter-spacing: 0;
  font-weight: 400;
  outline: 0;
`

export default () => (
  <Layout>
    <Center>
      <S.H1>Contact me</S.H1>
    </Center>
    <Form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="Contact Form"
      action="/thank-you"
    >
      <input type="hidden" name="form-name" value="Contact Form" />
      <Column>
        <Label>
          Email<Span>*</Span>
        </Label>
        <input type="email" name="email" />
      </Column>
      <Column>
        <Label>
          Name <Span>*</Span>
        </Label>
        <input type="text" name="name" />
      </Column>
      <Column>
        <Label>
          Message <Span>*</Span>
        </Label>
        <TextArea type="text" name="message" />
      </Column>
      <br />
      <S.Button type="submit">Send me that message</S.Button>
    </Form>
  </Layout>
)
