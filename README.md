
# Helsinki city bike app

This project was created as a pre-assignment for [Solita's Dev Academy 2023](https://github.com/solita/dev-academy-2023-exercise).

In this web app you can search for city bike stations in Helsinki and Espoo, view average journeys from each station, and view the location on map. 

The app has a database of journeys made in May, June and July 2021. You can search for trips based on the departure station, return station and date. 

The backend is done using Node, Express and Javascript and the frontend is done with React.js.

<img width="925" alt="image" src="https://github.com/kaisadia/City-bike-app/assets/122431979/fe1d1e00-955c-4137-8276-71278bf79d76">

## Cloud hosted app

[Here](http://citybike-app.s3-website-us-east-1.amazonaws.com) is a link to the cloud hosted application. 

The app is hosted on Amazon Web Services. The backend runs on Elastic Beanstalk using Docker. AWS Elastic Beanstalk is a service that makes it easy to deploy and manage web applications in the Amazon Web Services (AWS) cloud. It automates the details of capacity provisioning, load balancing, auto-scaling, and application deployment, creating an environment that runs a version of your application. 
The frontend of the application is stored in AWS S3 bucket. S3 is good for hosting frontends because it offers scalable and secure storage for static websites. 

## Run Locally

Clone the project

```bash
  git clone https://github.com/kaisadia/City-bike-app.git
```

Go to the project directory

```bash
  cd city-bike-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

to build the frontend run 

```bash
  npm run build
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the backend:

`PGUSER`

`PGHOST`

`PGDATABASE`

`PGPASSWORD`

and to your frontend .env.local file:

`REACT_APP_GOOGLE_MAPS_API_KEY`


## Run using Docker

The backend and frontend both consist of their own Docker-files. 
[Here](https://hub.docker.com/repository/docker/kaisadia/citybikes-frontend/general) is a link to frontend in Dockerbub and [here](https://hub.docker.com/repository/docker/kaisadia/citybikes-backend/general) to backend. 

To run the frontend in Docker

```bash
  docker run -p 80:3000 -e REACT_APP_GOOGLE_MAPS_API_KEY=”your-api-key” kaisadia/citybikes-frontend:latest
```

To run the backend in Docker

```bash
  docker run -p 8080:8080 -e PGUSER=xxxx -e PGHOST=xxxx -e PGDATABASE=xxxx -e PGPASSWORD=xxxx -e PGPORT=5432  kaisadia/citybikes-backend:latest
```


## Features

- Server side pagination on Stations and Trips pages as well as search results
- Casing insensitive search for stations
- Casing insensitive search for trips by departure station, return station and date 

<img width="914" alt="image" src="https://github.com/kaisadia/City-bike-app/assets/122431979/9212e5fb-ccf6-4687-a02a-c6d20c38bec1">

- Single stations information: 
    - Total trips to and from
    - Average distance from and to station
    - Zoomable location on map 
    
<img width="902" alt="image" src="https://github.com/kaisadia/City-bike-app/assets/122431979/3683dd91-355e-4920-8ca6-6f7811b80dd7">


<img width="438" alt="image" src="https://github.com/kaisadia/City-bike-app/assets/122431979/dea9129e-7b01-4e8c-98f6-9f7793488179">



## Database

The database is cloud hosted in AWS RDS Aurora. It’s a fully managed, PostgreSQL-compatible relational database engine that combines the speed, reliability, and manageability of Amazon Aurora with the simplicity and cost-effectiveness of open-source databases. I chose a relational database for this project since the data is consistent. I used PgAdmin as a GUI-tool. 
I created two tables, stations and trips, with the following schemas:


```SQL
CREATE TABLE trips (
    id integer NOT NULL,
    dep_time character varying(50),
    ret_time character varying(50),
    dep_station_id integer,
    dep_station_name character varying(50),
    ret_station_id integer,
    ret_station_name character varying(50),
    covered_distance integer,
    duration integer
)

```

From trips, I deleted duplicate rows and rows, where duration was less than 10 seconds or where distance was less than 10 meters. 

```SQL
CREATE TABLE stations (
    id integer NOT NULL,
    dep_time character varying(50),
    ret_time character varying(50),
    dep_station_id integer,
    dep_station_name character varying(50),
    ret_station_id integer,
    ret_station_name character varying(50),
    covered_distance integer,
    duration integer
)

```

## Running Tests

To run tests, run the following command

```bash
  npm test
```
Backend API tests are done with Jest and Supertest, which are two libraries used for backend API testing. Jest is a JavaScript-based testing framework that lets you test both front-end and back-end applications, while SuperTest is a library for doing HTTP testing. Together, they allow for behavioral testing of the input and output of data without knowledge of the internal structure of the API.

Frontend testing is done by using Jest and react-testing-library which come pre-packaged with React create app. 



