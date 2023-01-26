import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

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
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionContextPorps {
    children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider ({children}: TransactionContextPorps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query ?: string) {
        const response = await api.get('transaction', {
            params: {
                q: query
            }
        })

        setTransactions(response.data)
    }

    useEffect(() => {
        fetchTransactions();
    }, [])
    
    return (
        <TransactionContext.Provider value={{
            transactions,
            fetchTransactions,
        }}>
            {children}
        </TransactionContext.Provider>
    )

}