# Weather App
## Description
This Weather App is a simple Node.js application that fetches weather data from OpenWeatherMap and stores it in a MongoDB database. It provides CRUD (Create, Read, Update, Delete) functionalities for weather data.

## Requirements
Node.js
MongoDB
OpenWeatherMap API key

## Installation
Clone the repository.
Install dependencies using npm install.
Set up MongoDB and obtain an OpenWeatherMap API key.
Create a .env file in the root directory and add your MongoDB connection string and OpenWeatherMap API key.

Run the application using npm start.

## Usage
## POST /weather: 
Create new weather data by providing a location.
## GET /weather: 
Retrieve all stored weather data.
## PUT /weather/:id: 
Update weather data by ID, providing a new location.
## DELETE /weather/:id: 
Delete weather data by ID.
## GET /weather/:location: 
Search for weather data by location.

## Environment Variables
## MONGODB_URI: 
MongoDB connection string.
## API_KEY: 
Your OpenWeatherMap API key.

## API Endpoints
POST /weather
Request body: { "location": "CityName" }
## GET /weather
## PUT /weather/:id
Request body: { "location": "NewCityName" }
## DELETE /weather/:id
## GET /weather/:location
