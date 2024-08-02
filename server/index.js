

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { PostLink, GetRedirectUrl } from './controllers/Link.js'


const app = express()
app.use(cors())
app.use(express.json())

const dbconnection = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URL)
    if (connect) {
        console.log("Mongodb Connected 📚")
    }
    else {
        console.log("Mongodb Not Connected")
    }
}
dbconnection();
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "server is running..."
    })
})

app.post("/link", PostLink)
app.get("/:slug", GetRedirectUrl);



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})