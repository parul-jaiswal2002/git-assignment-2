require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose") 
const loginRoutes = require('./routes/loginRoutes')
const postRoutes = require('./routes/postRoutes')

const app = express()
//middleware
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is runnig")
    })
})
.catch((error) => {
    console.log(error)
})

//default route
app.use("/", loginRoutes )
app.use('/posts', postRoutes)