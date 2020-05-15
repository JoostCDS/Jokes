// import express
const express = require("express");

// create express server
const app = express();

//creating hmtl page

function createSomeJokes(age, gender) {
  let myObject = {
    joke1: `What is green and goes down the slopes very fast`,
    joke2: `What is green and goes down the slopes very fast`,
    joke3: `What is green and goes down the slopes very fast`,
    joke4: `What is green and goes down the slopes very fast`,
    joke5: `What is green and goes down the slopes very fast`,
    joke6: `What is green and goes down the slopes very fast`,
    punch1: `A ski-wi!`,
  };
  const document = `<html>
  <head>
    <title>home</title>
  </head>
  
  <body>
    <h1>${myObject.joke1}</h1>
    <br>
    <p> ${punch1}</p>
  </body>
  </html> `;
  return document;
}

app.get("/:age/:gender", (request, response) => {
  const age = request.params.age;
  const gender = request.params.gender;

  const document = createSomeJokes(age, gender);
  response.send(document);
});

// handler function
function render(message) {
  const document = `
    <html>
    <head>
      <title>home</title>
    </head>
    
    <body>
      <h1>Welcome ${message} ?!!</h1>
      <br>
      we're so happy to see you here!
    </body>
    </html>`;
  return document;
}

// app.get("/user/:name", (request, response) => {
//   const message = request.params.name;
//   const page = render(message);

//   response.send(page);
// });

// register GET /hello endpoint
// app.get(
//   "/", // route to listen on
//   onRequest // callback runs when the route is requested
// );
// app.get(
//     '/user/:name',
//     response.send(param)
// app.get(
//   "/test", // route
//   (request, response) => {
//     // handler callback
//     console.log(request.path);
//     response.send(page);
//   }
// );

// 3000 is common
const port = 4000;

// start listening
app.listen(port, () => console.log(`Listening on :${port}`));
