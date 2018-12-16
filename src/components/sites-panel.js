import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import SiteListPanel from "./sites-list-panel";

export default class SitesPanel extends Component{
    render(){
        return(
            <Paper>
                <header>
                    <h1>Evite estes sites</h1>
                </header>

                <SiteListPanel sites={this.props.sites}
                               ordenacaoCampo={this.props.ordenacaoCampo}
                               ordenacaoDirecao={this.props.ordenacaoDirecao}
                               onClick={this.props.onClick}
                />
            </Paper>
        );
    }
}


