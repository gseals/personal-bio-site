import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((response) => {
      const demTech = response.data;
      const tech = [];
      Object.keys(demTEch).forEach((fbId) => {
        demTech[fbId].id = fbId;
        tech.push(demTech[fbId]);
      });
      resolve(tech);
    })
    .catch((error) => reject(error));
});

export default { getTechData };
