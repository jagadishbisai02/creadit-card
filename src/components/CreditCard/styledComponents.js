// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`
export const CardHeading = styled.h1`
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 53px;
  color: #ffffff;
  text-decoration: underline #ffd773;
`

export const CardNumber = styled.h1`
  color: #d3d9e0;
  font-size: 25px;
  font-family: 'Roboto';
`

export const HolderName = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardholderTitle = styled.p`
  color: #d3d9e0;
  font-size: 16px;
  font-family: 'Roboto';
  margin-bottom: 0px;
`

export const CardholderName = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
`

export const CardContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #3b4b69;
  padding: 10px 20px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 356px;
  height: 209px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #344e7a;
  padding: 36px 43px;
`

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 53px;
  color: #3b4b69;
`

export const DetailContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
`

export const Input = styled.input`
  border: 1px solid #c3cad9;
  width: 240px;
  height: 30px;
  margin: 9px;
  outline: none;
  padding: 0px 13px;
  font-size: 13px;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  width: 450px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: #ffffff;
  box-shadow: 7px 7px 25px #c3cad9;
  border-radius: 5px;
`
