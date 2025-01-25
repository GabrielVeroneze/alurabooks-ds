import React from 'react'
import { Botao } from './styled'

export interface AbBotaoProps {
    texto?: string
    tipo?: 'primario' | 'secundario'
    onClick?: () => void
}

export const AbBotao = ({ texto, tipo = 'primario', onClick }: AbBotaoProps) => {
    return (
        <Botao tipo={tipo} onClick={onClick}>
            {texto}
        </Botao>
    )
}
