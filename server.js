require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');



mongoose.connect(process.env.DB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: false,

})
.then(() => console.log('mongoDB is connected'))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log ("Server is running"));