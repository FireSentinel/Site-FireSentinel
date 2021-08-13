import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Home'
import Sobre from '../../views/contents/Sobre'
import Informacoes from '../../views/contents/Informacoes'
import Contato from '../../views/contents/Contato'
import NaoEncontrado from '../../views/contents/NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/sobre">
                <Sobre />
            </Route>
            <Route path="/informacoes">
                <Informacoes />
            </Route>
            <Route path="/contato">
                <Contato />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content