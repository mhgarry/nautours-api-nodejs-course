const express = require('express');
const PORT = process.env.PORT || 8888;

const app = express();

app.listen(PORT, (req, res, err) => {
    if (err) {
        console.error(err);
        throw err; 
    } else {
        console.log(`Server running on port ${PORT}`);
    }
})