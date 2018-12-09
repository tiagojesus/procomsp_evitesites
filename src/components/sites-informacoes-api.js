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
            .then(dados =>{
                let sites = dados.Records;
                if(Array.isArray(sites)){
                    let itens = sites.map(site => {
                        let data = site.data_inclusao;
                        data = data.split('/').reverse().join('-');
                        site.data_inclusao = new Date(data);
                        return site;
                    })
                    console.log(itens);
                    return itens;
                }
                return [];
            });
    }
}

export default SiteInformacoesApi;