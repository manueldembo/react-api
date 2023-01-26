import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SeacrchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SeacrchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SeacrchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function hadleSeachTransactions(data: SeacrchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SeacrchFormContainer onSubmit={handleSubmit(hadleSeachTransactions)}>
      <input placeholder="Buscar por transações" {...register('query')} />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SeacrchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)