import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SeacrchFormContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";

const searchFormSchema = z.object({
    query: z.string(),
})

type SeacrchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm( ) {
    const { fetchTransactions } = useContext(TransactionContext)

    const {
        register, 
        handleSubmit,
        formState: {isSubmitting}} = useForm<SeacrchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function hadleSeachTransactions(data: SeacrchFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <SeacrchFormContainer onSubmit={handleSubmit(hadleSeachTransactions)}>
            <input 
                placeholder="Buscar por transações" 
                {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SeacrchFormContainer>
    )
}