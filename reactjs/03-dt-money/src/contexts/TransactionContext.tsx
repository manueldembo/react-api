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
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionContextPorps {
    children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider ({children}: TransactionContextPorps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query ?: string) {
        const url = new URL("http://localhost:3000/transaction");

        query && url.searchParams.append('q', query);

        const response = await fetch(url)
        const data = await response.json()

        setTransactions(data)
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