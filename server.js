// server.mjs
import express from 'express';
import fs from 'fs';

const app = express();

// let htmlBody =`
// <html>
//     <head>
//         <title>lab1</title>
//     </head>
//     <body>
//         <h1>welcme to Back-End</h1>
//     </body>
// </html>
// `

// app.get('/', (req, res) => {
//   res.type('html').send(htmlBody);
// });

// app.get('/', (req, res) => {
//   res.redirect('https://images.pexels.com/photos/17631065/pexels-photo-17631065/free-photo-of-ruins-of-abandoned-house-in-vast-grassland-flow-country-scotland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
// });

const img = fs.readFileSync('./imege.jpeg');

app.get('/', (req, res) => {
  res.type('jpeg').send(img);
});

// starts a simple express server locally on port 3000
app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`
