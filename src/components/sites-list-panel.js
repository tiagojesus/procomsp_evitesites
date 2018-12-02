import React, {Component} from 'react';
import logoReclameAqui from "../reclame-aqui-logo.8cfb52a1.svg";
import SiteStatus from "./site-status";


class SitePanel extends  Component{
    render(){
        if(!this.props.site) return null;

        console.log('SitePanel', this.props.site);


        return (
            <tr>
                <td><SiteStatus status={this.props.site.situacao}/></td>
                <td>{this.props.site.url}</td>
                <td>{this.props.site.empresa}</td>
                <td>{this.props.site.cnpj_cpf}</td>
                <td>{this.props.site.data_inclusao}</td>
                <td>
                    <a href={"https://www.reclameaqui.com.br/busca/?q="+this.props.site.url}
                       target="_blank" rel="noopener noreferrer" >
                        <img src={logoReclameAqui} width="50" alt="logo Reclame Aqui" />
                    </a>
                </td>
            </tr>
        )
    }
}

class SiteListPanel extends Component{
    render(){

        var itens = [];

        if(Array.isArray(this.props.sites)){
            itens = this.props.sites.map((item) =><SitePanel key={item.id} site={item}/> );
        }


        return (
            <table  className="table">
                <thead>
                <tr>
                    <th scope="col-1">.</th>
                    <th scope="col-auto">Site    </th>
                    <th scope="col-auto">Empresa/Responsável  </th>
                    <th scope="col-2">CNPJ/CPF </th>
                    <th scope="col-2">Inclusão</th>
                    <th scope="col-2">.</th>
                </tr>
                </thead>
                <tbody>

                {itens}

                </tbody>
            </table>

        )
    }
}





export default SiteListPanel;