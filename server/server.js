const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// if (process.env.NODE_ENV !== 'production') {
// }


app.get("/", (req, res) => {
    res.send("Hey, this is the To to list app");
});

app.post("/api/register", (req, res) => {
    console.log(req.body);
    res.json({
        status: 'ok',
        message: 'check logs'
    })
    
})
app.listen(1337, () => console.log("Server running ..... "));