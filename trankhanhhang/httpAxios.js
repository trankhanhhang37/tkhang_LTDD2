import axios from "axios";

const httpAxios = axios.create(
    {
        baseURL: 'http://10.17.8.139/android/trankhanhhang_laravel/public/api/',
        timeout: 100000,
        headers: { 'X-Custom-Header': 'foobar' }
    }
);

export default httpAxios;