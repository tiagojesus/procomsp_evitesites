import React, {Component} from 'react';
import logoReclameAqui from "../reclame-aqui-logo.8cfb52a1.svg";
import SiteStatus from "./site-status";


class SitePanel extends  Component{
    render(){
        if(!this.props.site) return "";

        return (
            <tr>
                <td><SiteStatus status={this.props.site.status}/></td>
                <td>www.sitesquedeveevitar.com.br</td>
                <td>Nome da empresa</td>
                <td>0000000000000000000000</td>
                <td>00/00/0000 </td>
                <td>
                    <a href="https://www.reclameaqui.com.br/busca/?q=americanas.com.br"
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

                <SitePanel site={{'status':'1'}}/>
                <SitePanel site={{'status':'0'}}/>
                <SitePanel site={{'status':'1'}}/>
                <SitePanel site={{'status':'1'}}/>
                <SitePanel site={{'status':'1'}}/>
                <SitePanel site={{'status':'1'}}/>
                <SitePanel/>

                </tbody>
            </table>

        )
    }
}





export default SiteListPanel;