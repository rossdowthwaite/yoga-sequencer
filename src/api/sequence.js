const status = require('http-status')
const express = require('express')
const cors = require('cors')

module.exports = (app, options) => {
  const {repo} = options

  const corsOptions = {
    origin: process.env.CORS_URL,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.get('/', cors(corsOptions), (req, res, next) => {
    res.send({title:'hello world'})
  })

  app.get('/api/sequences', cors(corsOptions), (req, res, next) => {
    repo.getAllSequences()
      .then( sequences => {
        res.status(status.OK).json(sequences)
      })
      .catch(next)
  })

  app.get('/api/sequences/:name', cors(corsOptions), (req, res, next) => {
    repo.getSequenceBySlug(req.params)
      .then( sequence => {
        res.status(status.OK).json(sequence)
      })
      .catch(next)
  })

  app.get('/api/sequences/level/:level', cors(corsOptions), (req, res, next) => {
    repo.getSequenceByLevel(req.params)
      .then( sequence => {
        res.status(status.OK).json(sequence)
      })
      .catch(next)
  })

  app.get('/api/create-sequence', cors(corsOptions), (req, res, next) => {
    console.log(req.query)
    repo.createNewSequence(req.query)
      .then( sequence => {
        res.status(status.OK).json(sequence)
      })
      .catch(next)
  })
}
