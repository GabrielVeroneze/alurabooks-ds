import React from 'react'
import { Opcao } from './styled'

export interface AbGrupoOpcao {
    id: number
    titulo: string
    corpo: string
    rodape: string
}

export interface AbGrupoOpcoesProps {
    opcoes: AbGrupoOpcao[]
}

export const AbGrupoOpcoes = ({ opcoes }: AbGrupoOpcoesProps) => {
    return (
        <>
            {opcoes.map(opcao => (
                <Opcao key={opcao.id} selecionado={false}>
                    <header>{opcao.titulo}</header>
                    <div><strong>{opcao.corpo}</strong></div>
                    <footer>{opcao.rodape}</footer>
                </Opcao>
            ))}
        </>
    )
}
