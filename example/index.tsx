import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AbBotao, AbCard, AbTag } from '../src'

const App = () => {
    return (
        <div>
            <AbBotao texto="Clique Aqui!" tipo="primario" />
            <AbCard>
                <h1>Olá, eu sou um card</h1>
            </AbCard>
            <AbTag texto="Tag" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
