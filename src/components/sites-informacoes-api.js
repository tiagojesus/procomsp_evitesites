import axios from 'axios';


class SiteInformacoesApi{
    constructor(args){
        this.url_lista_site = './dados/sites_a_evitar.json';

        if(args && args.url){
            this.url_lista_site = args.url;
        }
    }

    loadListaDeSites(){
        return axios.get(this.url_lista_site)
            .then(response => response.data)
            .then(dados => dados.Records);
    }
}

export default SiteInformacoesApi;