import React, {Component} from 'react';
import logoReclameAqui from "../reclame-aqui-logo.8cfb52a1.svg";
import SiteStatus from "./site-status";


class SitePanel extends  Component{
    render(){
        if(!this.props.site) return null;

        console.log('SitePanel', this.props.site);


        return (
            <li  class="list-group-item list-group-item-action flex-column align-items-start site">
                <div className="d-flex flex-nowrap  align-items-stretch w-100 justify-content-start align-items-center">
                    <div className="p-1">
                        <SiteStatus status={this.props.site.situacao}/>
                    </div>
                    <div className="p-1 flex-fill">
                        {this.props.site.empresa}
                    </div>
                    <span className="p-1 d-none d-lg-block d-xl-none">{this.props.site.cnpj_cpf}</span>
                    <div className="p-1 w-30" style={{'color':"#f00"}}>{this.props.site.url}</div>

                    <div className="p-1 d-none d-sm-block">{this.props.site.data_inclusao}</div>

                    <div className="p-1 d-none d-sm-block">
                        <a href={"https://www.reclameaqui.com.br/busca/?q="+this.props.site.url}
                           target="_blank" rel="noopener noreferrer" >
                            <img src={logoReclameAqui} width="70" alt="logo Reclame Aqui" />
                        </a>
                    </div>
                </div>
            </li>
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
            <ul className="list-group">
                {itens}
            </ul>

        )
    }
}





export default SiteListPanel;