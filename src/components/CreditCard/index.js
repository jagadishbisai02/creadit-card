// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  CardHeading,
  Card,
  DetailContainer,
  Heading,
  Input,
  InputContainer,
  CardNumber,
  HolderName,
  CardholderTitle,
  CardholderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')

  return (
    <MainContainer>
      <CardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <Card data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <HolderName>
            <CardholderTitle>CARDHOLDER NAME</CardholderTitle>
            <CardholderName>{cardholderName.toUpperCase()}</CardholderName>
          </HolderName>
        </Card>
      </CardContainer>
      <DetailContainer>
        <InputContainer>
          <Heading>Payment Method</Heading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={event => setCardNumber(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardholderName}
            onChange={event => setCardholderName(event.target.value)}
          />
        </InputContainer>
      </DetailContainer>
    </MainContainer>
  )
}

export default CreditCard
