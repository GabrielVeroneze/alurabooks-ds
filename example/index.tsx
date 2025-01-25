import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AbBotao, Card } from '../src'

const App = () => {
    return (
        <div>
            <AbBotao />
            <Card>
                <h1>Olá, eu sou um card</h1>
            </Card>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
