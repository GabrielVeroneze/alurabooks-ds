import React from 'react'
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = () => <AbGrupoOpcoes />

export const Padrao = Template.bind({})

Padrao.args = {} 
