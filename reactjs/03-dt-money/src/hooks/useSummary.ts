import { Context, useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
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
      total: 0,
    },
  )

  return summary
}
function useCotnextSelector(
  TransactionContext: Context<TransactionContextType>,
): { transactions: any } {
  throw new Error('Function not implemented.')
}
