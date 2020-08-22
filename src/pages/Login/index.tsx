import React from 'react'

import { Container, Form, LogoImg, Button } from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <LogoImg src="https://t4.ftcdn.net/jpg/03/21/89/37/240_F_321893740_vIrKnY5dYwFbpMM9gVf9u5Cjepz8YamK.jpg"
        alt="App Logo"/>
      <Form>
        <input type="username" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <p>forget password</p>
      </Form>
      <Button>Log In</Button>
    </Container>
  )
}

export default Login
