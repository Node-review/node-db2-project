const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const db = require('./data/dbConfig.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(logger('dev'));

server.get('/', (req, res) => {
  res.send({ API: `It's working` });
});

server.get('/cars', async (req, res) => {
  try {
    const cars = await db('cars');
    res.status(200).json(cars)
  }
  catch (err) {
    res.status(500).json({ err, message: 'Failed to get cars' })
  }
});

server.get('/cars/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const car = await db('cars').where({ id });
    res.status(200).json(car);
  }
  catch (err) {
    res.status(500).json({ err, message: 'Failed to get the specified car' })
  }
});

server.post('/cars', async (req, res) => {
  try {
    const car = req.body;
    const inserted = await db('cars').insert(car);
    res.status(201).json(inserted[0]);
  }
  catch (err) {
    res.status(500).json({ err, message: 'Failed to add car to the database' })
  }
})

module.exports = server;