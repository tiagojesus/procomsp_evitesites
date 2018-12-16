import React, {Component} from 'react';
import SiteStatus from "./site-status";

export default class TopoPanel extends Component{
    render(){
        return(
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



        )
    }
}