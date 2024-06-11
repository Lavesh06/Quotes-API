const express = require('express');
const app = express();
require('./config/db.js');
const port = process.env.PORT || 5000;
const cors = require('cors');
const quoteRouter = require('./router/router.js');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(quoteRouter);

app.listen(port, () => {
    console.log(`Connected at ${port}`);
})