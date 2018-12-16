import React, {Component, PureComponent} from 'react';
import logoReclameAqui from "../reclame-aqui-logo.8cfb52a1.svg";
import SiteStatus from "./site-status";
import CpfCnpjFormatador from './cpf-cnpj-formatador';
import SiteTituloButton from './site_titulo_button';
import Date2Text from './date_2_text';

import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faChevronDown,
    faChevronUp,
    faChevronCircleDown,
    faChevronCircleUp,
    faCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown);
library.add(faChevronUp);
library.add(faCircle);
library.add(faChevronCircleUp);
library.add(faChevronCircleDown)


class SiteListItemPanel extends PureComponent {
    render() {
        if (!this.props.site) return null;

        return (
            <li className="list-group-item list-group-item-action flex-column align-items-start site">
                <div className="d-flex flex-nowrap  align-items-stretch w-100 justify-content-start align-items-center">
                    <div className="p-1" style={{"width": "30px"}}>
                        <SiteStatus status={this.props.site.situacao}/>
                    </div>
                    <div className="p-1 d-none d-sm-none d-md-block" style={{"width": "180px"}}>
                        <CpfCnpjFormatador numero={this.props.site.cnpj_cpf}/>
                    </div>
                    <div className="p-1 flex-fill">
                        <b>{this.props.site.empresa}</b>
                    </div>
                    <div className="p-1 w-30" style={{'color': "#f00"}}>{this.props.site.url}</div>

                    <div className="p-1 d-none d-sm-none d-md-block">
                        <Date2Text date={this.props.site.data_inclusao}/>
                    </div>

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
    handleOnClick = (valor) => {
        if (this.props.onClick) return () => this.props.onClick(valor);
    }

    render() {
        const {ordenacaoDirecao, ordenacaoCampo} = this.props;

        var itens = [];

        if (Array.isArray(this.props.sites)) {
            itens = this.props.sites.map((item) => <SiteListItemPanel key={item.id} site={item}/>);
        }

        let configDirecao = (campo) => {
            return campo === ordenacaoCampo ? ordenacaoDirecao : 0;
        };


        return (
            <ul className="list-group">
                <li className="list-group-item list-group-item-action flex-column align-items-start site">
                    <div
                        className="d-flex flex-nowrap  align-items-stretch w-100 justify-content-start align-items-center">
                        <div className="p-1">
                            <SiteTituloButton descricao="Status" campo="situacao"
                                              direcao={configDirecao("situacao")}
                                              onClick={this.handleOnClick("situacao")}/>
                        </div>
                        <div className="p-1 d-none d-sm-none d-md-block">
                            <SiteTituloButton descricao="Documento" campo="cnpj_cpf"
                                              direcao={configDirecao("cnpj_cpf")}
                                              onClick={this.handleOnClick("cnpj_cpf")}/>
                        </div>
                        <div className="p-1 flex-fill">
                            <SiteTituloButton descricao="Empresa" campo="empresa"
                                              direcao={configDirecao("empresa")}
                                              onClick={this.handleOnClick("empresa")}/>
                        </div>
                        <div className="p-1 w-30">
                            <SiteTituloButton descricao="Site" campo="url"
                                              direcao={configDirecao("url")}
                                              onClick={this.handleOnClick("url")}/>
                        </div>

                        <div className="p-1 d-none d-sm-none d-md-block">
                            <SiteTituloButton descricao="Data Inclusão" campo="data_inclusao"
                                              direcao={configDirecao("data_inclusao")}
                                              onClick={this.handleOnClick("data_inclusao")}/>
                        </div>
                        <div className="p-1 d-none d-sm-none d-md-block" style={{width: '75px'}}>

                        </div>
                    </div>
                </li>

                {itens}
            </ul>

        )
    }
}

export default SiteListPanel;
