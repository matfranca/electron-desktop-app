import styled from 'styled-components'
import { shade } from 'polished'

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`

  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
`
export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  flex-direction: column;


  p {
    color: #000;
  }
`

export const LogoImg = styled.img`
  width: 400px;
  margin-bottom: 20px;
`

export const Button = styled.button`
  margin: 30px 10px;
  width: 120px;
  height: 40px;
  background: #a8a8b3;
  transition: background-color 10.2s;
  border: 0;

  &:hover{
    background: ${shade(-0.2, '#000')}
  }
`
