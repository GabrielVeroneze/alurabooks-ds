import React from 'react'
import { Formatos, Header, Opcao, Preco } from './styled'

export interface AbGrupoOpcoesProps {}

export const AbGrupoOpcoes = () => {
    return (
        <>
            <Opcao selecionado={false}>
                <Header selecionado={false}>E-book</Header>
                <Preco selecionado={false}>
                    <strong>R$ 00,00</strong>
                </Preco>
                <Formatos selecionado={false}>.pdf, .epub, .mob</Formatos>
            </Opcao>
            <Opcao selecionado={true}>
                <Header selecionado={true}>E-book</Header>
                <Preco selecionado={true}>
                    <strong>R$ 00,00</strong>
                </Preco>
                <Formatos selecionado={true}>.pdf, .epub, .mob</Formatos>
            </Opcao>
            <Opcao selecionado={false}>
                <Header selecionado={false}>E-book</Header>
                <Preco selecionado={false}>
                    <strong>R$ 00,00</strong>
                </Preco>
                <Formatos selecionado={false}>.pdf, .epub, .mob</Formatos>
            </Opcao>
        </>
    )
}
