import React, {Component} from 'react';
import SiteInformacoesApi from './components/sites-informacoes-api';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faEye, faEyeSlash, faUser, faUserSlash } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import logoReclameAqui from './reclame-aqui-logo.8cfb52a1.svg';


library.add(faStroopwafel);
library.add(faEye);
library.add(faEyeSlash);
library.add(faUser);
library.add(faUserSlash);
// lightbulb
// long-arrow-alt-down
// long-arrow-alt-up
// search-plus
// sistrix
// skull-crossbones
// theater-masks
// thumbs-down
// times-circle
// user
// user-slash
// user-alt
// user-alt-slash
// user-minus
// angry

class SitePanel extends  Component{
    render(){
        return (
            <tr>
                <td><FontAwesomeIcon icon="user-slash" className="site-status__offline" /></td>
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



class App extends Component {
    render() {
        return (
            <React.Fragment>
                <SiteInformacoesApi/>
                <header className="container">
                    <div className="row align-items-center">
                        <div className="col-sm">
                            <a href="http://sistemas.procon.sp.gov.br/evitesite/list/evitesites.php"
                               target="_blank" rel="noopener noreferrer" >
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
                                <li><FontAwesomeIcon icon="user" className="site-status__online" />  No Ar  </li>
                                <li><FontAwesomeIcon icon="user-slash" className="site-status__offline" /> Fora do Ar </li>
                            </ul>

                        </div>
                    </div>
                </header>


                <nav></nav>


                <section className="App container mt-3">
                    <header>
                        <h1>Evite estes sites</h1>
                    </header>
                    <table  className="table">
                        <thead>
                            <tr>
                                <th scope="col-1"></th>
                                <th scope="col-auto">Site    </th>
                                <th scope="col-auto">Empresa/Responsável  </th>
                                <th scope="col-2">CNPJ/CPF </th>
                                <th scope="col-2">Inclusão</th>
                                <th scope="col-2"></th>
                            </tr>
                        </thead>
                        <tbody>

                        <SitePanel/>
                        <SitePanel/>
                        <SitePanel/>
                        <SitePanel/>
                        <SitePanel/>
                        <SitePanel/>
                        <SitePanel/>

                        </tbody>
                    </table>
                </section>








                <footer></footer>
            </React.Fragment>
        );
    }
}

export default App;
