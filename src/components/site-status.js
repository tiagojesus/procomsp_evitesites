import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faUser);
library.add(faUserSlash);


class SiteStatus extends Component{
    render(){
        let icon = this.props.status==="1"? "user": "user-slash";
        let style = this.props.status==="1"? "site-status__online": "site-status__offline";

        return (
            <FontAwesomeIcon icon={icon} className={style} />
        )
    }
}

export  default SiteStatus;