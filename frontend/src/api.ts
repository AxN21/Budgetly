
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

export const getIncomes = async () => {
  const response = await axios.get(`${BASE_URL}incomes`);
  return response.data;
};

export const addIncome = async (income: { title: string; amount: number; /*date: Date;*/ category: string; description: string }) => {
  const response = await axios.post(`${BASE_URL}incomes`, income);
  return response.data;
};
