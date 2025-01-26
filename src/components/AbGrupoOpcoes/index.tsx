import React from 'react'
import { Opcao } from './styled'

export interface AbGrupoOpcoesProps {}

export const AbGrupoOpcoes = () => {
    return (
        <>
            <Opcao selecionado={false}>
                <header>E-book</header>
                <div><strong>R$ 00,00</strong></div>
                <footer>.pdf, .epub, .mob</footer>
            </Opcao>
            <Opcao selecionado={true}>
                <header>E-book</header>
                <div><strong>R$ 00,00</strong></div>
                <footer>.pdf, .epub, .mob</footer>
            </Opcao>
            <Opcao selecionado={false}>
                <header>E-book</header>
                <div><strong>R$ 00,00</strong></div>
                <footer>.pdf, .epub, .mob</footer>
            </Opcao>
        </>
    )
}
