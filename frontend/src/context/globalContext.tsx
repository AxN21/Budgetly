import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import { getIncomes, addIncome } from '../api';

interface Income {
    title: string;
    amount: number;
    /*date: Date;*/
    category: string;
    description: string;
}

export interface GlobalContextType {
    incomes: Income[];
    addIncome: (income: Income) => Promise<void>;
    error: string | null;
}

export const GlobalContext = createContext<GlobalContextType>({
    incomes: [],
    addIncome: async () => {},
    error: null,
});

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [incomes, setIncomes] = useState<Income[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchIncomes = async () => {
            try {
                const data = await getIncomes();
                setIncomes(data);
            } catch (err) {
                setError('Failed to fetch incomes');
            }
        };
        fetchIncomes();
    }, []);

    const addIncomeHandler = async (income: Income) => {
        try {
            console.log("Adding income: ", income)
            const newIncome = await addIncome(income);
            setIncomes([...incomes, newIncome]);
        } catch (err) {
            console.error("Error adding income: ", err)
            setError('Failed to add income');
        }
    };


    return (
        <GlobalContext.Provider
            value={{
                incomes,
                addIncome: addIncomeHandler,
                error
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
    
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};