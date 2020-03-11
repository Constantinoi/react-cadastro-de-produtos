import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './home'
import CadastroProduto from './produtos/cadastro';
import ConsultaProdutos from './produtos/consulta';


export default () =>{
    return(
        
            <Switch>
                <Route exact path="/consulta-produtos" component={ConsultaProdutos}/>
                <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        
    )
}