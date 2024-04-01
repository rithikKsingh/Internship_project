const {createServer}=require("http")
const {Server}=require("socket.io")
const express=require('express');
const fileUpload=require("express-fileupload")
const cookieParser=require("cookie-parser")
const app=express();
// const port=6000;
const httpServer=createServer(app)
global.io=new Server(httpServer)
const apiRoutes=require("./routes/apiRoutes")


app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())

//MongoDb connection
const connectDB=require("./config/db")
connectDB();



app.get('/',async(req,res,next)=>{
    res.json({message:"API running..."})
   })


app.use("/api",apiRoutes)
app.use((error, req, res, next) => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
    next(error);
  });
  app.use((error, req, res, next) => {
    if (process.env.NODE_ENV === "development") {
      res.status(500).json({
        message: error.message,
        stack: error.stack,
      });
    } else {
        res.status(500).json({
           message: error.message, 
        })
    }
  });
  
// app.listen(port,()=>{
//     console.log(`App listening on port: ${port}`)
// })

const Port=process.env.Port||6000;
httpServer.listen(Port,()=>console.log(`Server running on port ${Port}`))
