import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import router from "./routes/TodoRoutes.js"




const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

mongoose
  const db = mongoose.connect(process.env.MONGO_URI)
  try {
    console.log("MongoDB connected..." );
  } catch (error) {
    console.log(error);
  }
  

app.use("/api", router);



app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
