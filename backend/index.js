import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
// Db-config import
import sequelize from './config/database.js';
// Route imports
import statusRouter from './routes/status.js';
import dashboardsRouter from './routes/dashboards.js';


// Db connectivity through sequelize
sequelize.sync({ force: false }).then(() => console.log("db is ready"));


// App init
const app = express();
app.use(express.json({ limit: '50mb' }));


// CORS middlerware setup
var whitelist = ['http://localhost:3000', 'http://localhost:3001', 'https://sams-club.vercel.app']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors());  // provide corsOptions in the parameter of cors like *cors(corsOptions)* if needed!


// Routes configuration
app.use('/status', statusRouter);
app.use('/dashboards', dashboardsRouter);


// Dotenv configuration
dotenv.config();


// Listening
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))