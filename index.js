const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// routes
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")

app.use(express.json())
dotenv.config()

// mongoose conenct
mongoose.connect(
    process.env.MONGO_URL
).then(()=>{
    console.log("Connection Succesful")
})
.catch(err => {
    console.log(err)
})

app.get("/api", (req,res) => {
    res.send({message: "api succesfully working"})    
})

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)

app.listen(process.env.PORT || 5000, ()=> {
    console.log("Backend server is running")
});