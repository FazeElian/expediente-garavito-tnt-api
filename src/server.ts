import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import cors from "cors";

// Database config
import { db } from './config/db';

// Story Router
import router from './routes/storyRouter';

// CORS
import { CORSConfig } from './config/cors';

async function connectDB () {
    try {
        await db.authenticate();
        db.sync();
        console.log(colors.blue.bold("Connected to the database sucessfully"));
    } catch (error) {
        console.log(colors.red.bold(`Error while connecting to the database: ${error}`));
    }
}
connectDB();

const app = express()

app.use(cors(CORSConfig))
app.use(morgan('dev'))
app.use(express.json())

// Add router
app.use("/api/", router)

export default app