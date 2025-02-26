import React from 'react'
import styled from 'styled-components'
import { AccountsIcon, BitcoinIcon, BookIcon, CircleIcon, ClothingIcon, CommentIcon, DollarIcon, FoodIcon, FreelanceIcon, MedicalIcon, MoneyIcon, PiggyIcon, StocksIcon, TakeawayIcon, TrashIcon, TvIcon, YouTubeIcon } from '../utils/icons';
import Button from './Button';

interface IncomeItemType {
    title: string;
    amount: number;
    category: string;
    description: string;
    deleteItem: () => void;
    indicatorColor: string;
    type: () => void;
}


function IncomeItem({
    title,
    amount,
    category,
    description,
    deleteItem,
    indicatorColor,
    type }: IncomeItemType) {
  
  
    const categoryIcon = () => {
        switch(category) {
            case 'salary':
                return MoneyIcon;
            case 'freelancing':
                return FreelanceIcon;
            case 'investment':
                return StocksIcon;
            case 'stocks':
                return StocksIcon;
            case 'bitcoin':
                return BitcoinIcon;
            case 'bank':
                return AccountsIcon;
            case 'youtube':
                return YouTubeIcon;
            case 'other':
                return PiggyIcon;
            default:
                return ''

        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return BookIcon;
            case 'groceries':
                return FoodIcon;
            case 'health':
                return MedicalIcon;
            case 'subscriptions':
                return TvIcon;
            case 'takeaways':
                return TakeawayIcon;
            case 'clothing':
                return ClothingIcon;
            case 'travelling':
                return FreelanceIcon;
            case 'other':
                return CircleIcon;
            default:
                return ''
        }
    }

    return (
    <IncomeItemStyled indicator={indicatorColor}>
        <div className="icon">

        </div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <div className="text">
                    <p>{<DollarIcon />} {amount}</p>
                    <p>
                        {<CommentIcon />}
                        {description}
                    </p>
                </div>
                <div className="btn-con">
                    <Button
                        name={'Delete'}
                        icon={<TrashIcon />}
                        bPad={'1rem'}
                        bRad={'50%'}
                        bg={'var(--color-green)'}
                        color={'#fff'}
                    />
                </div>
            </div>
        </div>
    </IncomeItemStyled>
  )
}

const IncomeItemStyled = styled.div<{ indicator: string }>`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;

    icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }
    
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default IncomeItem