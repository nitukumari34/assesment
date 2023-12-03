const mongoose = require('mongoose');


module.exports = async () => {
    const mongoUri = "mongodb+srv://nituspj032001:0JGtpcHkirrlZRSs@cluster0.zbbmfxi.mongodb.net/?retryWrites=true&w=majority";


    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`Mongodb connected:${connect.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);

    }

};

const User = require('./models/User');
const Brewery = require('./models/Brewery');
const Review = require('./models/Review');



