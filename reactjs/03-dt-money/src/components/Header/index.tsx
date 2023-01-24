import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import LogoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton> 
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay />
                    </Dialog.Portal>    

                    <Dialog.Content>
                        <Dialog.Title>Nova Transação</Dialog.Title>

                        <Dialog.Close />
                    </Dialog.Content>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}