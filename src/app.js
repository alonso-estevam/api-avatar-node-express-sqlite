import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

import router from './routes.js';

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})