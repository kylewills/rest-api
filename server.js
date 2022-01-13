const express = require('express');
const shopRoutes = require('./src/shop/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi Kyle it is listening for you...");
})
app.use('/ap1/v1/shops', shopRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

