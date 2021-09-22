import axios from "axios";
import * as api from '../const/api_url';

export default function callAPI(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${api.API_URL}/${endpoint}`,
        data: body
    }).catch(err=>{
        console.log(err);
    })
}