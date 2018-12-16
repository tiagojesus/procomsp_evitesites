import React, {Component} from 'react';
import SiteListPanel from "./sites-list-panel";

export default class SitesPanel extends Component{
    render(){
        return(
            <section className="App container-fluid mt-3">
                <header>
                    <h1>Evite estes sites</h1>
                </header>

                <SiteListPanel sites={this.props.sites}
                               ordenacaoCampo={this.props.ordenacaoCampo}
                               ordenacaoDirecao={this.props.ordenacaoDirecao}
                               onClick={this.props.onClick}
                />
            </section>
        );
    }
}


