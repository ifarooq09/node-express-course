const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            writeConcern: {
                w: "majority",
                wtimeout: 1000
            }
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error: ", error);
        throw error;
    }
};

module.exports = connectDB;
