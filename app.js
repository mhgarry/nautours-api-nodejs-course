const express = require('express');
const PORT = process.env.PORT || 8888;

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello from the server!', app: 'Express Apis'});
});

app.post('/', (req, res) => {
    res.status(200).json({message: 'Hello from the server!', app: 'Post Apis'})
});
app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
});