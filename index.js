// import express
const express = require("express");

// create express server
const app = express();

function staticpage() {
  const page = `<style type="text/css">
  p {
    color: #26b72b;
  }
  </style>
  <html>
  <head>
    <title>home</title>
  </head>
  
  <body>
    <h1>Home</h1>
    <br>
    <p>This is the home page, tell me more tell more more!</p>
  </body>
  </html> `;
  return page;
}

function createSomeJokes(age, gender) {
  let myObject = {
    joke1: `What is green and goes down the slopes very fast`,
    joke2: `What is green and goes down the slopes very fast`,
    joke3: `What is green and goes down the slopes very fast`,
    punch1: `What is green and goes down the slopes very fast`,
    punch2: `What is green and goes down the slopes very fast`,
    punch3: `What is green and goes down the slopes very fast`,
  };
  const document = `<style type="text/css">
  p {
    color: #26b72b;
  }

  h1 {
    color: green;
  }
  </style>
  <html>
  <head>
    <title>home</title>
  </head>
  
  <body>
    <h1>${myObject.joke1}</h1>
    <br>
    <p>${myObject.punch1}</p>
    <a href="./gender/age">The Best Joke ever</a>
  </body>
  </html> `;
  return document;
}

app.get("/:age/:male", (request, response) => {
  const age = request.params.age;
  const gender = request.params.gender;

  const document = createSomeJokes(age, gender);
  response.send(document);
});
app.get("/", (request, response) => {
  const page = staticpage();
  response.send(page);
});

// handler function
// function render(message) {
//   const document = `
//     <html>
//     <head>
//       <title>home</title>
//     </head>

//     <body>
//       <h1>Welcome ${message} ?!!</h1>
//       <br>
//       we're so happy to see you here!
//     </body>
//     </html>`;
//   return document;
// }

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

const port = process.env.PORT || 3000;

// start listening
app.listen(port, () => console.log(`Listening on :${port}`));
