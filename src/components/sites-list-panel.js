import React, {Component} from 'react';
import logoReclameAqui from "../reclame-aqui-logo.8cfb52a1.svg";
import SiteStatus from "./site-status";
import CpfCnpjFormatador from './cpf-cnpj-formatador';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp,faChevronCircleDown, faChevronCircleUp, faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown);
library.add(faChevronUp);
library.add(faCircle);
library.add(faChevronCircleUp);
library.add(faChevronCircleDown)


class SitePanel extends Component {
    render() {
        if (!this.props.site) return null;

        return (
            <li class="list-group-item list-group-item-action flex-column align-items-start site">
                <div className="d-flex flex-nowrap  align-items-stretch w-100 justify-content-start align-items-center">
                    <div className="p-1" style={{"width":"30px"}}>
                        <SiteStatus status={this.props.site.situacao}/>
                    </div>
                    <div className="p-1 d-none d-sm-none d-md-block" style={{"width":"180px"}}>
                        <CpfCnpjFormatador numero={this.props.site.cnpj_cpf}/>
                    </div>
                    <div className="p-1 flex-fill">
                        <b>{this.props.site.empresa}</b>
                    </div>
                    <div className="p-1 w-30" style={{'color': "#f00"}}>{this.props.site.url}</div>

                    <div className="p-1 d-none d-sm-none d-md-block">{this.props.site.data_inclusao}</div>

                    <div className="p-1 d-none d-sm-block">
                        <a href={"https://www.reclameaqui.com.br/busca/?q=" + this.props.site.url}
                           target="_blank" rel="noopener noreferrer">
                            <img src={logoReclameAqui} width="70" alt="logo Reclame Aqui"/>
                        </a>
                    </div>
                </div>
            </li>
        )
    }
}

class SiteListPanel extends Component {
    render() {

        var itens = [];

        if (Array.isArray(this.props.sites)) {
            itens = this.props.sites.map((item) => <SitePanel key={item.id} site={item}/>);
        }


        return (
            <ul className="list-group">
                <li className="list-group-item list-group-item-action flex-column align-items-start site">
                    <div
                        className="d-flex flex-nowrap  align-items-stretch w-100 justify-content-start align-items-center">
                        <div className="p-1">
                            <button type="button" className="btn btn-secondary btn-sm site-lista--button">
                                <FontAwesomeIcon icon="chevron-circle-up" className="float-right"/> Status</button>
                        </div>
                        <span className="p-1 d-none d-sm-none d-md-block">
                            <button type="button" className="btn btn-secondary btn-sm site-lista--button">
                                <FontAwesomeIcon icon="circle" className="float-right"/>Documento</button>
                        </span>
                        <div className="p-1 flex-fill">
                            <button type="button" className="btn btn-secondary btn-sm site-lista--button">
                                <FontAwesomeIcon icon="circle" className="float-right"/>Empresa</button>
                        </div>
                        <div className="p-1 w-30">
                            <button type="button" className="btn btn-secondary btn-sm site-lista--button">
                                <FontAwesomeIcon icon="circle" className="float-right"/>Site</button>
                        </div>

                        <div className="p-1 d-none d-sm-none d-md-block">
                            <button type="button" className="btn btn-secondary btn-sm site-lista--button">
                                <FontAwesomeIcon icon="circle" className="float-right"/>Data Inclusão</button>
                         </div>
                    </div>
                </li>

                {itens}
            </ul>

        )
    }
}


export default SiteListPanel;