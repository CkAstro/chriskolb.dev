import axios from 'axios';

const baseUrl = window.location.host.includes('localhost')
   ? 'http://localhost:3004/api'
   : '/api'
;

const getCSMData = (mrto, vwind, vrto) => {
   const request = axios.get(`${baseUrl}/csm/${mrto}/${vwind}/${vrto}`);
   return request.then(response => response.data);
}

const getImage = imageName => {
   const request = axios.get(`${baseUrl}/img/${imageName}`);
   return request.then(response => response.config.url);
}

export { getCSMData, getImage };
export default { getCSMData, getImage };