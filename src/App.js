import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
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
                    </div>
                </header>


                <nav></nav>


                <section className="App container mt-3">
                    <header>
                        <h1>Evite estes sites</h1>
                    </header>
                    <table  class="table">
                        <thead>
                            <tr>
                                <th scope="col">Site    </th>
                                <th scope="col">Empresa/Responsável  </th>
                                <th scope="col">CNPJ/CPF </th>
                                <th scope="col">Inclusão</th>
                                <th scope="col">Situação* </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">www.sitesquedeveevitar.com.br</th>
                            <td>Nome da empresa</td>
                            <td>0000000000000000000000</td>
                            <td>00/00/0000</td>
                            <td>@ativo</td>
                        </tr>
                        <tr>
                            <th scope="row">www.sitesquedeveevitar.com.br</th>
                            <td>Nome da empresa</td>
                            <td>0000000000000000000000</td>
                            <td>00/00/0000</td>
                            <td>@ativo</td>
                        </tr>
                        <tr>
                            <th scope="row">www.sitesquedeveevitar.com.br</th>
                            <td>Nome da empresa</td>
                            <td>0000000000000000000000</td>
                            <td>00/00/0000</td>
                            <td>@ativo</td>
                        </tr>
                        <tr>
                            <th scope="row">www.sitesquedeveevitar.com.br</th>
                            <td>Nome da empresa</td>
                            <td>0000000000000000000000</td>
                            <td>00/00/0000</td>
                            <td>@ativo</td>
                        </tr>
                        </tbody>
                    </table>
                </section>
                <footer></footer>
            </React.Fragment>
        );
    }
}

export default App;
