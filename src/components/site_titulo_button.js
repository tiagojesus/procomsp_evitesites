import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SiteTituloButton extends Component{
    handleOnClick = (valor) => {
        if(this.props.onClick) this.props.onClick(valor);
    };

    render() {
        var {direcao, descricao} = this.props;
        direcao = direcao+"";


        var estilo = "btn btn-secondary btn-sm site-lista--button";

        var icone = "circle";
        if(direcao === "-1"){
            icone = "chevron-circle-up";
            estilo += " site__campo--selecionado";
        }else if(direcao === "1"){
            icone = "chevron-circle-down";
            estilo += " site__campo--selecionado";
        }


        return (
            <button type="button" className={estilo} onClick={()=>{  this.handleOnClick(this.props.campo);  }}>
                <FontAwesomeIcon icon={icone} className="float-right"/>{descricao}
            </button>
        );
    }
}

export default SiteTituloButton;