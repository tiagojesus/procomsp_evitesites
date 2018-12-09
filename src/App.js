import React, {Component} from 'react';
import SiteInformacoesApi from './components/sites-informacoes-api';
import SiteListPanel from './components/sites-list-panel';
import SiteStatus from "./components/site-status";

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.api = new SiteInformacoesApi();
        this.state = {'sites':[],
            'ordenacaoCampo': '',
            'ordenacaoDirecao': 0
        };

    }

    componentDidMount = () =>{
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
        if(campo === this.state.ordenacaoCampo){
            this.setState({'ordenacaoDirecao': -1 * this.state.ordenacaoDirecao});
        }else{
            this.setState({
                'ordenacaoCampo': campo,
                'ordenacaoDirecao': 1
            });

        }
    }



    render() {
        return (
            <React.Fragment>
                <header className="container-fluid">

                    <div className="border border-dark rounded p-3 mt-2">
                        <p>Lista de sites que devem ser evitados, pois tiveram reclamações de consumidores registrada
                            no Procon-SP, foram notificados, não responderam ou não foram encontrados.</p>

                        <p>O consumidor que tiver dúvidas pode procurar o Procon de sua cidade ou um dos canais de
                            atendimento da Fundação.</p>
                        <div>Situação:
                            <ul>
                                <li><SiteStatus status="1" /> No Ar  </li>
                                <li><SiteStatus status="0"/> Fora do Ar </li>
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
