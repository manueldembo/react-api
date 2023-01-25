import { createContext, useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/TransactionContext";
import { PrinceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    const { transactions } = useContext(TransactionContext);

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width='50%'>{transaction.description}</td>
                                    <td>
                                        <PrinceHighlight variant={transaction.type}>
                                            {transaction.price}
                                        </PrinceHighlight>
                                    </td>
                                    <td>{transaction.cagory}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                       
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}