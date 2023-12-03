// const express = require('express');
// const dotenv = require('dotenv');

// const dbConnect = require('./dbConnect');
// const authRouter = require('./routers/authRouter');
// const postsRouter = require('./routers/postsRouter');
// const morgan = require('morgan');
// const cors = require("cors");

// const cookieParser = require('cookie-parser');



// dotenv.config('./.env');
// const app = express();

// app.use(
//     cors({
//         credentials: true,
//         origin: "http://localhost:3000"
//     })
// );


// // middleware
// app.use(express.json());
// app.use(morgan('common'));
// app.use(cookieParser());

// app.use('/auth', authRouter);
// app.use('/posts', postsRouter);
// app.get('/', (req, res) => {
//     res.status(200).send('ok from server');
// })

// dbConnect();
// const PORT = process.env.PORT || 4001
// app.listen(PORT, () => {
//     console.log(`listening on port : ${PORT}`);
// });


// // index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

// Sample route for user authentication
app.post('/api/login', (req, res) => {
    // Implement your login logic here
    // Validate user credentials, generate and send back a token if successful
    const { username, password } = req.body;
    // Example: Check if the credentials are valid
    if (username === 'demo' && password === 'password') {
        res.json({ token: 'your_generated_token' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Sample route for brewery search
app.get('/api/breweries', (req, res) => {
    const { city } = req.query;
    // Implement your brewery search logic here
    // Example: Fetch brewery data based on the city from your database or external API
    const breweries = [{ name: 'Brewery1' }, { name: 'Brewery2' }]; // Replace with your data
    res.json(breweries);
});

// Sample route for submitting a review
app.post('/api/breweries/:id/reviews', (req, res) => {
    const { id } = req.params;
    const { rating, description } = req.body;
    // Implement your review submission logic here
    // Example: Store the review in your database
    // Return a success message or the updated review list
    const review = { rating, description };
    res.json({ message: 'Review submitted successfully', review });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


