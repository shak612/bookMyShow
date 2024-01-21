# Book My Show API

Objective: Bookmyshow is a ticketing platform where you can book tickets for a movie show.

## Table of Contents

- [Implementation](#implementation)
- [Routes](#routes)
- [Installation](#installation)
- [To Start Server](#startServer)

## Implementation

- As part of this assignment, we need to build API’s for the following feature. As a user, I can select any theatre in the city. On selecting the theatre, I should be able to see the dates of next 7 days.
- I can click on any date and the page should load to give me all the movies in that theatre on that given date. Movies should contain details of all the showtimes.
  
## Routes

- POST api/users/post - Create new user.
- GET api/users/get - Get all users.
- GET api/users/get/:user_id - Get single user

- POST api/theaters/post - Create new theater.
- GET api/theaters/get - Get all theaters.
- GET api/theaters/get/:theater_id - Get single theater

- POST api/theaters/post - Create new theater.
- GET api/theaters/get - Get all theaters.
- GET api/theaters/get/:theater_id - Get single theater

- POST api/movies/post - Create new movie.
- GET api/movies/get - Get all movies.
- GET api/movies/get/:movies_id - Get single movies

- POST api/movies/post - Create new movie.
- GET api/movies/get - Get all movies.
- GET api/movies/get/:movies_id - Get single movie

- POST api/shows/post - Create new show and you should pass movie_id, theater_id as a foreign key.
- GET api/shows/get/:theater_id - Get all shows associate with theater and if you want get show by date then you have to pass query params in which key should be "dateAndTime" and value "2024-01-16 18:00:00"

## Installation

To expose the endpoints into local, run the following commands.

```sh
npm install
node /src/index.js or nodemon
```
