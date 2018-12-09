import axios from 'axios';

function convertParaData(data) {
    data = data.split('/').reverse().join('-');
    return new Date(data);
}


class SiteInformacoesApi {
    constructor(args) {
        this.url_lista_site = './dados/sites_a_evitar.json';

        if (args && args.url) {
            this.url_lista_site = args.url;
        }
    }

    loadListaDeSites() {
        return axios.get(this.url_lista_site)
            .then(response => response.data)
            .then(dados => {
                let sites = dados.Records;
                if (Array.isArray(sites)) {
                    return sites.map(site => {
                        site.data_inclusao = convertParaData(site.data_inclusao) ;
                        return site;
                    });
                }
                return [];
            });
    }
}

export default SiteInformacoesApi;