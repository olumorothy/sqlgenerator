# SQL GENERATOR

A fullstack web application developed using ChatGPT API,React,Node.js and Express.

<img width="1310" alt="Screenshot 2023-04-20 at 11 55 07" src="https://user-images.githubusercontent.com/36680826/233400537-92f2548f-810f-478d-b5d5-0a7e7889c28a.png">

## Instructions
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


## How to Clone

The information below will allow you to get this application on your local machine.

Clone this repository on to your local machine using the command

```
git clone https://github.com/olumorothy/sqlgenerator.git
```

## Installation Guides

To install the necessary dependencies, run the following command in each directory(client and server);

```
npm install
```

## Connecting to the OpenAI API

You will need to create a .env files to setup this project on your local repo:
In it, add OPENAI_API_KEY=<your openAi key>, as seen in the .env.example.
Double check that these .env files are gitignored.

## To run

To start up the client side(Frontend), cd into the client directory then run the code below

```
npm run dev
```

To start up the server side(Backend), cd into the server directory then run the code below

```
npm start
```

# API ENDPOINTS
The API contains two endpoints such as:

```

- GET / --> The Home page.

- Post /generate --> Pass an object as the query description and returns the equivalent SQL 
    request body: {
                    "queryDescription":"show all the first 10 elements of the table users where the value of the column age is greater than 18"
                  }
          returns: {
                  "response": "SELECT * FROM users WHERE age > 18 LIMIT 10;"
                  }
```


### Note : Two models sample were used with the default model as "gpt-3.5-turbo". To use the "text-davinci-003" model, head over to the server directory
and uncomment line 38 "return await daVinci(queryDescription)" and comment out the chatGptApi() invocation- line 39. Save, restart your server and test.
