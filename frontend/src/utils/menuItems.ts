import { DashboardIcon, ExpensesIcon, TransactionsIcon, TrendIcon } from "./icons";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: DashboardIcon,
        link: '/dashboard'
    },
    {
        id: 2,
        title: 'View Transactions',
        icon: TransactionsIcon,
        link: '/dashboard'
    },
    {
        id: 3,
        title: 'Incomes',
        icon: TrendIcon,
        link: '/dashboard'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: ExpensesIcon,
        link: '/dashboard'
    },
]