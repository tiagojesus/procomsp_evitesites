import React, {Component} from 'react';
import SiteInformacoesApi from './components/sites-informacoes-api';
import SitesPanel from './components/sites-panel';
import TopoPanel from "./components/topo-panel";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './App.css';

const styles = theme => ({
    root: {
        width: '100%',
    },

});

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
                <CssBaseline />
                <TopoPanel/>

                <SitesPanel  sites={this.state.sites}
                             ordenacaoCampo={this.state.ordenacaoCampo}
                             ordenacaoDirecao={this.state.ordenacaoDirecao}
                             onClick={this.handleOnClick}/>

            </React.Fragment>
        );
    }
}
export default withStyles(styles)(App);
