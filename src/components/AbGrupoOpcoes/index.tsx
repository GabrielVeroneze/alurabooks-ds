import React, { useState } from 'react'
import { Opcao } from './styled'

export interface AbGrupoOpcao {
    id: number
    titulo: string
    corpo: string
    rodape: string
}

export interface AbGrupoOpcoesProps {
    opcoes: AbGrupoOpcao[]
    valorPadrao?: AbGrupoOpcao | null
    onChange?: (opcao: AbGrupoOpcao) => void
}

export const AbGrupoOpcoes = ({ opcoes, onChange, valorPadrao = null }: AbGrupoOpcoesProps) => {
    const [selecao, setSelecao] = useState<AbGrupoOpcao | null>(valorPadrao)

    const aoSelecionar = (opcao: AbGrupoOpcao): void => {
        setSelecao(opcao)

        if (onChange) {
            onChange(opcao)
        }
    }

    return (
        <>
            {opcoes.map(opcao => (
                <Opcao
                    key={opcao.id}
                    selecionado={selecao?.id === opcao.id}
                    onClick={() => aoSelecionar(opcao)}
                >
                    <header>{opcao.titulo}</header>
                    <div><strong>{opcao.corpo}</strong></div>
                    <footer>{opcao.rodape}</footer>
                </Opcao>
            ))}
        </>
    )
}
