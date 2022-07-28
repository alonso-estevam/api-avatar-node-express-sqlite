const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello world!")
});

app.post('/characters', (req, res) => {
    console.log(req.body);
    res.json({
        "statusCode": 200
    })
});

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})