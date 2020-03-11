import React from 'react';
import ProdutoService from '../../app/produtoService'
import { withRouter } from 'react-router-dom'

const Inicio ={
        nome:'',
        sku:'',
        descricao:'',
        preco:0,
        fornecedor:'',
        sucesso:false,
        errors:[]
}

class CadastroProduto extends React.Component{
    state= Inicio

    constructor(){
        super()
        this.service = new ProdutoService
    }

    onChange =(event)=>{
       const valor = event.target.value
       const nomeDeCampo = event.target.name
       this.setState({ [nomeDeCampo]:valor })
    }
    onSubmit =(event)=>{
        const produto = {
        nome: this.state.nome,
        sku:this.state.sku,
        descricao:this.state.descricao,
        preco:this.state.preco,
        fornecedor:this.state.fornecedor
        }
        try{
            this.service.salvar(produto)
            this.limpaCampos()
            this.setState({sucesso:true})
        }catch(erro){
            const errors = erro.errors
            this.setState({errors : errors})
        }
       
    }
    limpaCampos =()=>{
        this.setState(Inicio)
    }
    componentDidMount(){
        const sku = this.props.match.params.sku

        if(sku){
          const resultado = this.service.obterProdutos().filter(produto => produto.sku === sku)

          if(resultado.length === 1){
              const produtoEncontrado = resultado[0]
              this.setState({...produtoEncontrado})
          }
        }
    }

    render(){
        return(
            <div className="card border-primary mb-3">
            <div className="card-header">
                Cadastro de Produtos
            </div>
            <div className="card-body">

                {this.state.sucesso &&

                    <div class="alert alert-dismissible alert-success">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong>Feito!</strong> Cadastro Relizado com sucesso.
                    </div>
                }
                {this.state.errors.length >0 &&

                    this.state.errors.map(msg =>{
                        return(
                            <div class="alert alert-dismissible alert-danger">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Erro</strong> {msg}
                            </div>
                        )
                    })
                }
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>
                                Nome:*
                            </label>
                            <input 
                                type="text" 
                                value={this.state.nome} 
                                name="nome" 
                                onChange={this.onChange} 
                                className="form-control"/>
                        </div>
                    </div>     
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>
                                SKU:*
                            </label>
                            <input 
                                type="text" 
                                value={this.state.sku} 
                                name="sku" 
                                onChange={this.onChange} 
                                className="form-control"/>
                        </div>
                    </div>         
                </div> 
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Descrição:</label>
                            <textarea 
                                value={this.state.descricao} 
                                name="descricao"
                                onChange={this.onChange}  
                                className="form-control"/>
                        </div>
                    </div>
                </div>
                 <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>
                                Preço:*
                            </label>
                            <input 
                                type="text" 
                                value={this.state.preco} 
                                name="preco" 
                                onChange={this.onChange} 
                                className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>
                               Fornecedor:*
                            </label>
                            <input 
                                type="text" 
                                value={this.state.fornecedor} 
                                name="fornecedor"
                                onChange={this.onChange} 
                                className="form-control"/>
                        </div>
                    </div>    
                </div>
                <div className="row">
                    <div className="col-md-1"> 
                        <button 
                            onClick={this.onSubmit} 
                            className="btn btn-success">Salvar</button>
                    </div>
                
                    <div className="col-md-1"> 
                        <button 
                            className="btn btn-primary"
                            onClick={this.limpaCampos}>Limpar</button>
                    </div>
                </div>        
            </div>
          </div>
        )
    }

}

export default withRouter (CadastroProduto)