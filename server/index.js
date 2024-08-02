

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import Link from './Model/Link.js'

dotenv.config()


import { PostLink , GetRedirectUrl } from './controllers/Link.js'
import { Health, Error } from './controllers/Health.js'

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

app.post("/link", PostLink)
app.get("/:slug",GetRedirectUrl )
app.get('/health', Health)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})