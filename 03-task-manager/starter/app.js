require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/taskRoutes');
const connectDB = require('./db/conn.js');
const notFounnd = require('./middleware/not-found.js')
const errorHandlerMiddlware = require('./middleware/error-handler.js')

// middleware
app.use(express.static('./public')) 
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

app.use(notFounnd)
app.use(errorHandlerMiddlware)

// Start the server and connect to the database
app.listen(port, async () => {
    try {
        console.log(`Server started on port ${port}`);
        await connectDB(process.env.MONGODB_URI);
    } catch (error) {
        console.error("Failed to connect to the database. Server not started.");
        process.exit(1);
    }
}); 
   