import React, { ReactNode } from 'react'
import { BotaoFechar, Fundo, Janela, Titulo, TituloWrapper } from './styled'

export interface AbModalProps {
    children: ReactNode
    titulo: string
    aberta: boolean
    aoFechar: () => void
}

export const AbModal = ({ children, aberta, aoFechar, titulo }: AbModalProps) => {
    if (!aberta) {
        return <></>
    }

    return (
        <>
            <Fundo onClick={aoFechar} />
            <Janela>
                <TituloWrapper>
                    <Titulo>{titulo}</Titulo>
                    <BotaoFechar onClick={aoFechar}>X</BotaoFechar>
                </TituloWrapper>
                {children}
            </Janela>
        </>
    )
}
