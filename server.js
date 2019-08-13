const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000
const mongoose = require('mongoose')
const userRoutes = require('./app/routes/user_routes')
const addressRoutes = require('./app/routes/address_routes')
const caseRoutes = require('./app/routes/case_routes')

app.use(bodyParser.json());

//mongodb+srv://mongo:mongo@gettingstarted-jxcsg.mongodb.net/helpet?retryWrites=true&w=majority
//mongodb://127.0.0.1:27017/helpet
mongoose.connect('mongodb+srv://mongo:mongo@gettingstarted-jxcsg.mongodb.net/helpet?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection; connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.get("/", (req,res) => {
    res.send("hola from badack")
})


app.use('/users',userRoutes);
app.use('/address',addressRoutes);
app.use('/cases',caseRoutes);

app.listen(PORT, function () {
    console.log("Server is running on port: " + PORT);
});