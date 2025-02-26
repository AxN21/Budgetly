import React, { useState } from 'react'
import styled from 'styled-components'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useGlobalContext } from '../context/globalContext';
import Button from './Button';
import { PlusIcon } from '../utils/icons';

interface InputStateType {
    title: string;
    amount: number;
    /*date: Date; */
    category: string;
    description: string;
}


function Form() {
  
    const {addIncome} = useGlobalContext();

    const [inputState, setInputState] = useState<InputStateType>({
        title: '',
        amount: 0,
        /*date: new Date(),*/
        category: '',
        description: '',
    })

    const { title, amount, /*date,*/ category, description } = inputState;

    const handleInput = (name: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setInputState({...inputState, [name]: e.target.value});
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        /*const formattedDate = date.toISOString().split('T')[0];*/

        const dataToSend = {
            title,
            amount: Number(amount),
            /*date: formattedDate,*/
            category,
            description
        };

        console.log("Submitting data: ", dataToSend



        )

        try {
            await addIncome(dataToSend)
        } catch (error) {
            console.log('Error sending data: ', error)
        }
    };

    return (
    <FormStyled onSubmit={handleSubmit}>
        <div className="input-control">
            <input 
                type="text"
                value={title}
                name={'title'}
                placeholder='Salary Title'
                onChange={handleInput('title')}
                />
        </div>
        <div className="input-control">
            <input value={amount}
                name={'amount'}
                placeholder={'Salary Amount'}
                onChange={handleInput('amount')}
                />
        </div>

        <div className="selects input-control">
            <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                <option value="" disabled >Select Option</option>
                <option value="salary">Salary</option>
                <option value="freelancing">Freelancing</option>
                <option value="investments">Investments</option>
                <option value="stocks">Stocks</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="bank">Bank Transfer</option>
                <option value="youtube">Youtube</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="input-control">
            <textarea name="description" value={description} placeholder='Add A Reference' id='description' cols={30} rows={4} onChange={handleInput('description')}></textarea>
        </div>
        <div className="submit-btn">
            <Button
                name={'Add Income'}
                icon={<PlusIcon />}
                bPad={'.8rem 1.6rem'}
                bRad={'30px'}
                bg={'var(--color-accent)'}
                color={'#fff'}            
            />
        </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }
    
    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }
    
    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default Form