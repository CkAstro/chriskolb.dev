import axios from 'axios';

const baseUrl = window.location.host.includes('localhost')
   ? 'http://localhost:3004/api'
   : (window.location.host.includes('192')
      ? 'http://192.168.3.105:3004/api'
      : '/api')
;

const getCSMData = (mrto, vwind, vrto) => {
   const request = axios.get(`${baseUrl}/csm/${mrto}/${vwind}/${vrto}`);
   return request.then(response => response.data);
}

const getNeuralNet = () => {
   const request = axios.get(`${baseUrl}/nn/network.json`);
   return request.then(response => response.data);
}

const putNeuralNet = data => {
   return axios.post(`${baseUrl}/nn`, data);
}

const getImage = imageName => {
   const request = axios.get(`${baseUrl}/img/${imageName}`);
   return request.then(response => response.config.url);
}

const sendUserMessage = data => {
   const request = axios.post(`${baseUrl}/contact`, data);
   return request.then(response => response.data);
} 

const getResume = () => {
   const request = axios.get(`${baseUrl}/resume`);
   return request.then(response => response.data);
}

export default { baseUrl, getCSMData, getNeuralNet, putNeuralNet, getImage, sendUserMessage, getResume };
export { baseUrl, getCSMData, getNeuralNet, putNeuralNet, getImage, sendUserMessage, getResume };