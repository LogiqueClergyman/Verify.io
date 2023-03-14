import axios from 'axios';
const corsUrl = 'https://cors-anywhere.herokuapp.com/';
axios.get('https://api.example.com/data')
  .then((response) => {
    // handle success
    console.log(response.data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
const getApiData = async () => {
    const apiUrl = "https://ipqualityscore.com/api/json/phone/sDbjd6FTxl4IAVuvpmyvY4eKeL1H8VYM/916388478002";
    const url = corsUrl + apiUrl;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  export { getApiData };
  