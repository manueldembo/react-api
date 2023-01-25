import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    cagory: string
    createdAt: string
}

interface TransactionContextType {
    transactions: Transaction[];
}

interface TransactionContextPorps {
    children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider ({children}: TransactionContextPorps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() {
        const response = await fetch("http://localhost:3000/transaction")
        const data = await response.json()

        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions();
    }, [])
    
    return (
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )

}