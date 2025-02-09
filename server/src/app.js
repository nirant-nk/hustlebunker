import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json({ limit: '30mb', extended:true}));
app.use(bodyParser.urlencoded({ limit: '30mb', extended:true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

export default app;