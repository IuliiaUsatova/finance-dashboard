export interface User {
    id: number,
    name: string,
    email: string
}

export interface Transaction {
    id: number,
    sum: number,
    category: string,
    date: Date,
    type: 'income' | 'expense',
    description: string
}

export interface Category {
    id: number,
    name: string,
    color: string,
    icon: string
}