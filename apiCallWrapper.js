import { createHashHistory } from 'history';
import queryString from 'query-string';

export function apiCall(request) {
    const browserHistory = createHashHistory();

    return new Promise((resolve, reject)=>{
        let token = localStorage.getItem('AUTH_TOKEN');
        let fetchData = {
            method: request.method,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
      
        let fetchUrl = process.env.MIX_REACT_APP_DOMAIN_URL + '/api/' + request.url;

        if(request.query !== undefined){
            let data = queryString.stringify(request.query, {arrayFormat: 'bracket'});
            fetchUrl = fetchUrl + '?'+ data;
        }

        { request.data !== undefined ? fetchData["body"] = JSON.stringify(request.data) : fetchData }

        fetch(fetchUrl, fetchData).then((response)=> {
            {
                if(response.status === 401 ){ browserHistory.push('/login')}
                else if(response.status < 400 ){ resolve(response.json()) }
                else { reject(response.json()); }
            }
        }).catch((error)=>{
            reject(error);
        });
    });
}
