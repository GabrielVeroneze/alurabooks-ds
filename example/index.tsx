import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AbBotao, AbCard, AbGrupoOpcoes, AbTag } from '../src'

const App = () => {
    return (
        <div>
            <AbBotao texto="Clique Aqui!" tipo="primario" />
            <AbCard>
                <h1>Olá, eu sou um card</h1>
            </AbCard>
            <AbTag texto="Tag" />
            <AbGrupoOpcoes
                opcoes={[
                    {
                        id: 1,
                        titulo: 'E-book',
                        corpo: 'R$ 00,00',
                        rodape: '.pdf, .epub, .mob'
                    },
                    {
                        id: 2,
                        titulo: 'Impresso',
                        corpo: 'R$ 00,00',
                        rodape: '.pdf, .epub, .mob'
                    },
                    {
                        id: 3,
                        titulo: 'Impresso + E-book',
                        corpo: 'R$ 00,00',
                        rodape: '.pdf, .epub, .mob'
                    }
                ]}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
