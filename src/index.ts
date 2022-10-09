import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);
app.use(express.json());



app.listen(3000);