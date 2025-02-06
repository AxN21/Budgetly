import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';

function Transactions() {
  return (
    <TransactionsStyled>
        <InnerLayout>
            <h1>Transaction</h1>
        </InnerLayout>
    </TransactionsStyled>
  )
}

const TransactionsStyled = styled.div`

`;

export default Transactions