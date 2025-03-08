import express from 'express';
import mongoose from 'mongoose';
import {routes} from './Routes/YoutubeData.routes.js'
import dotenv from 'dotenv';
import { userRoutes } from './Routes/User.routes.js';
import cors from 'cors';
import { commentRoutes } from './Routes/comment.routes.js';

dotenv.config();
const app=express();

const databaseName='Youtube_Clone';

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

const db=mongoose.connection;
db.on('open',()=>{
  console.log(`Connection is Successful`)
})
db.on('error',()=>{
  console.log(`Connection isn't successful`)
})

routes(app);
userRoutes(app);
commentRoutes(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});