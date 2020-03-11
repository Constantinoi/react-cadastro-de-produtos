import React from 'react'

import {HashRouter, Switch, Route } from 'react-router-dom'

import Home from './home'
import CadastroProduto from './produtos/cadastro';
import ConsultaProdutos from './produtos/consulta';


export default () =>{
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/consulta-produtos" component={ConsultaProdutos}/>
                <Route exact path="/cadastro-produtos" component={CadastroProduto}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}