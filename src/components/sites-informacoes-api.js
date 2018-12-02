import React, {Component} from 'react';


class SiteInformacoesApi extends Component{
    constructor(props){
        super(props);

        this.status = {processando: false};
    }

    render(){
        let mostrar = "";
        if(this.status.processando){
            mostrar = (<div>processando</div>);
        }

        return mostrar;
    }
}

export default SiteInformacoesApi;