const express = require('express');
const PORT = process.env.PORT || 8888;
const fs = require('fs');

const app = express();

// middleware to parse the json requests body, app.use is used to initialize middleware
app.use(express.json());

// reads our json file and stores it in a variable
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

// use a get request to get data from our dev-data file
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    // status code 200 means success
    status: 'success',

    // the number of results we have in our file for the tours array
    results: tours.length,

    // our data object with the tours array
    data: {
      tours,
    },
  });
});

// use a post request to add data to our dev-data file
app.post('/api/v1/tours', (req, res) => {
  res.send('Done');
  const newId = tours[tours.length - 1].id + 1;

  // create a new object, by assigning new properties to an already existing object, with the id and body of request by assigning the id and body to a new object
  const newTour = Object.assign({ id: newId }, req.body);

  // push the new object to our tours array
  tours.push(newTour);

  // write the new tours array with added data object/objects to our json file
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }, // Remove the extra closing parenthesis here
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`, '🚀');
});
