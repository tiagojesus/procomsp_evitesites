import React, {Component} from 'react';
import SiteInformacoesApi from './components/sites-informacoes-api';
import SiteListPanel from './components/sites-list-panel';
import SiteStatus from "./components/site-status";

import './App.css';


function ordenaSites(sites, campo, ordenacaoDirecao) {
    return sites.sort((a, b) => {
        let o1 = a[campo];//(a[ordenacaoCampo] + "").toUpperCase();
        let o2 = b[campo];//(b[ordenacaoCampo] + "").toUpperCase();

        if (o1 instanceof Date && o2 instanceof Date) {
            o1 = a[campo].getTime();
            o2 = b[campo].getTime();
        } else {
            o1 = (a[campo] + "").toUpperCase();
            o2 = (b[campo] + "").toUpperCase();
        }

        if (o1 > o2) {
            return 1 * ordenacaoDirecao;
        } else if (o1 < o2) {
            return -1 * ordenacaoDirecao;
        }
        return 0;
    });

}


class App extends Component {
    constructor(props) {
        super(props);
        this.api = new SiteInformacoesApi();
        this.state = {
            'sites': [],
            'ordenacaoCampo': '',
            'ordenacaoDirecao': 0
        };
    }

    componentDidMount = () => {
        this.api.loadListaDeSites().then(sites => this.handleSitesChange(sites))
    }


    handleSitesChange = (sites) => {
        this.setState({
            'sites': sites,
            'ordenacaoCampo': '',
            'ordenacaoDirecao': 0
        });
    }

    handleOnClick = (campo) => {
        const {ordenacaoCampo, ordenacaoDirecao, sites} = this.state;
        let state = {};

        if (campo === ordenacaoCampo) {
            state = {
                'ordenacaoCampo': campo,
                'ordenacaoDirecao': -1 * ordenacaoDirecao
            };
        } else {
            state = {
                'ordenacaoCampo': campo,
                'ordenacaoDirecao': 1
            };
        }

        state.sites = ordenaSites(sites, campo, state.ordenacaoDirecao);

        this.setState(state);
    }


    render() {
        return (
            <React.Fragment>
                <header className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm">
                            <a href="http://sistemas.procon.sp.gov.br/evitesite/list/evitesites.php"
                               target="_blank" rel="noopener noreferrer">
                                <img src="http://sistemas.procon.sp.gov.br/evitesite/images/procon_transparente.gif"
                                     alt="Procom SP"/>
                            </a>
                        </div>
                        <div className="col-sm-8 text-center">
                            <h4>Fundação de Proteção e Defesa do Consumidor
                            </h4>
                            <p>Evite esses Sites</p>
                        </div>
                        <div className="col-sm">
                            <img src="http://sistemas.procon.sp.gov.br/evitesite/images/99.gif"
                                 alt="Procom SP"/>
                        </div>
                    </div>
                    <div className="border border-dark rounded p-3 mt-2">
                        <p>Lista de sites que devem ser evitados, pois tiveram reclamações de consumidores registrada
                            no Procon-SP, foram notificados, não responderam ou não foram encontrados.</p>

                        <p>O consumidor que tiver dúvidas pode procurar o Procon de sua cidade ou um dos canais de
                            atendimento da Fundação.</p>
                        <div>Situação:
                            <ul>
                                <li><SiteStatus status="1"/> No Ar</li>
                                <li><SiteStatus status="0"/> Fora do Ar</li>
                            </ul>

                        </div>
                    </div>
                </header>


                <nav></nav>


                <section className="App container-fluid mt-3">
                    <header>
                        <h1>Evite estes sites</h1>
                    </header>

                    <SiteListPanel sites={this.state.sites}
                                   ordenacaoCampo={this.state.ordenacaoCampo}
                                   ordenacaoDirecao={this.state.ordenacaoDirecao}
                                   onClick={this.handleOnClick}
                    />
                </section>

                <footer></footer>
            </React.Fragment>
        );
    }
}

export default App;
