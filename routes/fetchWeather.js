const axios = require('axios')

const fetchWeatherData = async (location) => {
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    try {
      const response = await axios.get(apiUrl);
      const { name, main, weather } = response.data;
      return {
        location: name,
        temperature: main.temp,
        description: weather[0].description,
      };
    } catch (error) {
      throw error;
    }
  };

module.exports = fetchWeatherData