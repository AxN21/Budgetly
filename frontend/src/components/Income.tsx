import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import Form from './Form';
import { useGlobalContext } from '../context/globalContext';
import IncomeItem from './IncomeItem';



interface IncomeType {
  title: string;
  amount: number;
  /*date: Date;*/
  category: string;
  description: string;
}

function Income() {

  const {addIncome, incomes} = useGlobalContext()

  return (
    <IncomeStyled>
      <InnerLayout>
          <h1>Income</h1>
          <div className="income-content">
            <div className="form-container">
              <Form />
            </div>
            <div className="incomes">
              {incomes.map((income) => {
                const { title, amount, category, description} = income;
                return <IncomeItem
                  key={title}
                  title={title}
                  description={description}
                  amount={amount}
                  category={category}
                  indicatorColor='var(--color-green)'
                  deleteItem={() => {}}
                  type={() => {}}
                />
              })}
            </div>
          </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .income-content{
      display: flex;
      gap: 2rem;
      .incomes{
        flex: 1;
      }
    }
`;

export default Income