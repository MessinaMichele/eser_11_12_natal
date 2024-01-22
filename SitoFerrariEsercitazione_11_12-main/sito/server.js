const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors'); // HTTP access control (CORS) for cross-origin requests
app.use(cors()); // Setup cors
app.use(express.static('images'));


app.get('/ferrari-488', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/app/ferrari-488/ferrari-488.component.html'));
});

app.get('/ferrari-mythos', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/app/ferrari-mythos/ferrari-mythos.component.html'));
});

app.get('/ferrari-pininfarina', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/app/ferrari-pininfarina/ferrari-pininfarina.component.html'));
});

app.get('/ferrari-portofino', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/app/ferrari-portofino/ferrari-portofino.component.html'));
});

app.get('/ferrari-purosangue', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/app/ferrari-purosangue/ferrari-purosangue.component.html'));
});

app.get('/ferrari-sf90', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/app/ferrari-sf90/ferrari-sf90.component.html'));
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
