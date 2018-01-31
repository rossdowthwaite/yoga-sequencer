# Yoga Position API microservice

An API to serve yoga moves

## Local Setup

Run

```
docker-compose up --build
```
## API reference

| Method | 			Request URL | 		info    |
| ------------- | ------------- | ------------- |
| GET | ```/api/positions``` | Gets all positions |
| GET | ```/api/positions/{{:slug}}```  | Get a single position by **slug** |
| GET | ```/api/positions/{{:slug}}/next```  | Get a positions next available moves |
| GET | ```/api/positions/{{:slug}}/next/{{:level}}```  | Get a positions next available moves by level |
| GET | ```/api/positions/level/{{:level}}```  | Get all moves by **level** |


## Technologies

* Node.js
* Express.js
* MongoDB
* Mocha
* Docker


## Things to do

* Unit coverage
* Authenticate database connection
* Environment Management