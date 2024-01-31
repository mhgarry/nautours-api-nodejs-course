const express = require('express');
const PORT = process.env.PORT || 8888;
const fs = require('fs');

const app = express();
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
