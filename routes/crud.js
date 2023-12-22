const express = require("express")
const router = express.Router();
const Weather = require('../models/weather_model')
const fetchWeatherData = require('./fetchWeather')



// Create (POST)
router.post('/weather', async (req, res) => {
    const { location } = req.body;
    try {
      const weatherData = await fetchWeatherData(location);
      const createdWeather = await Weather.create(weatherData);
      res.status(201).json(createdWeather);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch or store weather data.' });
    }
  });

// Read (GET)
router.get('/weather', async (req, res) => {
    try {
      const allWeather = await Weather.find();
      res.status(200).json(allWeather);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve weather data.' });
    }
  });

// Update (PUT)
router.put('/weather/:id', async (req, res) => {
    const { id } = req.params;
    const { location } = req.body;
    try {
      const updatedWeather = await Weather.findByIdAndUpdate(
        id,
        { location },
        { new: true }
      );
      if (!updatedWeather) {
        return res.status(404).json({ error: 'Weather data not found.' });
      }
      res.status(200).json(updatedWeather);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update weather data.' });
    }
  });

// Delete (DELETE)
router.delete('/weather/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Weather.findByIdAndDelete(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete weather data.' });
    }
  });

// Search
router.get('/weather/:location', async (req, res) => {
    const { location } = req.params;
    try {
      const weatherData = await fetchWeatherData(location);
      res.status(200).json(weatherData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data.' });
    }
  });




module.exports = router
