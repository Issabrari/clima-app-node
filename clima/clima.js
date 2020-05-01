const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=411c6ba4be3e94510d137677ab59e171&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}