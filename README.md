# Yoga Sequencer API microservice

Given query params, will generate a yoga sequence using the yoga-service API

## Local Setup

Run

```
docker-compose up --build
```
## API reference

| Method | 			Request URL | 		info    |
| ------------- | ------------- | ------------- |
| GET | ```/api/sequences``` | Gets all positions |
| GET | ```/api/sequences/:slug```  | Get a single position by **slug** |
| GET | ```/api/sequences/level/:level```  | Get all sequences by level |
| GET | ```/api/create-sequence```  | Creates a new sequence|



## Technologies

* Node.js
* Express.js
* MongoDB
* Mocha
* Docker


## Things to do

* Unit coverage
* Authenticate database connection
* Save sequence(s) to DB
* Environment Management
