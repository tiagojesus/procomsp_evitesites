import {Component} from 'react';

export default class Date2Text extends Component{
    render() {
        let {date} = this.props;
        let valor = "";
        if( date && date instanceof Date){
            valor = date.toLocaleDateString();
        }
        return valor;
    }
}