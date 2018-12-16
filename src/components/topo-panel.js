import React, {Component} from 'react';
import SiteStatus from "./site-status";

import Paper from '@material-ui/core/Paper';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        paddingLeft: 10
    },
    procomText:{
        fontWeight: 'bold',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    textoInfo:{
        padding: theme.spacing.unit,
    }
});


class TopoPanel extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <AppBar position="relative" color="default">
                    <Toolbar>
                        <div>
                            <a href="http://sistemas.procon.sp.gov.br/evitesite/list/evitesites.php"
                               target="_blank" rel="noopener noreferrer">
                                <img src="http://sistemas.procon.sp.gov.br/evitesite/images/procon_transparente.gif"
                                     alt="Procom SP" height="50"/>
                            </a>
                        </div>
                        <Typography variant="h6" color="inherit"  className={classes.grow}>
                            <span className={classes.procomText}>Fundação de Proteção e Defesa do Consumidor</span> Evite esses Sites
                        </Typography>

                        <div>
                            <img src="http://sistemas.procon.sp.gov.br/evitesite/images/99.gif"
                                 alt="Procom SP" height="50"/>
                        </div>
                    </Toolbar>
                </AppBar>


            <Paper className={classes.textoInfo}>
                <p>Lista de sites que devem ser evitados, pois tiveram reclamações de consumidores registrada
                    no Procon-SP, foram notificados, não responderam ou não foram encontrados.</p>

                <p>O consumidor que tiver dúvidas pode procurar o Procon de sua cidade ou um dos canais de
                    atendimento da Fundação.</p>
                <div>Situação:
                    [ <SiteStatus status="1"/> No Ar | <SiteStatus status="0"/> Fora do Ar ]
                </div>
            </Paper>
            </div>
        )
    }
}

export default withStyles(styles) (TopoPanel);