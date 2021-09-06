# Communication Scheduling API

## About

This project was developed as a test to show some skills with NodeJS. This is a skeleton that could be used to learn and implement more features.

Coded in this project we have: 
* Sequelize to create migrations and interface with a PostgreSQL database. 
* Jest to create integration and unit tests. (I focused on integration tests)
* Supertest to test HTTP
* dotenv to use enviroment variables

As a plus I conteinerized this app so others could test easy as firing **docker-compose up**.

## Getting Started

To be able to test this app you need to have [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).

So, clone this repo and enter *communication_scheduling* directory and start the app:

```bash
docker-compose up -d
```

Wait for app build its containers and thats it!

I add in the **insomnia** directory a file that could be imported in Insomnia app. This will create the requests for testing the API. But you can use other apps, like Postman as you like.

If you want to fire the tests, after conteiners are up, you could enter:

```bash
docker-compose run app yarn test
```

This will show you the tests that was runned and a summary.

## For further implementation

* Validations
* Improve adding a service layer
* Improve adding a repository layer

## License

MIT


