import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";
import { priceFormater } from "../../utils/formater";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionContext)

    const summary = transactions.reduce(
        (acc, transaction) => {
            if(transaction.type === 'income'){
                acc.income += transaction.price
                acc.total += transaction.price
            } else {
                acc.outcome += transaction.price
                acc.total -= transaction.price
            }

            return acc
        }, 
        {
            income: 0,
            outcome: 0,
            total: 0
        }
    )

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>

                <strong>{priceFormater.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>{priceFormater.format(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard  variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>{priceFormater.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}