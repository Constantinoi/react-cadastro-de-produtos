import React from 'react'

export default (props) =>(
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Nome</th>
                <th>SKU</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {
            props.produtos.map((produto, index) =>{

            return(
                    <tr key={index}>
                        <th>{produto.nome}</th>
                        <th>{produto.sku}</th>
                        <th>{produto.preco}</th>
                        <th>{produto.fornecedor}</th>
                        <th>
                        <button onClick={ () => props.editarAction(produto.sku)} className="btn btn-success">Editar</button>
                        <button onClick={ ()=> props.deletarAction(produto.sku)} className="btn btn-danger">Excluir</button>

                        </th>
                    </tr>
                )
            })
        }
        </tbody>
    </table>

)