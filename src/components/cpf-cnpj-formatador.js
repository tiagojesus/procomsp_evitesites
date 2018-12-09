import {Component} from "react";
import React from "react";

class CpfCnpjFormatador extends Component {
    formatar(numeroDocumento) {
        let tipo = null;
        //Remove tudo o que não é dígito
        numeroDocumento = numeroDocumento.replace(/\D/g, "");

        if (numeroDocumento.length <= 11) { //CPF
            tipo = "CPF";
            //Coloca um ponto entre o terceiro e o quarto dígitos
            numeroDocumento = numeroDocumento.replace(/(\d{3})(\d)/, "$1.$2");
            //Coloca um ponto entre o terceiro e o quarto dígitos
            //de novo (para o segundo bloco de números)
            numeroDocumento = numeroDocumento.replace(/(\d{3})(\d)/, "$1.$2");
            //Coloca um hífen entre o terceiro e o quarto dígitos
            numeroDocumento = numeroDocumento.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        } else { //CNPJ
            tipo = "CNPJ";
            //Coloca ponto entre o segundo e o terceiro dígitos
            numeroDocumento = numeroDocumento.replace(/^(\d{2})(\d)/, "$1.$2");
            //Coloca ponto entre o quinto e o sexto dígitos
            numeroDocumento = numeroDocumento.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            //Coloca uma barra entre o oitavo e o nono dígitos
            numeroDocumento = numeroDocumento.replace(/\.(\d{3})(\d)/, ".$1/$2");
            //Coloca um hífen depois do bloco de quatro dígitos
            numeroDocumento = numeroDocumento.replace(/(\d{4})(\d)/, "$1-$2");
        }

        return (<span><b>{tipo}:</b> {numeroDocumento}</span>);
    }


    render() {
        var numero = this.props.numero;

        if (numero) {
            numero = numero.toString().trim();
            return this.formatar(numero);
        }
        return null;
    }
}

export default CpfCnpjFormatador;