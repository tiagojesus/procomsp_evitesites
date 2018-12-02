import React, {Component} from 'react';
import logoReclameAqui from "../reclame-aqui-logo.8cfb52a1.svg";
import SiteStatus from "./site-status";


class CpfCnpj extends Component {
    formatar(numeroDocumento) {
        let tipo = null;
        //Remove tudo o que não é dígito
        numeroDocumento = numeroDocumento.replace(/\D/g, "");

        if (numeroDocumento.length <= 11) { //CPF
            tipo = "CPF";
            //Coloca um ponto entre o terceiro e o quarto dígitos
            numeroDocumento = numeroDocumento.replace(/(\d{3})(\d)/, "$1.$2");
            //Coloca um ponto entre o terceiro e o quarto dígitos
            //de novo (para o segundo bloco de números)
            numeroDocumento = numeroDocumento.replace(/(\d{3})(\d)/, "$1.$2");
            //Coloca um hífen entre o terceiro e o quarto dígitos
            numeroDocumento = numeroDocumento.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        } else { //CNPJ
            tipo = "CNPJ";
            //Coloca ponto entre o segundo e o terceiro dígitos
            numeroDocumento = numeroDocumento.replace(/^(\d{2})(\d)/, "$1.$2");
            //Coloca ponto entre o quinto e o sexto dígitos
            numeroDocumento = numeroDocumento.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            //Coloca uma barra entre o oitavo e o nono dígitos
            numeroDocumento = numeroDocumento.replace(/\.(\d{3})(\d)/, ".$1/$2");
            //Coloca um hífen depois do bloco de quatro dígitos
            numeroDocumento = numeroDocumento.replace(/(\d{4})(\d)/, "$1-$2");
        }

        return  (<span><b>{tipo}:</b> {numeroDocumento}</span>);
    }


    render() {
        var numero = this.props.numero;

        if (numero) {
            numero = numero.toString().trim();
            return this.formatar(numero);
        }
        return null;
    }
}


class SitePanel extends Component {
    render() {
        if (!this.props.site) return null;

        return (
            <li class="list-group-item list-group-item-action flex-column align-items-start site">
                <div className="d-flex flex-nowrap  align-items-stretch w-100 justify-content-start align-items-center">
                    <div className="p-1">
                        <SiteStatus status={this.props.site.situacao}/>
                    </div>
                    <div className="p-1 flex-fill">
                        {this.props.site.empresa}
                    </div>
                    <span className="p-1 d-none d-sm-none d-md-block">
                        <CpfCnpj numero={this.props.site.cnpj_cpf}/>
                    </span>
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
                            [ Status ]
                        </div>
                        <div className="p-1 flex-fill">
                            [ Empresa ]
                        </div>
                        <span className="p-1 d-none d-sm-none d-md-block">
                            [ Documento ]
                        </span>
                        <div className="p-1 w-30">[ Site ]</div>

                        <div className="p-1 d-none d-sm-none d-md-block">[ Data Inclusao ]</div>
                        <div className="p-1 d-none d-sm-block">[ Reclame Aqui ]</div>
                    </div>
                </li>

                {itens}
            </ul>

        )
    }
}


export default SiteListPanel;