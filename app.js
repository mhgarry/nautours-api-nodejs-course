const express = require('express');
const PORT = process.env.PORT || 8888;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from server');
});

app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
});