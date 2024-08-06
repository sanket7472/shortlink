import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { postLink, getRedirected , getAllLinks} from './controllers/link.js';
import { PostRegister,postLogin } from './controllers/user.js';


const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    if(conn){
        console.log(`✅ MongoDB Connected Successfully 📦`)
    }
}
connectDB();

app.get("/health", (req,res)=>{
    res.json({
        success : true,
        message : "FTP Link Web"
    })
})
app.get("/alllink", getAllLinks);

app.post("/link", postLink);

app.get("/:slug", getRedirected);

app.post("/signup", PostRegister);

app.post("/login", postLogin)


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})